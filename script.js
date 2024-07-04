// Arrays in Javascript

var cnames=["Bloomberg","Amazon","Flipkart","Microsoft","Walmart","Uber","Mindtree","Infosys","Cognizant"];
console.log(cnames);

//pop function
cnames.pop(); //will delete the last element from array and gives a new array;
console.log(cnames);

//push function
cnames.push("Swiggy"); //will add new element to the last of an array and gives new array.
console.log(cnames);

//shift 
cnames.shift(); //will remove first element from the array and this is the diff. between shift and pop.
console.log(cnames);//this function will remove Bloomberg company from the array.

//unshift
cnames.unshift("Titan");//will add a new element to the starting of an array.and this is the diff. between unshift and push.We can see in console
console.log(cnames);

//check length of array.
 var len=cnames.length;
 console.log(len);//returns the number of elements of array in the console.

 //indexOf
 var ind=cnames.indexOf("Walmart");
 console.log(ind);//returns the index address of the element present in the array and gives -1 if not present.
 //index of if element not present

 var inc=cnames.indexOf("Capgemini");
 console.log(inc); //will return -1;

 //includes
 var pre=cnames.includes("abc");//will give information about the item or element that whether it is present in the array or not.
 console.log(pre);//if it is not present then it will give false as the result and true if present.
 //true includes
 var pretrue=cnames.includes("Walmart");
 console.log(pretrue);//It will true as output.
 //foreach -gives a new array by performing the provided operstion over every element of the array .
 cnames.forEach((cnames,index)=>{
    console.log(`${index+1}.${cnames}`)
 });
 
 //output will be like
 // 1.Titan
 //2.Amazon
 //3.Flipkart
 //4.Microsoft
 //5.Walmart
 //6.Uber
 //7.Mindtree
 //8.Infosys
 //9.Swiggy
 
 //another example of forEach

 var carr=[3,4,5,6,7,8,9];
 carr.forEach((carr)=>{
    console.log(`${carr*2}`)
 });
 //output will be 
 //6
// 8
// 10
// 12
// 14
// 16
// 18

//another eg of forEach

var marr=[11,12,13,22,33,44,55];
marr.forEach((marr)=>{
    console.log(`${marr+2}`)
});
//output will be 
//13
// 14
// 15
// 24
// 35
// 46
// 57
 
//map function-Creates a new array with the results of calling a provided function on every element.
 var pqr=[22,33,44,55,66,77];
var spr=pqr.map(x=>x*2);
 console.log(spr);
 //output will be
 //(6) [44, 66, 88, 110, 132, 154]

 //another example
 const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 }
  ];
 var std= students.map(studt=>({
    name:studt.name,
    grade:studt.grade*3
 }));
console.log(std);
//output
//* (3) [{…}, {…}, {…}]
0
//: 
//{name: 'Alice', grade: 170}
//1
//: 
//{name: 'Bob', grade: 184}
//2
//: 
//{name: 'Charlie', grade: 156}
//length
//: 
//3
//[[Prototype]]
//: 
//Array(0) /*

//another example of forEach 

var telDirec=[
    
    {pername:'Anil' ,tel:123},
    {pername:'Sunil' , tel:345},
    {pername:'Mohan' ,tel:678},
    {pername:'Sam' , tel:980}
];

var tell= telDirec.map(tel=>({
    pername:tel.pername,
    tel:tel.tel*2
}));
console.log(tell);

// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {pername: 'Anil', tel: 246}
// 1
// : 
// {pername: 'Sunil', tel: 690}
// 2
// : 
// {pername: 'Mohan', tel: 1356}
// 3
// : 
// {pername: 'Sam', tel: 1960}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)

//another eg of forEach

var bio=[
    {fname:'Shree',Age:25},
    {fname:'Ram' ,Age:27},
    {fname:'Nitesh' ,Age:22},
    {fname:'Sunil',Age:23}

];

var pro=bio.map(ppr=>({
    fname:ppr.fname,Age:ppr.Age+9
}));
console.log(pro);
// output
// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {fname: 'Shree', Age: 34}
// 1
// : 
// {fname: 'Ram', Age: 36}
// 2
// : 
// {fname: 'Nitesh', Age: 31}
// 3
// : 
// {fname: 'Sunil', Age: 32}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)

