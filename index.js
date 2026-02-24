import TelegramBot from "node-telegram-bot-api";

const token = '8683239261:AAGkm8sY8S7Fw48chl2EIAdDoYyr_5zaqmY';

const bot = new TelegramBot(token, { polling: true });


const start = () => {

    bot.setMyCommands([
        { command: '/start', description: 'Початкове привітаня' },
        { command: '/info', description: 'Отримати інформацію користувача' }
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage(chatId, `Привіт ${msg.from.first_name} ${msg.from.last_name}!\nОберіть категорію запитання:`, {
                reply_markup: {
                    keyboard: [
                        ['Python', 'JavaScript', 'API', 'Помилки'],
                        ['Git', 'Linux', 'Алгоритми', 'Структура даних']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            });
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, `Розробник "DevHelperBot" Віктор`)
        }

        if (text === 'Помилки') {
            return bot.sendMessage(chatId, 'Оберіть помилку, яка вас цікавить:', {
                reply_markup: {
                    keyboard: [
                        ['SyntaxError', 'TypeError'],
                        ['NameError', 'Інше'],
                        ['Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if(text === 'SyntaxError') {
            return bot.sendMessage(chatId, `❌ SyntaxError — помилка синтаксису.\nКод записаний неправильно, тому інтерпретатор не може його прочитати.\nПеревірте дужки (), {}, [], лапки, двокрапки або крапки з комою,\nа також правильність конструкцій if, for, while, function.`)
        }

        if (text === 'Назад') {
            return chatMainMenu(chatId);
        }
        
        return bot.sendMessage(chatId, 'Будь ласка натисніть одну з кнопок меню:')
    })
}

const chatMainMenu = (chatId) => {
    bot.sendMessage(chatId, 'Оберіть категорію запитання:', {
        reply_markup: {
            keyboard: [
                ['Python', 'JavaScript', 'API', 'Помилки'],
                ['Git', 'Linux', 'Алгоритми', 'Структура даних']
            ],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    })
}

start();