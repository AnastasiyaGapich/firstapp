/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
      count: numberOfFilms,
      movies: { },
      actors: { },
      genres: [],
      privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


if ( 4 == 9)  {
  console.log('Ok!');
} else{
  console.log('False');
}

const num=50;

switch (num) {
  case 49:
    console.log('false');
    break;
  case 100:  
    console.log('false');
    break;
  case 50:
    console.log('good job');
    break;
  default:
    console.log('not at all');
    break;
}


// const humburger = 3,
//       fries = 1,
//       cola = 0;
// console.log(humburger === 3 && cola && fries);

// console.log( 1 && 0 );
// console.log( 1 && 5 );
// console.log( null && 5 );
// console.log( 0 && 'gjgfvgbsibn');


// if (humburger === 3 && cola ===1 && fries) {
//   console.log('all ...');
// } else {
//   console.log('get out');
// }

const humburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;

if (humburger === 3 && cola ===2 || fries === 3 && nuggets) {
  console.log('good');
} else {
  console.log('we gone');
} 

console.log(humburger === 3 && cola ===2 || fries === 3 && nuggets);


console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 ); ***
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
}
//Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
console.log(hamburger && cola || fries === 3 && nuggets);


