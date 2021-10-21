/* 
|   Java Script Basics
|   (@mansour_tech)
*/

let array = ["HTML","CSS","JS","SASS","PHP","C++"];
console.log(array);

lag[1]= "React";
console.log(lag);
console.log(1+2);
console.log(2-1);
console.log(6/2);
console.log(4%2);
var x=4;
console.log(++x);
console.log(--x);
console.log(x++);111
console.log(typeof x);
let n1 ="1";
let n2 = +1;
let result = n1+n2 ;
console.log(typeof result);
console.log(result);


let year = prompt("Enters");
if (year == 1999) 
{
    alert ("True");
} else
{
    alert ("False");
}
let age =prompt ("enters age")
let resu = age>20 ? "Drive": "Not Drive";
alert(age + resu);
console.log( false ==1);



let day = prompt ("Enters !");
switch (day)
{
    case "0" : 
        console.log("Starday");
        break;
    case "1" :
        console.log("Eb");
        break;
    default :
        console.log("Va");
        break;
}


let e = +prompt ("Enters !");
switch (e)
{
    case 0 : 
        console.log("Starday");
        break;
    case 1 :
        console.log("Eb");
        break;
    default :
        console.log("Va");
        break;
}


let total = 0;
while (total <= 100)
{
    total = prompt(`${total}`)
    console.log(total);
}

let total = 0;
while (total <= 1){
    total++;
    console.log(total);
}

let total = 0;
do { total++;
    console.log(total);
} while (total <= 0)


let total = 0
while(true){
    let vaule = + prompt('Enters');
    if (value == 0) break;
    if(isNaN(vaule))continue;
    // isNaN إذا كان القيمة غير مدخلها رقما اعطي True/
    total+= vaule;
}
alert (`is total : ${total1}`)

for(total = 0 ; true ; total= total + value )
{
    value = + prompt("k")
    if (value == 0) break;
}

const masg = ['Mansour' , 'Mahod' , 'Osamae'];

let index = 0; 

while (index < masg.length)
{
    console.log(index , masg[index]);
    index ++
}


for (let i = 0 ; i < masg.length ; i++)
{
    console.log(i , masg[i]);
}


for (let i = masg.length -1  ; i >=0 ; i--)
{
    console.log(i , masg[i]);
}


let masge = ["mansourt","a","b"]

for(let index in masge) // تظهر العناصر مع اندكس  
    console.log(index , masge[index])

for (let item of masge)  // تظهر العناصر بدون اندكس 
    console.log(item)



function alpineJs(m, a) {
    let d = m - a;
    return console.log(m, a, d);
}

alpineJs(12, 12) 


function sum(m1, n2 = null / 0) {

    return m1 + n2;
}

let result = sum(1, 10);
console.log('result', result) 


//الدوال التساهمية


let sum = (a, b) => a + b;
 console.log(sum(12, 1))

let su1m = (a) => a;
console.log(su1m(1))




const hellow = () => console.log("Hellow Word");
hellow()

const hellow = (name) => 
hellow("Mmansour")



function sum(a, m) {
    console.log(
        arguments
    );
    return a + m;
};

console.log(sum("Ahmed", 12, 's'));


function sum(a, b, c) {
    for (let i of arguments)
    return
}

function sum(a, ...b) {

    let total = first;
    for (let i of b) {
        return b + 1;
    }
};
console.log(
    sum(1, 2, 12))

    function sum(a, ...b) {
        let total = a;
        for (let i of b) {
    
    
            console.log(total + b);
        }
    
    }


    sum(1, 2, 3, 4)
   
    
    let hellow = (name) => { console.log('Hellow ' + name) }
    setTimeout(hellow, 3000, "Ahmed")
    
    
    
    
    let timeId = setTimeout(function tick() {
        console.log("Hellow Word !");
        setTimeout(tick, 1000)
    
    }, 1000);
    
    clearTimeout(timeId)
    
    //   المصفوفات



Add Iteams in the Start Array
va.unshift("Masnour");
Add Iteams in the Middel Array
va.splice(3, 2, "Masnour");
va.splice(index Add in arry, الخانة المراد حذفها, "Masnour");
va.push("Masnour");
va.pop();
va.pop();
console.log(va)

let va = [0.5, 2, -1, 1 / 2];

va.splice(0, 1, "Eduction");
va[va.length] = "ss";

console.log(va);


let a = va.slice(0, 4) //خانة نهائي غير مشمولة
console.log(va.concat([1, 2], [1, 2]));
Search 
console.log(va.includes(2)) //True or false
console.log(va.indexOf(2)) // number index
console.log(va.lastIndexOf(2))
console.log(va.findIndex(item => item < 1))
console.log(va.find(item => item < 1))
console.log(va.filter(item => item < 1))


/*
|   Oejecti
|
|
|
*/

let Gate = {
    AND: "A = 1 & B = 1",
    OR: "A = 0 & B = 1",
    XOR: "A = 1 & B = 0",

    A_Gate: {
        NAND: "Yemen",
        XNOR: "Abyan",
    },
    Gate: function() {
        console.log(0 ^ 1)
    }
};
console.log(Gate)
console.log(Gate.Gate())


function Person(name, age, data) {
    this.name = name;
    this.age = age;
    this.data = data;
    this.hellow = function() {
        console.log("Hellow Word !" + name)
    }
}

let Mansour = [
    new Person("Mansour Ahmed", 12, 12 / 2 / 2010),
    new Person("Ahmed", 12, 12 / 2 / 2010)
];

console.log(Mansour)


y = { y: 10 }
x = y;
y.y = 20

function increase(_number) {
    return m.y++;
}

let m = { y: 1 };
increase(m)


function Person(name, age, data) {
    this.name = name;
    this.age = age;
    this.data = data;
    this.hellow = function() {
        if (largAge())
            console.log("Hellow Word !")
    }
    let largAge = function() {
        return age > 2;
    }
}
const person = new Person("Ben Ahmed", 1, "3/8/2021")
const person = new Person("Ben Ahmed", 1, "3/8/2021")
    // للمرور ع الكائنات
for (let key in person) {
    if (typeof person[key] === "function") continue;
    console.log(key, person[key])
}
const H = Object.keys(person)
console.log(H)

// ناكد من وجود  خاصية في الكائن

if ("name" in person) {
    console.log("Hellow Words", person.name)
}



OOB 

'use strict';
class Person {
    constructor(name) {
        this.name = name;
    }
    static sum(...a) {
        let total = 0;
        for (let num of a) {
            total = total + num;

        }
        return total
    }
    static multplier(...a) {
        let total = 1;
        for (let num of a) {
            total = total * num;

        }
        return console.log(`is the Resultant ${total} : ` + total)
    }
}
class Student extends Person {

    constructor(name, level) {
        super(name);
        this.level = level;

    }
}
const person = new Student("Agmed", 12)
console.log(person)



// التحقق من إلاخطاء

'use strict';

function area(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Prameter is don\'t a number')
    }
    return width * height;
}
try {
    console.log(area(12, 121));
} catch (error) {
    console.log(error);
}

const area = (width, height) => {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Prameter is don\'t a number')
    }
    return width * height;
}
try {
    console.log(area(12, 21));
} catch (error) {
    console.log(error);
} finally {
    console.log('All the code True');
}
//Callback 
const hello = () => console.log('Hellow Word !');
setTimeout(hello, 3000);
