import TelegramBot from "node-telegram-bot-api";
import { botMessages } from "./data.js";
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });
const userCategory = {};
const botOther = {};

const start = () => {

    bot.setMyCommands([
        { command: '/info', description: 'Отримати інформацію користувача' }
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage(chatId, `👋 Привіт, ${msg.from.first_name}!\nЯ твій помічник з програмування 🤖💻\nОбери категорію з меню, і я покажу доступні питання 👇`, {
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
            return bot.sendMessage(chatId, `Розробник "DevHelperBot" Віктор Мельник`)
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

        if(text === '🔗 Що таке API') {
            return bot.sendMessage(chatId, botMessages.apiMain.api)
        }

        if(text === '⚡ REST API') {
            return bot.sendMessage(chatId, botMessages.apiMain.rest_api)
        }

        if(text === '📝 HTTP методи') {
            return bot.sendMessage(chatId, botMessages.apiMain.http_method)
        }

        if(text === '📂 ls') {
            return bot.sendMessage(chatId, botMessages.linuxMain.ls_l)
        }

        if(text === '📁 cd') {
            return bot.sendMessage(chatId, botMessages.linuxMain.cd_l)
        }

        if(text === '📝 cat') {
            return bot.sendMessage(chatId, botMessages.linuxMain.cat_l)
        }

        if(text === '📂 git init') {
            return bot.sendMessage(chatId, botMessages.gitMain.init_g)
        }

        if(text === '📥 git clone') {
            return bot.sendMessage(chatId, botMessages.gitMain.clone_g)
        }

        if(text === '📤 git push') {
            return bot.sendMessage(chatId, botMessages.gitMain.push_g)
        }

        if (text === '🧩 Функція') {
            if(userCategory[chatId] != 'python') {
                return bot.sendMessage(chatId, botMessages.javaScript.funcJs)
            } else {
                return bot.sendMessage(chatId, botMessages.python.funcPy)
            }
        }

        if (text === '🔀 Розгалуження') {
            if(userCategory[chatId] != 'python') {
                return bot.sendMessage(chatId, botMessages.javaScript.branchingJs)
            } else {
                return bot.sendMessage(chatId, botMessages.python.branchingPy)
            }
        }

        if (text === '🔁 Цикли') {
            if(userCategory[chatId] != 'python') {
                return bot.sendMessage(chatId, botMessages.javaScript.loopJs)
            } else {
                return bot.sendMessage(chatId, botMessages.python.loopPy)
            }
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

        return bot.sendMessage(chatId, 'Будь ласка натисніть одну з кнопок меню ⬇️')
    })
}

const chatMainMenu = (chatId) => {
    bot.sendMessage(chatId, 'Обери категорію, яка тебе цікавить ⬇️', {
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