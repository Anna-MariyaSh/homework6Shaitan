//Task 1//
let f1 = Boolean(Number("10")) + 1; //2, nomber
let f2 = "sub" + Number(false); //sub0, string
let f4 = 16 * "91"; //1456, nomber
let f5 = true - 70; //-69, nomber
let f6 = Number(1 + String(1)) + 1; //12, nomber

console.log(f6);

//Task2//
const hours = +prompt("Укажите количество часов");
let seconds = hours * 60 * 60;
alert(seconds);

//Task3//
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
++num;
--num;
alert(num);
