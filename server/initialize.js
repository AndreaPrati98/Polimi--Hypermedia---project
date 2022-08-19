
export default async (models) => {
    const eventList = [
        {
            title: "title bla bla",
            description: "description bla bla",
            img: "url_img bla bla",
            date: "date bla bla",
            time: "time bla bla",
            details: "details bla bla",
            
        },
        {
            title: "questo",
            description: "è il",
            img: "secondo",
            date: "envento",
            time: "che ho messo",
            details: "nel database",
            
        },
    ]

    const artistList = [
        {
            name: "Maria",
            img: "img bla bla",
            date_of_birth: "27/06/96",
            description: "She is amazing",
        }
    ]

    const typeOfArtList = [
        {
            name: "music",
            description: "Let the music take you away."
        },
        {
            name: "theatre",
            description: "Get the best involvement in us.",
        },
        {
            name: "dance",
            description: "Dance till the stars come down from the rafters.",
        }
    ]

    const placesList = [
        {
            name: "Opéra Grand Avignon",
            img: "https://lh5.googleusercontent.com/p/AF1QipN_SwYCX8gFQQM0Z7uM2wZFMmp7eALV-gdsAY83=w408-h304-k-no",
            caption: "The Opéra d'Avignon is an opera house located in Avignon, France that has been in operation for almost two centuries.",
            description: "The initial opera house was constructed in 1824–1825, and opened with its inaugural performance on 30 October 1825. The original opera house was destroyed in a fire on 26 January 1846.",
            address: "Pl. de l'Horloge, 84000 Avignon, Francia",
        },
        {
            name: "The Palace Theatre",
            img: "https://lh5.googleusercontent.com/p/AF1QipNDRr2bNcudAesBHp09U6bhZBVMkEm1Ep431poW=w408-h725-k-no",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio.",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio delectus ducimus atque maiores sunt mollitia aspernatur laborum eveniet? Nostrum?",
        }
    ]

    await models.Event.bulkCreate(eventList)
    await models.Artist.bulkCreate(artistList)
    await models.Place.bulkCreate(placesList)
    await models.Type_of_art.bulkCreate(typeOfArtList)

    // Here I set the foreign key for event

    console.log("\n\n")
    const allPlaces = await models.Place.findAll()
    
    console.log("\n\n")
    const allEvents = await models.Event.findAll()
  
    console.log("\n\n")
    allEvents[0].set({
        placeId: allPlaces[1].id
    })
    allEvents[0].save()

    allEvents[1].placeId = allPlaces[0].id
    allEvents[1].save()
    

    console.log("\n")
}