// Another example of forEach

const carDetails=[
    {Model:'Hyundai',Quantity:4},
    {Model:'Tata',Quantity:5},
    {Model:'Mahindra',Quantity:6},
    {Model:'Maruti',Quantity:7}
];

const man=carDetails.map(car=>({
    Model:car.Model,Quantity:car.Quantity+10
}));
console.log(man);
// output
// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {Model: 'Hyundai', Quantity: 14}
// 1
// : 
// {Model: 'Tata', Quantity: 15}
// 2
// : 
// {Model: 'Mahindra', Quantity: 16}
// 3
// : 
// {Model: 'Maruti', Quantity: 17}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)

// filter operation
// It creates a new array with the elements which passes the condition given .
var arr=[22,44,35,46,78,95];

var con=arr.filter(x=>x%2===0);
console.log(con);
// output
// (4) [22, 44, 46, 78]0: 221: 442: 463: 78length: 4[[Prototype]]: Array(0)

// another eg of filter
var arrclr=['Red','Green','Blue','Yellow'];

var clr=arrclr.filter(x=>x==="Red");
console.log(clr);
//output
// ['Red']0: "Red"length: 1[[Prototype]]: Array(0)
//  another example of filter for leap year

var leap=[1998,2000,2004,2008,2014,2018,2017];

var checkleap=leap.filter(x=>(x%4===0 && x%100 !== 0) || (x%400===0))

console.log(checkleap);

// (3) [2000, 2004, 2008]
// 0
// : 
// 2000
// 1
// : 
// 2004
// 2
// : 
// 2008
// length
// : 
// 3

// another filter example eligible to vote

 var voteId=[
    {id:1,Name:'Amit',age:16},
    {id:2,Name:'Anish' ,age:17},
    {id:3,Name:'Shree',age:23},
    {id:4,Name:'Ram',age:25}
 ];

 var elig=voteId.filter(x=>x.age>=18);
 console.log(elig);
//  (2) [{…}, {…}]
// 0
// : 
// {id: 3, Name: 'Shree', age: 23}
// 1
// : 
// {id: 4, Name: 'Ram', age: 25}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
 
// find -returns the first element that satisfies the given condition.It is almost similar as filter.

var even=[33,44,66,88,99];
var feven=even.find(x=>x%2===0);

console.log(feven);
// 44

// another eg of find
var doF3=[1,2,4,6,7,8,9,3,55,77,13,39];
var div =doF3.find(x=>x%3===0);

console.log(div); 
// output
// 6 it will give the first element only which satisfies the condition.

//findIndex-It is same as find but instead of giving elments it gives the index no. 

var grd=[4,5,6,7,44,55,66,77]
var ttr=grd.findIndex(x=>x%4===0);
console.log(ttr);
//output-0

//reduce function -It has two parameters in it -accumulator which stores the current value and current value
//which stores the current value to be evaluated.It gives a single output of the whole array.

var sin=[66,77,88,44,33,55,77,99];
var sum=sin.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);
//output 539

// eg2 of reduce

const fruitQuantities = [
    { fruit: 'apple', quantity: 10 },
    { fruit: 'banana', quantity: 5 },
    { fruit: 'orange', quantity: 8 }
  ];
  
  const fruitInventory = fruitQuantities.reduce((accumulator, item) => {
    accumulator[item.fruit] = item.quantity;
    return accumulator;
  }, {});
  console.log(fruitInventory); 
//   output
// {apple: 10, banana: 5, orange: 8}
// apple
// : 
// 10
// banana
// :     
// 5
// orange
// : 
// 8
//another example
const mensInventory=[
    {Item:'Shirts',quantity:100},
    {Item:'Pants',quantity:150},
    {Item:'Sweater',quantity:180},
    {Item:'Sneakers',quantity:160}
];

const menscount=mensInventory.reduce((accumulator,count)=>{
    accumulator[count.Item]=count.quantity;
    return accumulator;

},{});
console.log(menscount);
// output
// {Shirts: 100, Pants: 150, Sweater: 180, Sneakers: 160}
// Pants
// : 
// 150
// Shirts
// : 
// 100
// Sneakers
// : 
// 160
// Sweater
// : 
// 180
 
