const chage= function(vch){
    let min = 5;
    let max = 64;
    let x= vch;
    let y= (/(?=.*[0-9])/.test(x));
    let w= (/(?=.*[a-z])/.test(x));
    let z= (/(?=.*[A-Z])/.test(x));
    let yy= (/(?=.*[@])/.test(x));

    console.log(x);
    if (x.length <= 0){
        return alert("Строка не должна быть пустой!");
    }
    else if (x.length < min){
        return alert(x + " Вы ввели слишком мало символов " + x.length + " меньше минимального " + min);
    }
    else if (x.length > max){
        return alert("Слишком много символов! Ограничение равно 64");
    }
    else if (!y) {
        alert(" Должна быть хотя бы одна цифра")
    }
    else if (!w){
        return alert("Строка должна содержать хотя бы одну букву нижнего регистра")
    }
    else if (!z){
        return alert("Строка должна содержать хотя бы одну букву верхнего регистра")
    }
    else if (!yy){
        return alert("Строка должна содержать хотя бы один символ @ ")
    }
    else alert(" Введено корректное значение! Поздравляем.")  
    }

let vch= String(prompt('Введите строку согласно требованиям'));
chage(vch)

