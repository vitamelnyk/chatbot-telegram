export const botMessages = {
    errors: {
        syntaxError: `❌ SyntaxError — помилка синтаксису.\n
            Код записаний неправильно, тому інтерпретатор не може його прочитати.\n
            Перевірте дужки (), {}, [], лапки, двокрапки або крапки з комою,\n
            а також правильність конструкцій if, for, while, function.
        `,
        typeError: `⚠️ TypeError — операція з несумісними типами даних.\n
            Ви намагаєтесь виконати дію над об’єктами неправильного типу (наприклад, додати число і рядок або викликати не-функцію як функцію).
        `,
        nameError: `⚠️ NameError / ReferenceError — змінна або функція не визначена.\n
            Програма не знає такого імені. Перевірте, чи оголошена змінна, чи правильно вона написана та чи доступна в цій області видимості.
        `,
        other: `ℹ️ Якщо ви зіткнулися з іншою помилкою, дивіться повний список типових помилок та розширену інформацію тут:`,
        linkJs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors',
        linkPy: 'https://docs.python.org/3/library/exceptions.html'
    },
    javaScript: {
        funcJs: `🟢 Функція — це блок коду, який виконує певне завдання і може бути викликаний кілька разів.\n
            У JavaScript функції можна оголошувати так: \n\nfunction greet(name) {\n  return 'Привіт' + name + '!';\n}\n\nВиклик: greet('Bob');
        `,
        branchingJs: `🟢 Розгалуження дозволяє виконувати різні дії в залежності від умови.\n
            У JS використовують if / else або switch. \n\nПриклад:\nif (age >= 18) {\n  console.log('Дорослий');\n} else {\n  console.log('Неповнолітній');\n}
        `,
        loopJs: `🟢 Цикли дозволяють повторювати блок коду кілька разів.\n
            У JavaScript є for, while, do...while.\n\nПриклад for:\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}
        `,
        other: `ℹ️ Якщо вас цікавлять інші конструкції та теми JavaScript, дивіться офіційну документацію:`,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
    },
}