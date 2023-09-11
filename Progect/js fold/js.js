const chage4= function(age_11){
    const age_2=18;
    const age_3=60;


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

let age_11 = Number(prompt('Введите возраст'));
chage4(age_11)


