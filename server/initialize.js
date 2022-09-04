
export default async (models) => {
    /* 10 */
    const eventList = [
        { // Music Barbara Carlotti, Prieur de la Marne
            name: "Beat Generation",
            description: "Open the doors of perception. Singer Barbara Carlotti lends her voice to the Beat Generation, with help from 'sound assembler' Prieur de la Marne, for a journey to the edge of trance. Singer Barbara Carlotti and “sound assembler” Prieur de la Marne celebrate the Beat Generation, the American movement which, during the postwar period and until the 1960s, played a decisive role in art history.",
            img: "https://festival-avignon.com/storage/image/69/89369_60fd440084f35.jpeg",
            date: "05/06/2023",
            time: "14:00",
            details: "blah ",
        },
        { // Theater Yngvild Aspeli
            name: "Moby Dick",
            description: "The legend of writer Herman Melville is brought to life in this theatrical rendition of Moby Dick. Screenplay writer and director Yngvild Aspeli [CHECK THIS NAME] creatively uses the stage to take the audience through an emotional and symbolic journey through the ocean to pursue a giant whale.",
            img: "https://festival-avignon.com/storage/image/58/56558_602e6fab5585c.jpeg",
            date: "05/06/2023",
            time: "18:15",
            details: "blah ",
        },
        { // Dance: Jan Marten, Polish harpsichordist Goska Isphording
            name: "Futur Proche",
            description: "What if the discovery of an instrument could change the world of a choreographer? With FUTUR PROCHE, Belgian choreographer Jan Martens operates a shift in his rhythmic dance, accompanied by a contemporary harpsichord. With fifteen dancers from the Opera Ballet Vlaanderen, two children, and Polish harpsichordist Goska Isphording, he invites us to a moving exploration of whether we can change society, bodies, or ways of thinking, in a time of climate crises and pandemics. Through aesthetically varied works, the choreographer plays with the codes of his virtuoso performers by making them experience a true “presence” on stage.",
            img: "https://festival-avignon.com/storage/image/5/225405_62d6c2daddd4e.jpeg",
            date: "07/06/2023",
            time: "17:30",
            details: "blah ",
        },
        { // Dance: artist 1: Dada Masilo
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
        { // Music: Mahmoud Darwish
            name: "And Land, Like Language, is Inherited",
            description: "A passionate jazz oratorio inspired by the odyssey of the great Palestinian poet Mahmoud Darwish, this show about the pain of exile couldnt be more relevant",
            img: "https://festival-avignon.com/storage/image/68/223068_62d13b3c47ca1.jpeg",
            date: "09/06/2023",
            time: "15:00",
            details: "blah ",
        },
        { // Music: Beninese Angélique Kidjo
            name: "Miss Knife and Her Sisters",
            description: "On the last day of the Festival, Miss Knife invites to her cabaret her sisters who embody hope and courage through art: Ukrainian Dakh Daughters and Beninese Angélique Kidjo, accompanied by the Orchestre national Avignon-Provence. From show to show, from opera to operetta, from cabaret to concert, songs are much more than a minor art, they have a depth that can touch all of us, theyre the expression of our humanity.",
            img: "https://festival-avignon.com/storage/image/63/229863_62e14ae75069f.jpeg",
            date: "10/06/2023",
            time: "13:15",
            details: "blah ",
        },
        { // Theater: Christophe Rauck director
            name: "Richard II",
            description: "By banishing Henry Bolingbroke, Richard II puts his own reign and kingdom in jeopardy. A masterpiece that would be followed by many others. Richard II is a tragedy of the word and of the exercise of power which, to the sound and fury of other plays, prefers the alliance of prediction and suspense. Haunted by Shakespeare’s great epics, Christophe Rauck directs this masterpiece heralding all the others. An impressive gallery of characters, a constellation surrounding a soon-to-fall king, all hiding a more central axis: the people.",
            img: "https://festival-avignon.com/storage/image/12/226012_62d84659a4e5a.jpeg",
            date: "10/06/2023",
            time: "16:30",
            details: "blah 8",
        },
        { // Dance; artists: Maud Le Pladec, Adeline Kerry Cruz
            name: "Silent Legacy",
            description: "Maud Le Pladec explores how dance is handed down with Adeline Kerry Cruz, an 8-year-old krumper, and Audrey Merilus, contemporary dancer. A true poetic manifesto. What legacies do they carry within themselves, and how can one invent one’s own dance? Far from being a neutral arbiter, Maud Le Pladec invites us to a vision of dance as sensory expression, when the meeting of cultures and know-hows shows the exploding vitality of teachings and legacies.",
            img: "https://www.ccn-orleans.com/content/1-centre-choregraphique-national-dorleans/1-maud-le-pladec/1-silent-legacy/sl_14857-alexandre-haefeli.png",
            date: "11/06/2023",
            time: "17:15",
            details: "blah ",
        },
        { // Music: Kae Tempest singer
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
        { //event 1
            name: "Barbara Carlotti",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRtrS9xynjjk%2Fmaxresdefault.jpg&f=1&nofb=1",
            date_of_birth: "02/07/1974",
            description: "Barbara Carlotti grew up in Clamart, one of the suburbs of Paris. From a young age, both of her parents has a say in her artistic exposure, her father introducing Barbara to Coriscan music and her mother introdocuing her to the classical piano. Barbara has training in opera singing but was naturally drawn to jazz and folk rock. Barbara has a long line of songwriting experience, including writing for a short film by Emmanuel Bourdieu; albums for Bertrand Belin, Philippe Katerine, and Khaled Mouzanar; and TV soundtracks for Le Cabaret insolite and Laboratoire Bevilacqua.  ",
            
        },

        { // event 1
            name: "Yngvild Aspeli",
            img: "https://frenchculture.org/sites/default/files/styles/max/public/plexus_polaire_yngvild.jpg?itok=zMtIY2Wg",
            date_of_birth: "27/06/1983",
            description: "Artistic director of Plexus Polaire, Yngvild Aspeli, develops a visual world that brings our most buried feelings to life. The use of life-sized puppets is at the center of her work, but the actor’s performance, the presence of the music and the use of light and video are all equal elements in communicating the story. Director, actress, puppeteer and puppet-maker, Yngvild Aspeli studied at Ecole Jacques Lecoq in Paris (2003-2005) and at ESNAM (Ecole Nationale Supérieure des Arts de la Marionnette) in Charleville-Mézières (2005-2008). Within her French-Norwegian company Plexus Polaire, she has directed show such as: Signals (2011), Opera Opaque (2013), Ashes (2014), Chambre noire (2017), and Dracula (2022). ",
            
        },
        { // event 2
            name: "Goska Isphording",
            img: "https://www.conservatoriumvanamsterdam.nl/fileadmin/_processed_/e/b/csm_goskaisphording-fotoChajaHertog_c820b10d1e.jpg",
            date_of_birth: "05/11/1973",
            description: "Harpsichordist Goska Isphording specializes in contemporary music on historical instruments. She is not only active as a soloist and chamber musician, but also presents the contemporary harpsichord to audiences and composers around the world through close collaborations, lectures and masterclasses. Goska's solo appearances include Gaudeamus Music Week or November Music, and more recently Warsaw Autumn Festival, Gaida Festival, ISCM World Music Days and Huddersfield Contemporary Music Festival. Pan-European appearances have brought Goska to the attention of a variety of composers, and her inimitable approach to the harpsichord has earned numerous dedications and commissions. Goska has premiered over a hundred solo and chamber music compositions and is an addressee of harpsichord concerti by Hanna Kulenty, Roderik de Man or Andrzej Kwiecinski. A passion for the careful interplay of apparently disparate forms has led Goska to co-found The Roentgen Connection. She is also a member of The Riot Ensemble in London and has collaborated with ensembles like Asko|Schönberg, Insomnio Ensemble, Musikfabrik or Sinfonia Varsovia.",
            
        },

        {// event 2
            name: "Dada Masilo",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/05/InfectingTheCity2012_Death%26Maidens_DadaMasilo_SydelleWillowSmith_20120306_%2845%29.jpg",
            date_of_birth: "13/04/1986",
            description: "Dada Masilo is a South African dancer and choreographer, known for her unique and innovative interpretations of classical ballets.[3] Trained in classical ballet and contemporary dance, Masilo fuses these techniques with African dance steps to create her high-speed style.[3] She was born and raised in the Johannesburg township of Soweto. Although she is interested more in the personal challenge of choreography than political statements, her pieces often address taboos such as homosexuality and race relations. Masilo studied at Braamfontein's National School for the Arts, 2002.[2] Dada Masilo caught the eyes of Suzette Le Sueur, back then the Director of Dance factory school, and invited her to train professionally. Since then, Sueur became Masilo's mentor.Today, Masilo's most notable works include Swan Lake, Romeo and Juliet, Carmen, Death and the Maiden, and Giselle.",
            
        },
        {
            name: "Mahmoud Darwish",
            img: "https://www.thefamouspeople.com/profiles/images/mahmoud-darwish-4.png",
            date_of_birth: "22/02/1972",
            description: "Mahmoud Darwish is a Palestinian poet and author who was regarded as the Palestinian national poet. He won numerous awards for his works. Darwish used Palestine as a metaphor for the loss of Eden, birth and resurrection, and the anguish of dispossession and exile. He has been described as incarnating and reflecting 'the tradition of the political poet in Islam, the man of action whose action is poetry'. He also served as an editor for several literary magazines in Palestine. Darwish performs his works by captivating his audience with a dance between poetry and music. Darwish uses his performances to bring his prose to life. With the addition of musical backdrops such as Dawish's own voice or instrumental solos, Dawish is able to add another dimension, another artistic layer, to his work.",
            
        },
        {
            name: "Angélique Kidjo",
            img: "https://cdn.cnn.com/cnnnext/dam/assets/151211120034-angelique-kidjo-black-dress-super-tease.jpg",
            date_of_birth: "14/07/1960",
            description: "Angélique Kidjo, is a five-time Grammy Award winning Beninese singer-songwriter, actress, and activist who is noted for her diverse musical influences and creative music videos. Kidjo was born into a family of performing artists. Her father was a musician, and her mother worked as a choreographer and theatre director. In 2007, Time magazine called her 'Africa's premier diva.' She performed at the Tokyo 2020 Olympic Games Opening Ceremony on July 23, 2021. On September 15, 2021, Time included her in their list of the 100 most influential people in the world. Her musical influences include the Afropop, Caribbean zouk, Congolese rumba, jazz, gospel, and Latin styles; as well as her childhood idols Bella Bellow, James Brown, Nina Simone, Aretha Franklin, Celia Cruz, Jimi Hendrix, Miriam Makeba and Carlos Santana. She has recorded George Gershwin's 'Summertime', Ravel's Boléro, Jimi Hendrix's 'Voodoo Child' and the Rolling Stones' 'Gimme Shelter', and has collaborated with Dave Matthews and the Dave Matthews Band, Kelly Price, Alicia Keys, Branford Marsalis, Ziggy Marley, Philip Glass, Peter Gabriel, Bono, Yo-Yo Ma, Carlos Santana, John Legend, Herbie Hancock, Josh Groban, Dr John, the Kronos Quartet, Yemi Alade, Cassandra Wilson, Burna Boy, Sting, Mr Eazi and Indonesia's pop star Anggun. Kidjo's hit songs include 'Agolo', 'We We', 'Adouma', 'Wombo Lombo', 'Afirika', 'Batonga', and her version of 'Malaika'. Her album Logozo is ranked number 37 in the Greatest Dance Albums of All Time list compiled by Vice magazine's Thump website. Kidjo is fluent in five languages: Fon, French, Yorùbá, Gen (Mina), and English. She sings in all of them, and she also has her own personal language, which includes words that serve as song titles such as 'Batonga'. 'Malaika' is a song sung in the Swahili language. Kidjo often uses Benin's traditional Zilin vocal technique and vocalese.",
            
        },
        {
            name: "Christophe Rauc",
            img: "https://festival-avignon.com/storage/artist/2//4602_portraitchristopherauck__c__simongosselin7.jpg",
            date_of_birth: "27/06/96",
            description: "Christophe Rauck — who came to the Festival d’Avignon in 2018 with the students of the École du Nord for Jean-Luc Lagarce’s A Far Country — has been director of the Théâtre du Peuple in Bussang, the TGP-CDN in Saint-Denis, and the Théâtre du Nord in Lille-Tourcoing. He was named director of the Théâtre Nanterre-Amandiers in 2021. After creating a training workshop for young actors and a programme in “alternating seasons” with four directors starting in 2024, he has focused his tenure as director on collective emulation and on support for young creations. Since his time at the Théâtre du Soleil, he has never stopped learning from the classics, but also from contemporary texts such as Martin Crimp’s, Rémi De Vos’s, or Sara Stridsberg’s. Whether from now or from yesterday, 'theatre is always the present. Texts move us because they ask questions about the complexity of the world.'",
            
        },

        {
            name: "Maud Le Pladec",
            img: "https://www.ccn-orleans.com/content/1-centre-choregraphique-national-dorleans/1-maud-le-pladec/martin-argyroglo-624x414.jpg",
            date_of_birth: "19/05/1982",
            description: "After having completed the Ex.e.r.ce training at CCN Montpellier, Maud Le Pladec has performed for several choreographers such as Georges Appaix, Emmanuelle Vo-Dinh, Loïc Touzé, Mathilde Monnier, Herman Diephuis, Mette Ingvartsen and Boris Charmatz. In 2010, she created her first piece Professor, choreographic piece for three performers on the music of Fausto Romitelli. In 2013, Maud Le Pladec was recipient of the Hors les Murs program at the Institut français and conducted a research in New York on the current of post-minimalist American music. From this research came the creation of Democracy, a piece for five dancers and four drums (Ensemble TaCtuS) and Concrete (2015), a major project conceived for five dancers and nine musicians from Ensemble Ictus. Her works have been awarded with several prizes and distinctions: prize of the choreographic revelation of the Syndicate of the French critic in 2009, prize Garden of Europe in 2010, Knight of the Order of Arts and Letters in 2015. In 2016, she worked at the Opéra National de Paris on Eliogabalo (Francesco Cavalli) with director Thomas Jolly and under the musical direction of Leonardo Garcia Alarcon. Since January 2017, she succeeded Josef Nadj and directs the Centre chorégraphique national d’Orleans. She created Moto-Cross (The Subsistances / Biennale Val de Marne), Je n’ai jamais eu envie de disparaître with the author Pierre Ducrozet as part of Concordan(s)e and Borderline in collaboration with the director Guy Cassiers. In 2018, she created her last piece Twenty-Seven Perspectives, performance for 10 dancers built around Schubert’s Unfinished Symphony",
            
        },
        {
            name: "Adeline Kerry Cru",
            img: "https://festival-avignon.com/storage/image/22/226922_62da750b81853.jpeg",
            date_of_birth: "27/06/96",
            description: "Adeline Kerry Cruz. Aged 8, this young Montréalaise first gained attention through hip-hop videos posted by her father, before fully coming into herself through krump. With her mentor Jr Maddripp, she has developed her practice of this street dance through battles and artistic encounters.",
            
        },

        {
            name: "Kae Tempest",
            img: "https://files.list.co.uk/images/2019/05/15/83dd7956f522dda6f97e2e331fea4862e9e3925d-original-LST346886.jpg",
            date_of_birth: "27/06/96",
            description: "Kae Tempest is an English spoken word performer, poet, recording artist, novelist and playwright. At the age of 16, Tempest was accepted into the BRIT School for Performing Arts and Technology in Croydon. In 2013, Tempest released their first poetry book Everything Speaks in its Own Way, a limited edition run on their own imprint, Zingaro. At 26, they launched the theatrical spoken word piece Brand New Ancients at the Battersea Arts Centre (2012), to great critical acclaim, and the following year the piece also won Tempest the Herald Angel and The Ted Hughes Prize. In October 2014, their first poetry collection for Picador, Hold Your Own, was published. The collection was a commercial and critical success and its release coincided with Tempest being named a Next Generation Poet by the Poetry Book Society, a once-a-decade accolade. Tempest's albums Everybody Down and Let Them Eat Chaos have been nominated for the Mercury Music Prize. The latter's accompanying poetry book (also titled Let Them Eat Chaos) was nominated for the Costa Book of the Year in the Poetry Category. Since the release of Everybody Down, Tempest has increased touring as a musician, playing at festivals and headlining shows with their live band which consists of Kwake Bass on drums, Dan Carey on synths and Clare Uchima on keyboards. Tempest was elected a Fellow of the Royal Society of Literature in 2015. In September 2016, it was announced that Tempest would curate the 2017 Brighton Festival. They released the album Let Them Eat Chaos on 7 October 2016. It debuted at no. 28 on the UK Albums Chart. The album was also nominated for the Mercury Prize, this time in 2017. They were nominated for Best British Female Solo Performer at the 2018 Brit Awards. Tempest's song 'People's Faces' was used for the Facebook commercial 'We're Never Lost If We Can Find Each Other', created by the agency Droga5, and released on 9 April 2020.",
            
        },
        {
            name: "Jan Marten",
            img: "https://festival-avignon.com/storage/image/18/1118_60f3e3a62b1c9.jpeg",
            date_of_birth: "27/06/96",
            description: "After training at the Fontys dance academy (Netherlands) and at the Artesis Royal Conservatoire of Antwerp, Jan Martens worked with many choreographers before creating his first shows. He has been invited to the Festival d’Avignon many times, including in 2021 when he presented Any attempt will end in crashed bodies and shattered bones in the courtyard of the Lycée Saint-Joseph with dancers aged 17 to 70. He is one of the four choreographers of the Belgian platform GRIP HOUSE.",
            
        },

        {
            name: "Prieur de la Marne",
            img: "https://www.lelieuunique.com/app/uploads/2019/12/prieurdelamarne-1000x500-c-default.jpg",
            date_of_birth: "27/06/96",
            description: "Prieur de la Marne. If he started his career as a “popular DJ,” his name, taken from the French Revolution, tells a different story. A genius “sound assembler,” Prieur de la Marne has taken part in many scenic and musical projects and performed over silent movies. With his unreserved, unbridled mixes, he has reinvented radio objects, between dance floor and sound documents, including the series “Candidats” on France Culture.",
            
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