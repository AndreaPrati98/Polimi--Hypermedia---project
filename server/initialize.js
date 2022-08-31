
export default async (models) => {
    /* 10 */
    const eventList = [
        {
            name: "Theater 1",
            description: "Theater 1 um dolor sit ame elit. Integer cursus eleifend mi id dapibus. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "17/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 2",
            description: "Theater 2 um dolor sit amet, consectetur adipisnd mi id dapibus. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "18/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 3",
            description: "Theater 3 um dolor sit amet, consecteger cursus eleifend mi id dapibus. Ut vestibulum pellentesque molestie. ",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "19/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 4",
            description: "Theater 4 um dolor sit amet, consectetur adipiscing apibus. Ut vestib",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "20/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 5",
            description: "Theater 5 um dolor sit amet, conseifend mi id dapibus. Ut vestibulum pellentesque molestie.",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "21/06/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 6",
            description: "Theater 6 um dolor selit. Integer cursus eleifend mi id dapibus. Ut vestibulum pellentesq",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "17/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 7",
            description: "Theater 7 um dolor sit amet, consectetur adipiscing elit. Integer cursus bus.",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "18/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 8",
            description: "Theater 8 um dolor sit amet, consectetur adipiscing elit. Integer",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "19/07/2022",
            time: "18:15",
            details: "blah 8",
        },
        {
            name: "Theater 9",
            description: "Theater 9 um dolor sit amet, consectetur adipiscing elit. Integepib",
            img: "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
            date: "20/07/2022",
            time: "18:15",
            details: "blah ",
        },
        {
            name: "Theater 10",
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
            name: "Opéra Grand Avignon",
            img: "https://festival-avignon.com/storage/image/41/183941_62012fa83e91a.jpeg",
            caption: "The Opéra d'Avignon is an opera house located in Avignon, France that has been in operation for almost two centuries.",
            description: "The initial opera house was constructed in 1824–1825, and opened with its inaugural performance on 30 October 1825. The original opera house was destroyed in a fire on 26 January 1846.",
            address: "Pl. de l'Horloge, 84000 Avignon, Francia",
        },
        {
            name: "Cour d'Honneur of the Palais des papes",
            img: "https://festival-avignon.com/storage/image/6/132106_615c4a55a5a7a.jpeg",
            caption: "It was in the Cour d'Honneur of the Palais des papes that the Festival d'Avignon began in 1947, with William Shakespeare's The Tragedy of King Richard II, directed by Jean Vilar.",
            description: "It has long remained the main venue of the Festival. It was only from the mid-1960s that new venues open. These new locations, often historical and seldom dedicated to live performance, offer surprising and original theatrical spaces and give Avignon its personality each summer as a city-theatre.",
            address: "Place du Palais 84000 Avignon",
        },
        {
            name: "CloîTtre des carmes",
            img: "https://festival-avignon.com/storage/image/75//1675_5ece1c36bf33e.jpg",
            caption: "The cloister of the Carmelites , located on Place des Carmes and dependent on the conventual church of the Carmelites , is one of the many examples of the convents built in Avignon during the 13th  century .",
            description: "A former Carmelite cloister, The Cloître des Carmes was the first venue to have been invested by the Festival after the Palais des papes. It has been hosting theatre and dance shows since 1967. Within its 14th-century walls, this venue offers an open-air stage that extends under the arcades and can accomodate nearly 500 spectators.",
            address: "Place des Carmes 84000 Avignon",
        },
        {
            name: "Cour du lycée saint-joseph",
            img: "https://festival-avignon.com/storage/image/79//1679_5ece1c36cdd71.jpg",
            caption: "Lycée Saint-Joseph of Avignon is a private Catholic secondary school located in the city of Avignon, Vaucluse, in the Provence-Alpes-Côte d'Azur, France.",
            description: "Built in the 19th century by Jesuits on the site of the Cordeliers convent, the lycée Saint-Joseph is a key venue of the Festival d'Avignon. Every summer, its large square courtyard welcomes a large open-air stage with a 750 seating area.",
            address: "62 rue des Lices 84000 Avignon",
        },
        {
            name: "La Fabrica",
            img: "https://festival-avignon.com/storage/image/57//1657_5ece1c3680d80.jpg",
            caption: "A modern stage of the Festival d'Avignon designed by Polish architect Maria Godlewska.",
            description: "Composed of a hall the size of the stage of the Cour d'honneur, 18 living quarters and 2 adjoining technical spaces, this theatrical “factory” provides a year-round residence for artistic teams working to prepare their next creation for the Festival d'Avignon. This regular presence of artists on the Avignon territory allows the Festival to intensify its work to raise awareness on the performing arts among all audiences.",
            address: "11 rue Paul Achard 84000 Avignon",
        },
        {
            name: "Jardin Ceccano",
            img: "https://festival-avignon.com/storage/image/69//1869_5ece1c392e257.jpg",
            caption: "The médiathèque Ceccano is a former residence of the Avignon cardinals and its garden, with its old stones and ancient trees, has served as the backdrop to our dramatic series for the past 4 years.",
            description: "In 2018, as a counterpart to the series Mesdames, Messieurs et le reste du monde, the city library gave the spectators the opportunity to discover the texts read every day in their entirety, as well as other great texts. The library also partners with the Festival for the creation of the young spectator's guide, as well as for the game “la poursuite des cambrioleurs,” invented to help children discover the Festival d'Avignon, the cultural legacy of the city, and the performing arts.",
            address: "2 bis rue Laboureur 84000 Avignon",
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

    console.log("\n\n")
    const allTypeOfArts = await models.Type_of_art.findAll()


 
    for (let index = 0; index < allEvents.length; index++) {
        // Returns a random integer from 0 to 9: Math.floor(Math.random() * 10);
        let randomPlaceIndex = Math.floor(Math.random() * allPlaces.length)
        allEvents[index].set({placeId: allPlaces[randomPlaceIndex].id})
        allEvents[index].save()

        allEvents[index].set({typeOfArtId: allTypeOfArts[index % 3].id})
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