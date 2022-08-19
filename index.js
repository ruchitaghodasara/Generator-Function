// function* number() {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//     yield i;
//   }
// }
// const y = number();
// number().next();
// number().next();
// number().next();

// const add = (x) => (y) => (z) => {
//   console.log(x, y, z);
//   return x + y + z;
// };

// add(7)(8)(9);

// var a = 2;

// switch (true) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("let's see what happens");
//     break;
//   case 4:
//     console.log('What just happened?');
//     break;
//   default:
//     console.log('Programming is my first love!');
// }

// var a = 10;
// var b = 10;
// var c = {
//   a: -10,
//   b: -10,
// };
// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add());
// console.log(c.add());

// var foo = 'foo';

// (function (innerFoo) {
//   console.log(innerFoo);
// })(foo);

// (function () {
//   var foo = 'bar';
//   console.log(foo);
// })();

// let f1 = function () {
//   console.log(this.foo);
// };
// f1();
// f1.bind(this);
// f1();

// let f2 = () => {
//   console.log(this.foo);
// };
// f2();
// f2.apply(this);

// var fn = {};
// function valueAccessor(value) {
//   var accessor = function (newValue) {
//     if (arguments.length === 0) {
//       return value;
//     }
//     value = newValue;
//   };
//   accessor.__proto__ = fn;
//   return accessor;
// }
// var a = valueAccessor(5);
// fn.incrementValue = function () {
//   this(this() + 1);
// };
// a.incrementValue();
// console.log(a());

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

//  function foo() {
//  var f = (i) => arguments[0] + i;
//  return f(2);
//  }

//  function boo() {
//  var f = function(i) {
//  arguments[0] + i;
//  }
//  return f(2);
//  }

//  console.log(foo(10));
//  console.log(boo(10));
// const functionRadar = function () {
//   console.log(arguments.callee.name);
//   console.log(arguments.callee.caller.name);
//   console.log('This is a JavaScript Program!');
// };

// void (function main() {
//   functionRadar();
// })();
const a = [0];
console.log(a.length);
a[3] = 3;
console.log(a.length);
for (let item of a) {
  console.log(item);
}
a.map((item) => {
  console.log(item);
});
a.forEach((item) => {
  console.log(item);
});
console.log(Object.keys(a));
delete a[3];
console.log(a.length);
a.length = 1;
console.log(a[0], a[1], a[2]);
