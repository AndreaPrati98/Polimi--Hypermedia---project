const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

let database;

/*
    we use this if-else control so that we know if we are in 
    the production env or not. 
    Otherwise we would had to comment adn uncomment things every time
*/
if(process.env.NODE_ENV !== "production"){
    database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp");
    console.log("DEVELOPMENT ENVIRONMENT");
} else {
    // Production
    const pgVar = require( 'pg' )
    pgVar.defaults.ssl = true
    database = new Sequelize(process.env.DATABASE_URL, {
        ssl: true,
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, 
        })
    console.log("PRODUCTION ENVIRONMENT"); 
}


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Event = database.define("event", {
        name: DataTypes.STRING,
        description: DataTypes.STRING(2048),
        img: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        details: DataTypes.STRING,
    }, {timestamps: false})

    const Artist = database.define("artist", {
        name: DataTypes.STRING,
        img: DataTypes.STRING,
        date_of_birth: DataTypes.STRING,
        description: DataTypes.STRING(2048),
        /* we should insert also the 'type of art' but we will use a foreign key for that */
    }, {timestamps: false})

    const Type_of_art = database.define("type_of_art", {
        name: DataTypes.STRING,
        description: DataTypes.STRING(1024),
    }, {timestamps: false})

    const Place = database.define("place", {
        name: DataTypes.STRING,
        img: DataTypes.STRING,
        caption:  DataTypes.STRING,
        description:  DataTypes.STRING(1024),
        address: DataTypes.STRING,
    }, {timestamps: false})


    Place.hasMany(Event)
    Event.belongsTo(Place)

    const EventArtist = database.define("EventArtist", {},{timestamps:false})
    
    Event.belongsToMany(Artist, { through: "EventArtist", timestamps: false })
    Artist.belongsToMany(Event, { through: "EventArtist", timestamps: false })

    Type_of_art.hasMany(Event)
    Event.belongsTo(Type_of_art)

    /* This relation is not required in the project specs but we have added it for convenience. */
    // Type_of_art.hasMany(Artist)
    // Artist.belongsTo(Type_of_art)

    await database.sync({ force: true })
    return {
        Event,
        Artist,
        Place,
        Type_of_art,
        EventArtist,
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)
    
    app.get("/events", async (req, res) => {
        const result =  await models.Event.findAll()

        return res.json(result)
    })
    
    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: [{ model: models.Artist }, {model: models.Place}] })
        return res.json(result)
    })
    
    app.get('/eventsByArt/:typeOfArt', async (req, res) => {
        const typeOfArt = +req.params.typeOfArt
        const result = await models.Event.findAll({ 
            where: { typeOfArtId: typeOfArt },
            include: [
                { model: models.Type_of_art },
                // { model: models.Artist }
            ]      
        })

        return res.json(result)
    })

    // HTTP GET api that returns all the artists
    app.get("/artists", async (req, res) => {
        const result = await models.Artist.findAll()
        return res.json(result)
    })

    // HTTP GET api that returns the info for the requested artist (where artistId == :id) along 
    // with the events in which that artist performs in
    app.get("/artists/:id", async (req, res) => {
        const id = +req.params.id
        const result = await models.Artist.findOne({where: {id}, include: [ {model: models.Event}]})
        return res.json(result)
    })


    // HTTP GET api that returns all the places
    app.get("/places", async (req, res) => {
        const result = await models.Place.findAll()
        return res.json(result)
    })
    
    // HTTP GET api that returns the info for the requested place (where placeId == :id) along 
    // with the events that are hosted in that place
    app.get("/places/:id", async (req, res) => {
        const id = +req.params.id
        const result = await models.Place.findOne({where: {id}, include: [ {model: models.Event}]})
        return res.json(result)
    })

    app.get("/typeofart", async (req, res) => {
        const result = await models.Type_of_art.findAll()
        return res.json(result)
    }) 
}

runMainApi()


export default app
