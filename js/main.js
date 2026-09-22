/**  
    아래는 자바스크립 변수 선언 및 출력예시
*/

/*
let value = 1;   // let 변수 선언
console.log(value); /* value변수에 선언된 값을
화면에 출력
let value = 2;      //value변수 안에 2값을 대입
console.log(value); //다시 value변수 값을 출력
*/

//상수 선언 예제
const a = 1;
// const a =2;
const PI = 3.14;

//변수 선언(중복된 이름으로도 사용이가능)
var b = 1;
var b = 2;
console.log(b);

let myName = 'heropy';
     email = 'thesecon@gmail.com';
     hello = 'Hello ${myName}?!'; 
let obj1 = {
    myName: "heropy",
    email: 'thesecon@gmail.com',
    hello:'hello ${myname}?!'
};
console.log(obj1);
console.log(typeof(obj1));
console.log(myName);
console.log(email);
console.log(hello);
// viewport(body)로 출력
document.write(myName + '<br>');
document.write(email + '<br>');
document.write(hello + '<br>');

let number = 123;
let opacity = 1.57;
console.log(number);
console.log(opacity);
document.write(number+ '<br>');
document.write(opacity+'<br>');

let checked = true;   //turn -> 1
let isShow = false;     //false->0
console.log(checked);   //turn
console.log(isShow);    //false

//typorf(변수이름) -> 결과값은 데이터타입 출력
console.log(typeof(myName));
console.log(typeof(number));
console.log(typeof(isShow));

let undef;
let obj = {abc:123};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

let user = {
    name:'heropy',
    age:85,
    isValid:true
};
console.log(user.name);
console.log(user.age);
console.log(user.isValid);

let empty = null;
console.log(empty);

let my_Name = 1;