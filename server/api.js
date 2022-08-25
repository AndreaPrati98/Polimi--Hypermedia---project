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
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        details: DataTypes.STRING,
    }, {timestamps: false})

    const Artist = database.define("artist", {
        name: DataTypes.STRING,
        img: DataTypes.STRING,
        date_of_birth: DataTypes.STRING,
        description: DataTypes.STRING,
        /* we should insert also the 'type of art' but we will use a foreign key for that */
    }, {timestamps: false})

    const Type_of_art = database.define("type_of_art", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {timestamps: false})

    const Place = database.define("place", {
        name: DataTypes.STRING,
        img: DataTypes.STRING,
        caption:  DataTypes.STRING,
        description:  DataTypes.STRING,
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
    Type_of_art.hasMany(Artist)
    Artist.belongsTo(Type_of_art)

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

const pageContentObject = {
    index: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
    festival: {
        title: "title bla bla",
        description: "description bla bla",
        img: "url_img bla bla",
        date: "date bla bla",
        ticket: "ticket bla bla",
        price: 20,
        location: "location bla bla",
        history: "history bla bla",
    },
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    /** 
     *  this api is used to retrieve information about the page  
     */
    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/event-info/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: { model: models.Place } })
        return res.json(result)
    })

    app.get('/event-info/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id } })
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our fake database
    app.get("/cats", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns all the artists
    app.get("/artists", async (req, res) => {
        const result = await models.Artist.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                img: element.img,
                date_of_birth: element.date_of_birth,
                description: element.description
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns the info for the requested artist (where artistId == :id) along 
    // with the events in which that artist performs in
    app.get("/artists/:id", async (req, res) => {
        const id = +req.params.id
        const result = await models.Artist.findAll({where: {id}, include: [ {model: models.Event}]})
        return res.json(result)
    })


    // HTTP GET api that returns all the places
    app.get("/places", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                caption: element.caption,
                description: element.description,
                address: element.address,
            })
        }
        return res.json(filtered)
    })
    
        app.get("/places/:id", async (req, res) => {
            const id = +req.params.id
            const result = await models.Place.findAll({where: {id}, include: [ {model: models.Event}]})
            return res.json(result)
        })
    


    // HTTP POST apio that will push (and therefore create) a new element in 
    // our fake database 
    app.post("/cats", (req, res) => {
        const { body } = req
        catList.push(body)
        return res.sendStatus(200)
    })
}

runMainApi()


export default app
