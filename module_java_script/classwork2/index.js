/* ЗАДАНИЕ - 1
 * Пользователь вводит в модальное окно любое число. Нужно вывести на экран "Четное" или "Не четное" в зависимости от того четное число или нет.
 */
// const num = prompt("введи число");
// if (num % 2 === 0) {
//     console.log("делиться");
// }
// else {
//     console.log("не делиться");
// }
/* ЗАДАНИЕ - 2
 * Спросить пользователя на каком языке он хочет увидеть список дней недели. Пользователь может ввести  - ru, en, ukr
 * Вывести на экран список дней недели на выбранном языке.
 * */
// let dayRu = "понедельник";
// let dayEng = "monday";
// let dayUkr = "понедiлок";
// const langue = prompt('на каком языки вы хотите видеть текст?');
// if (langue === "ru"){
//     alert("Ru")
// } else if (langue === "en"){
//     alert('english')
// } 

/* ЗАДАНИЕ - 3
* Пользователь вводит 3 числа. Нужно вывести на экран собщение с максимальным числом из введенных
 * */
// const num1 = prompt('введите число 1');
// const num2 = prompt('введите число 2');
// const num3 = prompt('введите число 3');
// if (num1 > num2) {
//    if (num1 > num3) {
//        alert(num1)
//    } else {
//        alert(num3)
//    }
// } else if (num3 > num2) {
//     alert(num3)
// }else {
//     alert(num2)
// }
/* ЗАДАНИЕ - 4
 * Имитируем список персонала, где у каждого человека есть своя роль. Пользователь вводит имя, после чего нужно вывести сообщение с ролью пользователя.
 * Список следующий:
 * Boss - главный Boss
 * Boss Juniior - правая рука Boss'a
 * Gogol Mogol - далает Гоголь-Моголь всем сотрудникам
 * John - уборщик
 * */
// const name = prompt('введите свое имя')
// if (name === 'Директор') {
//     alert("главный босс")
// } else if (name === "Секретарь") {
//     alert("вы секретарь")
// }
/* ЗАДАНИЕ - 5
 * Напишите программу кофейная машина.
 * Программа принимает монеты и готовит напиток (Кофе 25грн, капучино 50грн, чай 10грн).
 * Т.е. пользователь вводит в модальное окно сумму денег и название напитка.
 * В зависимости от того какое название было введено - нужно вычислить сдачу и вывести сообщение: "Ваш напиток *НАЗВАНИЕ НАПИТКА* и сдача *СУММА СДАЧИ*"
 * В случае если пользователь ввел сумму без сдачи - выводить сообщение: "Ваш напиток *НАЗВАНИЕ НАПИТКА*. Спасибо за точную сумму!))"
 * */
const drinkName = prompt('Какой напиток хотите? Кофе - 25грн, Капучино - 50грн, Чай - 10грн');
const money = prompt('Сколько денег дашь?');

if (drinkName === 'Кофе') {
	
	const additive = confirm("дабавок? Это стоит 5 грн");
	if (additive === true){
		const changeAdditive = prompt('на выбор: Соус, Джем, Сливки');
		const moneyForAdditive = `${money - 25}`;
		if (changeAdditive === "Соус") {
			if(moneyForAdditive >= 5){
				alert(`Ваш соус, ваша сдача всего-${money - 30}`);
			}
			else{
				alert("Не хвататет денег, ничего ты не получишь")
			}
		}
		if (changeAdditive === "Джем") {
			if(moneyForAdditive >= 5){
					alert(`Ваш Джем, ваша сдача всего-${money - 30}`);
			}
			else{
				alert("Не хватает денег, ничего ты не получишь")
			}
			}
			if (changeAdditive === "Сливки") {
				if(moneyForAdditive >= 5){
					alert(`Ваши сливки, ваша сдача всего-${money - 30}`);
				}
				else{
					alert("Не хватает денег, ничего ты не получишь")
				}
		}
		}
	else if(additive === false) {
		if (money > 25) {
			alert(`Ваш напиток ${drinkName}, ваша сдача - ${money - 25}`);
		}
		else if (money === 25) {
			alert(`Ваш напиток ${drinkName}`);
		} 
		else {
			alert(`Не хватает денег, ничего ты не получишь`);
		}
	}
}
	
	

	if (drinkName === 'Капучино') { 
	const additive = confirm("дабавок? Это стоит 5 грн");
	if (additive === true) {
		const changeAdditive = prompt('на выбор: Соус, Джем, Сливки');
		const moneyForAdditive = `${money - 50}`;
		if (changeAdditive === "Соус") {
			if(moneyForAdditive >= 5){
				alert(`Ваш соус, ваша сдача всего-${money - 55}`);
			}
			else{
				alert("Не хватает денег, ничего ты не получишь")
			}
		}
		if (changeAdditive === "Джем") {
			if(moneyForAdditive >= 5){
				alert(`Ваш Джем, ваша сдача всего-${money - 55}`);
			}
			else{
				alert("Не хвататет денег, ничего ты не получишь")
			}
		}
		if (changeAdditive === "Сливки") {
			if(moneyForAdditive >= 5){
				alert(`Ваши сливки, ваша сдача всего-${money - 55}`);
			}
			else{
				alert("Не хватает денег, ничего ты не получишь")
			}
	}
}	
else if(additive === false) {
	if (money > 25) {
		alert(`Ваш напиток ${drinkName}, ваша сдача - ${money - 25}`);
	}
	 else if (money === 25) {
		alert(`Ваш напиток ${drinkName}`);
	} 
	else {
		alert(`Не хватает денег, ничего ты не получишь`);
}
}
}



	if (drinkName === 'Чай') {
	if (money > 10) {
		alert(`Ваш напиток ${drinkName}, ваша сдача - ${money - 10}`);
	} else if (money === 10) {
		alert(`Ваш напиток ${drinkName}`);
	} else {
		alert(`Не хватает денег, ничего ты не получишь`);
    }
	}
