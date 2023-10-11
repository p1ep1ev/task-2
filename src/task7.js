//по формуле Герона: S=√p(p−a)(p−b)(p−c) где p=(a+b+c) /2 – полупериметр треугольника.  Для вычисления квадратного корня используйте Math.sqrt()//
const a = 10;
const b = 6;
const c = 8;
const p = (( a + b + c ) / 2);
const geron = Math.sqrt(p * (p - a) * (p - b) * ( p - c ));
console.log(geron);