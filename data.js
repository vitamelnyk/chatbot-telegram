export const botMessages = {
    errors: {
        syntaxError: `❌ SyntaxError — помилка синтаксису.
            \nКод записаний неправильно, тому інтерпретатор не може його прочитати.
            \nПеревірте дужки (), {}, [], лапки, двокрапки або крапки з комою, а також правильність конструкцій if, for, while, function.
        `,
        typeError: `⚠️ TypeError — операція з несумісними типами даних.
            \nВи намагаєтесь виконати дію над об’єктами неправильного типу (наприклад, додати число і рядок або викликати не-функцію як функцію).
        `,
        nameError: `⚠️ NameError / ReferenceError — змінна або функція не визначена.
            \nПрограма не знає такого імені. Перевірте, чи оголошена змінна, чи правильно вона написана та чи доступна в цій області видимості.
        `,
        other: `ℹ️ Якщо ви зіткнулися з іншою помилкою, дивіться повний список типових помилок та розширену інформацію тут:`,
        linkJs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors',
        linkPy: 'https://docs.python.org/3/library/exceptions.html'
    },
    javaScript: {
        funcJs: `🟢 Функція — це блок коду, який виконує певне завдання і може бути викликаний кілька разів.
            \nУ JavaScript функції можна оголошувати так: \n\nfunction greet(name) {\n  return 'Привіт' + name + '!';\n}\n\nВиклик: greet('Bob');
        `,
        branchingJs: `🟢 Розгалуження дозволяє виконувати різні дії в залежності від умови.
            \nУ JS використовують if / else або switch. \n\nПриклад:\nif (age >= 18) {\n  console.log('Дорослий');\n} else {\n  console.log('Неповнолітній');\n}
        `,
        loopJs: `🟢 Цикли дозволяють повторювати блок коду кілька разів.
            \nУ JavaScript є for, while, do...while.\n\nПриклад for:\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}
        `,
        other: `ℹ️ Якщо вас цікавлять інші конструкції та теми JavaScript, дивіться офіційну документацію:`,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
    },
}