
export default async (models) => {
    /* 10 */
    const eventList = [
        { // Music
            name: "Beat Generation",
            description: "Open the doors of perception. Singer Barbara Carlotti lends her voice to the Beat Generation, with help from 'sound assembler' Prieur de la Marne, for a journey to the edge of trance. Singer Barbara Carlotti and “sound assembler” Prieur de la Marne celebrate the Beat Generation, the American movement which, during the postwar period and until the 1960s, played a decisive role in art history.",
            img: "https://festival-avignon.com/storage/image/69/89369_60fd440084f35.jpeg",
            date: "05/06/2023",
            time: "14:00",
            details: "blah ",
        },
        { // Theater
            name: "Moby Dick",
            description: "The legend of writer Herman Melville is brought to life in this theatrical rendition of Moby Dick. Screenplay writer and director Yngvild Aspeli [CHECK THIS NAME] creatively uses the stage to take the audience through an emotional and symbolic journey through the ocean to pursue a giant whale.",
            img: "https://festival-avignon.com/storage/image/58/56558_602e6fab5585c.jpeg",
            date: "05/06/2023",
            time: "18:15",
            details: "blah ",
        },
        { // Dance
            name: "Futur Proche",
            description: "What if the discovery of an instrument could change the world of a choreographer? With FUTUR PROCHE, Belgian choreographer Jan Martens operates a shift in his rhythmic dance, accompanied by a contemporary harpsichord. With fifteen dancers from the Opera Ballet Vlaanderen, two children, and Polish harpsichordist Goska Isphording, he invites us to a moving exploration of whether we can change society, bodies, or ways of thinking, in a time of climate crises and pandemics. Through aesthetically varied works, the choreographer plays with the codes of his virtuoso performers by making them experience a true “presence” on stage.",
            img: "https://festival-avignon.com/storage/image/5/225405_62d6c2daddd4e.jpeg",
            date: "07/06/2023",
            time: "17:30",
            details: "blah ",
        },
        { // Dance
            name: "The Sacrafice",
            description: "With The Sacrifice, choreographer Dada Masilo explores the minimalism and animality of Tswana dance through the lens of Igor Stravinsky’s Rite of spring. For the choreographer, who grew up in South Africa in a xhosa environment, the question wasn’t just to bring together different dances, as she usually does, but to explore her own origins and to work on markers of identity: collective chants, rites, and beyond that, the desire for sacrifice. ",
            img: "https://festival-avignon.com/storage/image/55/225355_62d6a1229ef4e.jpeg",
            date: "08/06/2023",
            time: "20:00",
            details: "blah ",
        },
        { // Theater
            name: "The Damask Drum",
            description: "Theater 5 um dolor sit amet, conseifend mi id dapibus. Ut vestibulum pellentesque molestie.",
            img: "https://festival-avignon.com/storage/image/23/35023_5f92fb1e0e33f.jpeg",
            date: "08/06/2023",
            time: "17:45",
            details: "blah ",
        },
        { // Music
            name: "And Land, Like Language, is Inherited",
            description: "A passionate jazz oratorio inspired by the odyssey of the great Palestinian poet Mahmoud Darwish, this show about the pain of exile couldnt be more relevant",
            img: "https://festival-avignon.com/storage/image/68/223068_62d13b3c47ca1.jpeg",
            date: "09/06/2023",
            time: "15:00",
            details: "blah ",
        },
        { // Music
            name: "Miss Knife and Her Sisters",
            description: "On the last day of the Festival, Miss Knife invites to her cabaret her sisters who embody hope and courage through art: Ukrainian Dakh Daughters and Beninese Angélique Kidjo, accompanied by the Orchestre national Avignon-Provence. From show to show, from opera to operetta, from cabaret to concert, songs are much more than a minor art, they have a depth that can touch all of us, theyre the expression of our humanity.",
            img: "https://festival-avignon.com/storage/image/63/229863_62e14ae75069f.jpeg",
            date: "10/06/2023",
            time: "13:15",
            details: "blah ",
        },
        { // Theater
            name: "Richard II",
            description: "By banishing Henry Bolingbroke, Richard II puts his own reign and kingdom in jeopardy. A masterpiece that would be followed by many others. Richard II is a tragedy of the word and of the exercise of power which, to the sound and fury of other plays, prefers the alliance of prediction and suspense. Haunted by Shakespeare’s great epics, Christophe Rauck directs this masterpiece heralding all the others. An impressive gallery of characters, a constellation surrounding a soon-to-fall king, all hiding a more central axis: the people.",
            img: "https://festival-avignon.com/storage/image/12/226012_62d84659a4e5a.jpeg",
            date: "10/06/2023",
            time: "16:30",
            details: "blah 8",
        },
        { // Dance
            name: "Silent Legacy",
            description: "Maud Le Pladec explores how dance is handed down with Adeline Kerry Cruz, an 8-year-old krumper, and Audrey Merilus, contemporary dancer. A true poetic manifesto. What legacies do they carry within themselves, and how can one invent one’s own dance? Far from being a neutral arbiter, Maud Le Pladec invites us to a vision of dance as sensory expression, when the meeting of cultures and know-hows shows the exploding vitality of teachings and legacies.",
            img: "https://festival-avignon.com/storage/image/22/226922_62da750b81853.jpeg",
            date: "11/06/2023",
            time: "17:15",
            details: "blah ",
        },
        { // Music
            name: "The Line is a Curve",
            description: "Kae Tempest faces the never-ending cycle of social pressures and emotional states to create a hypnotic and defiantly optimistic performance. Introducing their recital with a reading that slowly turns into a concert featuring songs from their latest album The line is a Curve, Kae Tempest, accompanied by multi-instrumentalist Hinako Omori, explores what they know best: anxieties and emotional holds, and how they never disappear.",
            img: "https://festival-avignon.com/storage/image/70/229870_62e14f6d814e6.jpeg",
            date: "11/06/2023",
            time: "20:30",
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
            img: "https://cdn.pixabay.com/photo/2016/02/24/08/31/girl-1219339_1280.jpg",
            date_of_birth: "27/06/96",
            description: "academy awards",
            
        },
        {
            name: "Maria3",
            img: "https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887__480.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria4",
            img: "https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516__480.jpg",
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
            img: "https://cdn.pixabay.com/photo/2016/12/29/15/24/juggler-1938714__480.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },
        {
            name: "Maria7",
            img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112__480.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },

        {
            name: "Maria8",
            img: "https://cdn.pixabay.com/photo/2020/06/29/10/08/ballet-5352231__480.jpg",
            date_of_birth: "27/06/96",
            description: "academy awards",
            
        },
        {
            name: "Maria9",
            img: "https://cdn.pixabay.com/photo/2020/06/21/15/24/mim-5325414__480.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria10",
            img: "https://cdn.pixabay.com/photo/2015/09/17/14/24/woman-944261__480.jpg",
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
            img: "https://cdn.pixabay.com/photo/2016/11/19/21/05/bass-guitar-1841186__480.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
            
        },

        {
            name: "Maria14",
            img: "https://cdn.pixabay.com/photo/2013/09/11/09/44/dancer-181208__480.jpg",
            date_of_birth: "27/06/96",
            description: "active since 1965",
            
        },
        {
            name: "Maria15",
            img: "https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113__480.jpg",
            date_of_birth: "27/06/96",
            description: "she is amazing",
        },
        {
            name: "Maria16",
            img: "https://cdn.pixabay.com/photo/2017/03/21/19/10/musician-2163011__480.jpg",
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