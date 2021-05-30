/* ЗАДАЧА - 1
 * Написать функцию, которая не принимает аргументов и спрашивает пользователя что он есть на завтрак
 * Считается что пользователь может ввести только одно блюдо за один раз
 * По этому нужно продолжать спрашивать ДО ТЕХ ПОР ПОКА ответом от пользователя не прийдет пустой ввод.
 * КАЖДОЕ БЛЮДО, которое введет пользователь нужно помещать в массив fantasticBreakfast, который
 * и будет возвращаемым значением функции.
 * */
/* ЗАДАЧА - 2
 * Написать функцию, которая будет принимать аргументом массив, в котором каждый елемент - название блюда которое пользователь ест на завтрак.
 * Нужно поочередно вывести в консоль каждое блюдо из этого массива. При этом удаляя данное блюдо из массива.
 * Таким образом после того как все блюда окажутся в консоли - массив должен остаться пустым
 * Возвращаемое значение - отсутствует
 * Сделать это при помощи классического цикла for И попробовать использовать for of
 * */
/* ЗАДАЧА - 3
 * Написать функцию, которая принимает в качестве аргумента массив
 * Возвращаемое значение - новый, другой массив со всеми елементами того, который был передан агрументом
 * Сделать это при помощи: обычного циклка for, при помощи метода массива map(), при помощи оператора spread.
 */
/* ЗАДАЧА - 4
 * Написать функцию getItemList(), которая будет получать от пользователя строку с перечисленными через запятую названиями товаров
 * (они могут повторяться). После этого нужно преобразовать строку в МАССИВ С УНИКАЛЬНЫМИ ЗНАЧЕНИЯМИ
 */
//
/* ЗАДАЧА - 5
 * есть некий "склад", он же исходный массив, внутри которого лежат названия товаров.
 * Пользователь желает вместо определенного товара(!одного!) вставить один или несколько новых.
 *
 * НУЖНО написать функцию replaceItems(insteadOf, insertValue):
 * где insteadOf хранит строчное значение названия товара ВМЕСТО какого именно товара он будет вставлять новые.
 * ОБЯЗАТЕЛЬНО ПРОВЕРИТЬ ЕСТЬ ЛИ ТАКОЙ ТОВАР НА СКЛАДЕ, если товара нет - спросить у пользователя корректные данные.
 * insertValue - список елементов которые нужно вставить - один или несколько
 *
 * ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ - отсутствует
 * В исходном массиве(складе) ЗАМЕНИТЬ указанный товар, НА insertValue так, чтобы длинна исходного массива изменилась, т.е. каждый введенный пользователем товар добавляется отдельным товаром в уже существующий склад.
 */