function sum(num1, num2, callback) {
    callback(num1 + num2);
}

sum(12, 15, x => alert(`התוצאה היא: ${x}`));
sum(12, 15, alert);
sum(12, 15, console.log);