// another example
 var petShop=[
    {petNames:'Dog' ,Quant:250},
    {petNames:'Fish' ,Quant:300},
    {petNames:'Cats' , Quant:250},
    {petNames:'Rabbits' , Quant:175}
 ];

 var countPet=petShop.reduce((accumulator,cntPet)=>{
    accumulator[cntPet.petNames]=cntPet.Quant;
    return accumulator;
 },{});
 console.log(countPet);

//  output
// {Dog: 250, Fish: 300, Cats: 250, Rabbits: 175}
// Cats
// : 
// 250
// Dog
// : 
// 250
// Fish
// : 
// 300
// Rabbits
// : 
// 175

//another eg of reduce-it also gives result in form of object and key value pairs if we want to count the no. of 
// items from the inventory.

var elecInvent=[
    {items:'Fans',Quant:300},
    {items:'Bulb',Quant:350},
    {items:'Ac',Quant:450},
    {items:'Wires',Quant:340}

];
 var num=elecInvent.reduce((accumulator,counter)=>{
    accumulator[counter.items]=counter.Quant;
    return accumulator;
 },{});
 console.log(num);

//  output
// {Fans: 300, Bulb: 350, Ac: 450, Wires: 340}
// Ac
// : 
// 450
// Bulb
// : 
// 350
// Fans
// : 
// 300
// Wires
// : 
// 340

// sort operation-basically it arranges the set of elments from ascending to descending.

var arr=[23,45,31,32,12,13,45,55,67,6556,76];
var sorting=arr.sort((a,b)=>a-b);
console.log(sorting);

// output
// (11) [12, 13, 23, 31, 32, 45, 45, 55, 67, 76, 6556]
// 0
// : 
// 12
// 1
// : 
// 13
// 2
// : 
// 23
// 3
// : 
// 31
// 4
// : 
// 32
// 5
// : 
// 45
// 6
// : 
// 45
// 7
// : 
// 55
// 8
// : 
// 67
// 9
// : 
// 76
// 10
// : 
// 6556
// length
// : 
// 11

//reverse operation-It reverses the original set of elements.

var rev=[22,33,44,55,66,77,88];
var cha=rev.reverse();
console.log(cha);
// output
// (7) [88, 77, 66, 55, 44, 33, 22]
// 0
// : 
// 88
// 1
// : 
// 77
// 2
// : 
// 66
// 3
// : 
// 55
// 4
// : 
// 44
// 5
// : 
// 33
// 6
// : 
// 22
// length
// : 
// 7
 

//concat operation
 var arr1=[1,2,3,4,5,6];
 var arrconcat=arr1.concat([7,8,9]);

 console.log(arrconcat);
//  output
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 0
// : 
// 1
// 1
// : 
// 2
// 2
// : 
// 3
// 3
// : 
// 4
// 4
// : 
// 5
// 5
// : 
// 6
// 6
// : 
// 7
// 7
// : 
// 8
// 8
// : 
// 9
// length
// : 
// 9

var arradd=[1,2,3,4,5,6];
var arrcnct=arradd.concat([4,5,6,7,8,9]);
console.log(arrcnct);

// output
// (12) [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]
// 0
// : 
// 1
// 1
// : 
// 2
// 2
// : 
// 3
// 3
// : 
// 4
// 4
// : 
// 5
// 5
// : 
// 6
// 6
// : 
// 4
// 7
// : 
// 5
// 8
// : 
// 6
// 9
// : 
// 7
// 10
// : 
// 8
// 11
// : 
// 9
// length
// : 
// 12

// slice
// it take out the part of an array and give a new array.

var slicearr=[33,44,66,77,12,34,55];
var newarr=slicearr.slice(1,5);
console.log(newarr);

// output -it gives one less element from the given index position.
// (4) [44, 66, 77, 12]
// 0
// : 
// 44
// 1
// : 
// 66
// 2
// : 
// 77
// 3
// : 
// 12
// length
// : 
// 4

// splice -it is a very powerful function in js which can pop certain no. of elements from set of elements
//and could add new elments at that point.It returns the deleted element.

var popnadd=['apple','orange','strawberry','pine','grapes'];
var spliceop=popnadd.splice(1,1,'kiwi');
console.log("Deleted Element:",spliceop);

