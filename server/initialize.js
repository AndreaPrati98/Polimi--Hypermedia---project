
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
    await models.Event.bulkCreate(eventList)
    await models.Artist.bulkCreate(artistList)
    
}