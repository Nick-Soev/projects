const style = ["Джаз", "Блюз"];
style.push('Рок-н-ролл');
let s = Math.floor((style.length - 1) / 2);
style[s] = 'Классика';
console.log(style.shift());
style.unshift("Рэп", "Регги")
console.log(style);




