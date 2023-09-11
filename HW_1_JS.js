var item_1=5;
console.log(item_1);
let item_2=3;
console.log(item_2);
let item_3=item_1+item_2;
console.log(item_3);
let item_4= "Yolochka";
console.log(item_4);
console.log(item_3 +item_4);
console.log(item_3*item_4);  // серьезно, текст множим с числом ?
let item_5= item_3;
let item_6=15;
var item_6_type = typeof item_6;
console.log(`item_6 == ${typeof item_6_type}`, `item_6_type == ${typeof item_6_type}`);
let item_7= String(item_6);
let item_7_type= typeof item_7;
console.log("item_7 ==", typeof item_7 , "item_7_type == ", typeof item_7 );
const age_1=10;
const age_2=18;
const age_3=60;
// стандартный вариант:
if (age_1 < age_2){
    console.log("You dont have access cause your age is " + age_1 + " Its less then " + age_2 );
}
else if (age_1 >= age_2 && age_1 < age_3){
    console.log("Welcome !" );
}
else if (age_1 > age_3 ) {
    console.log("Keep calm and look Culture channel" );
}
else (console.log("Technical work") );

//  1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
console.log ("Вывести в консоль результат работы функции с возрастами 17, 18, 61")
const chage= function(age_11){
    if (age_11 < age_2){
       return console.log("You dont have access cause your age is " + age_11 + " Its less then " + age_2);
    }
    else if (age_11 >= age_2 && age_11 < age_3){
        return console.log("Welcome !" );
    }
    else if (age_11 > age_3) {
        return console.log("Keep calm and look Culture channel" );
    }
    else {(console.log("Technical work") );
        }
}
chage(17);
chage(18);
chage(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log ("Сначала проверив тип данных вывести в консоль результат работы функции с возрастами 17, 18, 61")
const chage2= function(age_11){
    if (typeof age_11 == 'number'){
        if (age_11 < age_2){
            return console.log("You dont have access cause your age is " + age_11 + " Its less then " + age_2);
         }
         else if (age_11 >= age_2 && age_11 < age_3){
             return console.log("Welcome !" );
         }
         else if (age_11 > age_3) {
             return console.log("Keep calm and look Culture channel" );
         }
         else (console.log("Technical work") );
    }
    else console.log("Внимание! Введите корректное значение возраста.")
}
chage2(17);
chage2(18);
chage2(61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

console.log ("Проверяем цифры в String.")
const chage3= function(age_11){
            if (+age_11){
            if (age_11 < age_2){
                return console.log("You dont have access cause your age is " + age_11 + " Its less then " + age_2);
            }
            else if (age_11 >= age_2 && age_11 < age_3){
                return console.log("Welcome !" );
            }
            else if (age_11 > age_3) {
                return console.log("Keep calm and look Culture channel" );
            }
            else (console.log("Technical work") );
        }
        else console.log("Внимание! Введите корректное значение возраста.")  
}
chage3('2');
chage3('13');
chage3('13sdvl');

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// Вынесен в отдельные файлы, директория Progect


