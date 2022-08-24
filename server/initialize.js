
export default async (models) => {
    /* 10 */
    const eventList = [
        {
            title: "Theater 1",
            description: "Theater 1 um dolor sit ame elit. Integer cursus eleifend mi id dapibus. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "17/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 2",
            description: "Theater 2 um dolor sit amet, consectetur adipisnd mi id dapibus. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "18/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 3",
            description: "Theater 3 um dolor sit amet, consecteger cursus eleifend mi id dapibus. Ut vestibulum pellentesque molestie. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "19/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 4",
            description: "Theater 4 um dolor sit amet, consectetur adipiscing apibus. Ut vestib",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "20/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 5",
            description: "Theater 5 um dolor sit amet, conseifend mi id dapibus. Ut vestibulum pellentesque molestie.",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "21/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 6",
            description: "Theater 6 um dolor selit. Integer cursus eleifend mi id dapibus. Ut vestibulum pellentesq",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "17/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 7",
            description: "Theater 7 um dolor sit amet, consectetur adipiscing elit. Integer cursus bus.",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "18/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 8",
            description: "Theater 8 um dolor sit amet, consectetur adipiscing elit. Integer",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "19/07/2022",
            time: "18:15",
            details: "blah 8",
        },
        {
            title: "Theater 9",
            description: "Theater 9 um dolor sit amet, consectetur adipiscing elit. Integepib",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "20/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            title: "Theater 10",
            description: "Theater 10 um dolor sit amet, consectetur adipiscingdapibus. Ut vesti",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "21/07/2022",
            time: "18:15",
            details: "blah ",
        }
    ]
/* 15 */
    const artistList = [
        {
            name: "Maria",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },

        {
            name: "Maria2",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "academy awards",
            
        },
        {
            name: "Maria3",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria4",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },
        {
            name: "Maria5",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },

        {
            name: "Maria6",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },
        {
            name: "Maria7",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },

        {
            name: "Maria8",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "academy awards",
            
        },
        {
            name: "Maria9",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria10",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "academy awards",
            
        },
        {
            name: "Maria11",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria12",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },
        {
            name: "Maria13",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria14",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },
        {
            name: "Maria15",
            img: "https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
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
/* 5 */
    const placesList = [
        {
            name: "Opéra Grand Avignon 1",
            img: "https://lh5.googleusercontent.com/p/AF1QipN_SwYCX8gFQQM0Z7uM2wZFMmp7eALV-gdsAY83=w408-h304-k-no",
            caption: "The Opéra d'Avignon is an opera house located in Avignon, France that has been in operation for almost two centuries.",
            description: "The initial opera house was constructed in 1824–1825, and opened with its inaugural performance on 30 October 1825. The original opera house was destroyed in a fire on 26 January 1846.",
            address: "Pl. de l'Horloge, 84000 Avignon, Francia",
        },
        {
            name: "The Palace Theatre 2",
            img: "https://lh5.googleusercontent.com/p/AF1QipNDRr2bNcudAesBHp09U6bhZBVMkEm1Ep431poW=w408-h725-k-no",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio.",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio delectus ducimus atque maiores sunt mollitia aspernatur laborum eveniet? Nostrum?",
            address: "address !! ",
        },
        {
            name: "Opéra Grand Avignon 3",
            img: "https://lh5.googleusercontent.com/p/AF1QipN_SwYCX8gFQQM0Z7uM2wZFMmp7eALV-gdsAY83=w408-h304-k-no",
            caption: "The Opéra d'Avignon is an opera house located in Avignon, France that has been in operation for almost two centuries.",
            description: "The initial opera house was constructed in 1824–1825, and opened with its inaugural performance on 30 October 1825. The original opera house was destroyed in a fire on 26 January 1846.",
            address: "Pl. de l'Horloge, 84000 Avignon, Francia",
        },
        {
            name: "The Palace Theatre 4",
            img: "https://lh5.googleusercontent.com/p/AF1QipNDRr2bNcudAesBHp09U6bhZBVMkEm1Ep431poW=w408-h725-k-no",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio.",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio delectus ducimus atque maiores sunt mollitia aspernatur laborum eveniet? Nostrum?",
            address: "address !! ",
        },
        {
            name: "The Palace Theatre 5",
            img: "https://lh5.googleusercontent.com/p/AF1QipNDRr2bNcudAesBHp09U6bhZBVMkEm1Ep431poW=w408-h725-k-no",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio.",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio delectus ducimus atque maiores sunt mollitia aspernatur laborum eveniet? Nostrum?",
            address: "address !! ",
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
    const allArtists = await models.Artist.findAll()

 
    for (let index = 0; index < allEvents.length; index++) {
        // Returns a random integer from 0 to 9: Math.floor(Math.random() * 10);
        let randomPlaceIndex = Math.floor(Math.random() * allPlaces.length)
        allEvents[index].set({placeId: allPlaces[randomPlaceIndex].id})
        allEvents[index].save()
        // do we need to also set the key in the places table defining all the events that are hosted in a place- NO
    }
    

    const allIndicies = new Set();
    for(let val = 1; val <= allArtists.length; val++) {
        allIndicies.add(val)
    }
    
    const artistsToIncl = new Set();

    for(let i = 0; i < allEvents.length; i++) {
        // How many artists are performing in this i-th event:
        let randomNum = Math.floor(Math.random() * allArtists.length);
        for(let j = 0; j < randomNum; j++) {
            // Add the randomly-generated index to the set
            artistsToIncl.add(Math.floor(Math.random() * allArtists.length))
        }

        artistsToIncl.forEach((value) => {
            allIndicies.delete(value);
            models.EventArtist.create({eventId: allEvents[i].id, artistId: allArtists[value].id})
        })
    }
}