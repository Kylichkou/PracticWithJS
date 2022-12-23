"use strict"
const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели","1");
 

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

if (personalMovieDB.count[numberOfFilms] < 10){
     console.log("Ты новичок");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ты неплох");
 } else if (personalMovieDB.count >= 10){
    console.log("Ты киноман");
 } else{
    console.log("Произошла ошибка");
 }

 for (let i = 0; i<2; i++){
     const a = prompt("Один из последних просмотреных фильмов"),
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


     

    
console.log(personalMovieDB);

