let a = 1 ;
a++;    // a = a + 1;
++a;    // a = a + 1;
console.log(a); //3

// a = 1;
//3
console.log(a++); //comsole.log(a)
console.log(++a); // a = a + 1;

a = 1;
a--;
console.log(a);  //0

a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a); 

a = !true;
console.log(a);

a = true && true;
console.log(a);

let f = false && false;
console.log('첫번째 f:',f);
f = false && true;
console.log('두번째 f;',f);
f = true && false;
console.log('세번째 f;',f);

let t = true || false;
t = false || true;
t = true || true;

console.log(8>3 && 5==5);
console.log(4!= 4 ||9 >2);


