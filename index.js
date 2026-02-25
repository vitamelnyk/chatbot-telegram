import TelegramBot from "node-telegram-bot-api";
import { botMessages } from "./data.js";

const token = '8683239261:AAGkm8sY8S7Fw48chl2EIAdDoYyr_5zaqmY';

const bot = new TelegramBot(token, { polling: true });
const userCategory = {};
const botOther = {};

const start = () => {

    bot.setMyCommands([
        { command: '/start', description: 'Початкове привітаня' },
        { command: '/info', description: 'Отримати інформацію користувача' }
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage(chatId, `Привіт ${msg.from.first_name}!\nОберіть категорію запитання:`, {
                reply_markup: {
                    keyboard: [
                        ['🟦 Python', '🟨 JavaScript', '🌐 API'],
                        ['🐙 Git', '🐧 Linux', '🛑 Помилки']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            });
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, `Розробник "DevHelperBot" Віктор`)
        }

        if (text === '🛑 Помилки') {
            userCategory[chatId] = 'помилки';
            botOther[chatId] = botMessages.errors;
            return bot.sendMessage(chatId, 'Оберіть помилку, яка вас цікавить ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['✍️ SyntaxError', '🧩 TypeError'],
                        ['🔍 NameError', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '🟨 JavaScript') {
            userCategory[chatId] = 'javascript';
            botOther[chatId] = botMessages.javaScript;
            return bot.sendMessage(chatId, 'Оберіть один із варіантів нижче ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['🧩 Функція', '🔀 Розгалуження'],
                        ['🔁 Цикли', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '🐙 Git') {
            userCategory[chatId] = 'git';
            botOther[chatId] = botMessages.gitMain;
            return bot.sendMessage(chatId, 'Оберіть один із варіантів нижче ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['📂 git init', '📥 git clone'],
                        ['📤 git push', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '🐧 Linux') {
            userCategory[chatId] = 'linux';
            botOther[chatId] = botMessages.linuxMain;
            return bot.sendMessage(chatId, 'Оберіть один із варіантів нижче ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['📂 ls', '📁 cd'],
                        ['📝 cat', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '🟦 Python') {
            userCategory[chatId] = 'python';
            botOther[chatId] = botMessages.python;
            return bot.sendMessage(chatId, 'Оберіть один із варіантів нижче ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['🧩 Функція', '🔀 Розгалуження'],
                        ['🔁 Цикли', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '🌐 API') {
            userCategory[chatId] = 'api';
            botOther[chatId] = botMessages.apiMain;
            return bot.sendMessage(chatId, 'Оберіть один із варіантів нижче ⬇️', {
                reply_markup: {
                    keyboard: [
                        ['🔗 Що таке API', '⚡ REST API'],
                        ['📝 HTTP методи', '🧰 Інше'],
                        ['🔙 Назад']
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: false
                }
            })
        }

        if (text === '✍️ SyntaxError') {
            return bot.sendMessage(chatId, botMessages.errors.syntaxError)
        }

        if (text === '🧩 TypeError') {
            return bot.sendMessage(chatId, botMessages.errors.typeError)
        }

        if (text === '🔍 NameError') {
            return bot.sendMessage(chatId, botMessages.errors.nameError)
        }

        if (text === '🧩 Функція') {
            return bot.sendMessage(chatId, botMessages.javaScript.funcJs)
        }

        if (text === '🔀 Розгалуження') {
            return bot.sendMessage(chatId, botMessages.javaScript.branchingJs)
        }

        if (text === '🔁 Цикли') {
            return bot.sendMessage(chatId, botMessages.javaScript.loopJs)
        }

        if (text === '🧰 Інше') {
            if (userCategory[chatId] === 'помилки') {
                return bot.sendMessage(chatId, botMessages.errors.other, {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: 'JavaScript', url: botMessages.errors.linkJs },
                                { text: 'Python', url: botMessages.errors.linkPy }
                            ]
                        ]
                    }
                })
            } else {
                return bot.sendMessage(chatId, botOther[chatId].other, {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: 'Перейти до документації', url: botOther[chatId].link },
                            ]
                        ]
                    }
                })
            }
        }

        if (text === '🔙 Назад') {
            return chatMainMenu(chatId);
        }

        return bot.sendMessage(chatId, 'Будь ласка натисніть одну з кнопок меню:')
    })
}

const chatMainMenu = (chatId) => {
    bot.sendMessage(chatId, 'Оберіть категорію запитання:', {
        reply_markup: {
            keyboard: [
                ['🟦 Python', '🟨 JavaScript', '🌐 API'],
                ['🐙 Git', '🐧 Linux', '🛑 Помилки']
            ],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    })
}

start();