// output -Deleted Element: ['orange']

//eg2 splice

var dblepop=['apple','orange','strawberry','pine','grapes'];
var splicedble=dblepop.splice(1,2,'Banana','Dragon');
console.log("Deleted Element:",splicedble);
console.log("New Array:",dblepop);

// output 
// Deleted Element: (2) ['orange', 'strawberry']
// script.js:635 New Array: (5) ['apple', 'Banana', 'Dragon', 'pine', 'grapes']

// eg 3 splice

let animals = ['Cat', 'Dog', 'Bird', 'Fish'];
let modifiedAnimals = animals.splice(1, 2, 'Lion', 'Tiger'); 

console.log('Modified Animals:', modifiedAnimals); 
console.log('New Array:', animals);

//output
// Modified Animals: (2) ['Dog', 'Bird']
// script.js:647 New Array: (4) ['Cat', 'Lion', 'Tiger', 'Fish']

//flat operation in js
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattened = nestedArr.flat(2);
console.log(flattened);
// o/p-(6) [1, 2, 3, 4, 5, 6]

// flatMap-First maps each element using a mapping function, then flattens the result into a new array.
 
var arr=[2,33,42,23,23,34];
let flatMapped = arr.flatMap(x => [x, x * 2]);
console.log(flatMapped);
//  o/p-(12) [2, 4, 33, 66, 42, 84, 23, 46, 23, 46, 34, 68]

//other eg flatMap

var aar2=[2,33,[4,45],45,65,[55,77,66],76];
let flat=aar2.flatMap(x=>[x,x*2]);
console.log(flat);

// output-(14) [2, 4, 33, 66, Array(2), NaN, 45, 90, 65, 130, Array(3), NaN, 76, 152

//////Objects

//objects are key value pairs
var personDetails={
    firstName:'Shreeram',
    lastName:'Verma',
    age:17,
    getFullDet:function(){
        return this.firstName+' '+this.lastName;
    }
};
console.log(personDetails.getFullDet());
//output-Shreeram Verma

//objects with nested Objects.

var company={
    cname:"ABC",
    address:{
        street:'xyz',
        lane:'wert',
        state:'UP'
    },
    employees:[
        {firstname:'John',lastName:'Doe'},
        {firstName:'Alice',lastName:'kumar'}
    ]
};
console.log(company.employees[1].lastName);
//output-kumar
console.log(company.cname);
//output-ABC
console.log(company.address.lane);
//wert

//another eg
 var menInventory={
     martname:'traya',
    floors:{
    thing:'Shirts' ,
    size:'m',
    pants:3
    },
    
   types: [
    {item:"Dresses",type:"Night Wear"},
    {item:"Specs",type:"Day Glasses"}
 ]
};

console.log(menInventory.floors.size);//m
console.log(menInventory.types[1].type);//Day Glasses

//another eg using this keyword in objects
let Car={
   carModel:'Suzuki',
   yom:'2013',
   color:'red' ,
   getCarInfo:function(){
    return `${this.carModel} ${this.yom} (${this.color})`;
   }
};
console.log(Car.getCarInfo());
//Suzuki 2013 (red)

//bind
let person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

let anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
};

let getFullNameForJane = person.getFullName.bind(anotherPerson);
console.log(getFullNameForJane());
// Output: Jane Smith

//another eg

function greet(greeting, punctuation) {
    return greeting + ', ' + this.firstName + ' ' + this.lastName + punctuation;
}

let person23 = {
    firstName: 'John',
    lastName: 'Doe'
};

let greetJohn = greet.bind(person23, 'Hello');
console.log(greetJohn('!'));
//// Output: Hello, John Doe!

//another eg of bind

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

let person22 = { name: 'John' };

greet.apply(person22, ['Hello', '!']);
// Output: Hello, John!

// apply
let numbers = [5, 2, 8, 1, 6];

let max = Math.max.apply(null, numbers);
console.log(max); //// Output: 8

// Closure

function outerFunction() {
    let outerVariable = 'I am outer';

    function innerFunction() {
        console.log(outerVariable); 
    }

    return innerFunction;
}

let closure = outerFunction();
closure();
// // Output: I am outer

    
 













