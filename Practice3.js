"use strict";

let numberOfFilms;
 
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","1");

    while (numberOfFilms == "" || numberOfFilms == null  || isNaN (numberOfFilms)  ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","1");
    }
}

start();

// Функция задания 2
function showMyDB (privatt){
     if (!privatt) {
        console.log(personalMovieDB);
     } else{
        console.log("Cостояние = true");
     }
}

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    startt:function (){
      
    }
};

// Вывод функции задания 2 
showMyDB(personalMovieDB.privat);

// Функция задания 3
function writeYourGenres (genres){
    numberOfFilms = alert("Сейчас вам зададут 3 вопросаБ:Ваш любимый жанр под номером (номер по порядку)");
    for (let i = 0; i < 3 ; i++){
        genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}



if (personalMovieDB.count < 10 && personalMovieDB.count > 0){
     console.log("Ты новичок");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ты неплох");
 } else if (personalMovieDB.count >= 10){
    console.log("Ты киноман");
 } else{
    console.log("Произошла ошибка");
 }

function rememberMyFilims(){
   for (let i = 0; i<2; i++){
      const a = prompt("Один из последних просмотреных фильмов").trim(),
      b = prompt("На сколько оцените его?");
      personalMovieDB.movies[a] = b;
      if (a !=null && b!=null && a!="" && b!="" && a.length<50  && b.length<50 ){
         personalMovieDB.movies[a] = b;
         console.log('done')
      }else {
         console.log('error')
         i--;
      }
 } 
}
rememberMyFilims();
writeYourGenres(personalMovieDB.genres);

     

    
console.log(personalMovieDB);

