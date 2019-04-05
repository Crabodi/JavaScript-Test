'use strict';

let money = prompt("Ваш бюджет на месяц?","0"),
    time = prompt("Введите дату в формате YYY-MM-DD","2019-04-05");

let Dannye = {
    Budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : false
}

Dannye.expenses[0]= prompt("Введите обязательную статью расходов в этом месяце?","")+" : ";
let temp=prompt("Во сколько это обойдется?","0");
Dannye.expenses[0]= Dannye.expenses[0]+ temp;
money=money-temp;
Dannye.expenses[1]= prompt("Введите обязательную статью расходов в этом месяце?","")+" : ";
temp=prompt("Во сколько это обойдется?","0");
Dannye.expenses[1]= Dannye.expenses[0]+ temp;
money=money-temp;

alert("Ваш бюджет на 1 день "+money/30);

