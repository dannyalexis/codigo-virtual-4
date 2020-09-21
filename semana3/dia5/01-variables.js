let  monto = +prompt("Ingresar un monto");
let b200 = 0;
let b100 = 0;
let b50 = 0;
let b20 = 0;

b200 = (monto-(monto%200))/200;
monto = monto-(b200*200);

b100 = (monto-(monto%100))/100;
monto = monto-(b100*100);

b50 = (monto-(monto%50))/50;
monto = monto-(b50*50);

b20 = (monto-(monto%20))/20;
monto = monto-(b20*20);



console.log(" ===================================");
console.log("Billetes de 200 : " + b200 + " Billetes");
console.log("Billetes de 100 : " + b100 + " Billetes");
console.log("Billetes de 50 : " + b50 + " Billetes");
console.log("Billetes de 20 : " + b20 + " Billetes");
console.log("Saldo : " + monto);