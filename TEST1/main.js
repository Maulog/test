// alert('Hello World');
// console.log('Hello World')
// console.error('This is a error')
// console.warn('This is a warnning');

// var(全局) let(变量) const(常量 不能重新赋值)
let score=11;
const sco=10;

console.log(score,sco);


//原始数据类型 String Numbers Boolean Null Undefined
const name='John';
const age=30;
const rating=4.5;
const isCool=true;
const x=null;
const y=undefined;
let z;

console.log(typeof y);
console.log('my name is '+name+' and i am '+age);
console.log(`my name is ${name} and i am ${age}`);//Fn+esc=`

let s='Hello';
console.log(s.length,s.toUpperCase(),s.toLowerCase(),s.substring(0,2),s.split(''));

const ss='technology, computers, it, code';
console.log(ss.split(','))

//Array - variables that hold mutiple values
const numbers = new Array(1,2,3,4,5);//结构体的方式
console.log(numbers);

const fruits=['apples',11,true,'bananas','oranges','pears'];
fruits[1]='graspes';
console.log(fruits[1]);
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'))

//object
const person ={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(person.firstName,person.lastName);
console.log(person.address.city)

const{firstName,lastName,address:{city}}=person;
console.log(city);

person.email='asdaf@gmail.com';

//数组中有对象
const todos=[
    {
        id:1,
        text:'Take out trash',
        isComplete:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isComplete:false
    },
    {
        id:3,
        text:'Dentist appt',
        isComplete:true
    }
]
const todoJSON=JSON.stringify(todos);
console.log(todoJSON)

//for
for(let i=0;i<10;i++){
    console.log(i);
}


//while
let i=0;
while(i<10){
    console.log(`number is ${i}`);
    i++;
}


//数组的索引
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

//forEach,map,filter
todos.forEach(function(todo){//构造回调函数
    console.log(todo.isComplete);
});

const todoText=todos.map(function(todo){//map具有返回值，用todoText接住
    return todo.text;
});
console.log(todoText);

const todoCompleted=todos.filter(function(todo){
    return todo.isComplete===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);