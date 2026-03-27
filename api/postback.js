export default async function handler(req, res) {
    // Получаем все данные, которые мы настроили в Pocket Option
    const { uid, type, amount, subid1 } = req.query;

    // Формируем красивое сообщение для логов Vercel
    if (type === 'reg') {
        console.log(`✅ РЕГИСТРАЦИЯ: Пользователь ID ${uid} (Источник: ${subid1 || 'не указан'})`);
    } else if (type === 'dep') {
        console.log(`💰 ДЕПОЗИТ: Пользователь ID ${uid} внес ${amount}$`);
    } else {
        // На случай, если придет тестовый сигнал или другой тип
        console.log(`ℹ️ СИГНАЛ: UID=${uid}, Тип=${type || 'неизвестно'}`);
    }

    // Ответ партнерке (обязательно 200 OK)
    res.status(200).send("OK");
}
