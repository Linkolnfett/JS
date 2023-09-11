// 1. Создать переменную “item_1” 
// 2. Присвоить переменной item_1 цифру 5.
var item_1=5;
// 3. Вывести в консоль item_1.
console.log(item_1);
// 4. Создать переменную “item_2”
// 5. Присвоить переменной item_2 цифру 3.
let item_2=3;
// 6. Вывести в консоль item_2.
console.log(item_2);
// 7. Создать переменную “item_3”
// 8. Присвоить переменной item_3 сложение item_1 и item_2.
let item_3=item_1+item_2;
// 9. Вывести в консоль item_3.
console.log(item_3);
// 10. Создать переменную “item_4”
// 11. Присвоить переменной item_4 строку “Yolochka”
let item_4= "Yolochka";
// 12. Вывести в консоль item_4.
console.log(item_4);
// 13. Вывести в консоль сложение item_3 и item_4.
console.log(item_3 +item_4);
// 14. Вывести в консоль умножение item_3 и item_4.
console.log(item_3*item_4); 
// 15. Создать переменную “item_5”
// 16. Присвоить переменной item_5 переменную item_3
let item_5= item_3;
// 17. Создать переменную item_6.
// 18. Создать переменную item_6_type
// 19. Присвоить переменной item_6 значение 15
// 20. Присвоить переменной item_6_type тип переменной item_6
let item_6=15;
var item_6_type = typeof item_6;
// 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log(`item_6 == ${typeof item_6_type}`, `item_6_type == ${typeof item_6_type}`);
// 22. Создать переменную item_7 и в ней преобразовать item_6 в String.
// 23. Создать переменную item_7_type
let item_7= String(item_6);
// 24. Присвоить переменной item_7_type тип переменной item_7
let item_7_type= typeof item_7;
// 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7 ==", typeof item_7 , "item_7_type == ", typeof item_7 );
// 26. Создать переменную “age_1” и присвоить ей значение 10
const age_1=10;
// 27. Создать переменную “age_2” и присвоить ей значение 18
const age_2=18;
// 28. Создать переменную “age_3” и присвоить ей значение 60
const age_3=60;
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
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