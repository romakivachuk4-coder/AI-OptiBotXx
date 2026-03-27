export default async function handler(req, res) {
    // Этот код сработает, когда партнерка пришлет данные
    const { uid, subid1 } = req.query;

    console.log("Получен постбэк:", uid);

    // Здесь можно добавить логику сохранения в базу, если нужно.
    // Пока просто отвечаем партнерке, что всё ок.
    res.status(200).send("OK");
}
