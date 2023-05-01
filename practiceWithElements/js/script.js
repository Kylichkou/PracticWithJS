/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// const promoADV = document.querySelector(".promo__adv"),
//       images = promoADV.querySelectorAll("img"),
//       genre = document.querySelector(".promo__genre"),
//       bg = document.querySelector(".promo__bg");

//       images.forEach(item => {
//         item.remove();
//       });

//       genre.textContent = "ДРАМА";

    //   bg.style.cssText = "background:url(../img/bg.jpg) center center/cover no-repeat;";



// 1. Удалить все рекламные блоки со страницы (правая часть сайта)
// const adv = document.querySelectorAll(".promo__adv img");
const promoADV = document.querySelector(".promo__adv"),
      img = promoADV.querySelectorAll("img");

      img.forEach(item =>{
        item.remove();
      });

    //   img.forEach(function(item) {
    //     item.remove();
    //   }); Безымянная функция 


// 2. Изменить жанр фильма, поменять "комедия" на "драма"
// const genre  = document.querySelector(".promo__genre");
//       genre.textContent = "ДРАМА";

// // // 3. Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // // Реализовать только при помощи JS  
// const promoBg = document.querySelector(".promo__bg");
//       promoBg.style.cssText = "background:url(../img/bg.jpg) center top/cover no-repeat;";

// 2 и 3 задание вместе 
// const promoContent = document.querySelector(".promo__content"),
//       genre = promoContent.querySelector(".promo__genre"),
//       promoBg = promoContent.querySelector(".promo__bg");

// genre.textContent = "ДРАММА";
// promoBg.style.cssText = "background:url(../img/bg.jpg) center top/cover no-repeat;";

const poster = document.querySelector(".promo__bg"),
      genress = poster.querySelector('.promo__genre'),
      movieList = document.querySelector(".promo__interactive-list");

      genress.textContent = "Драма";

      poster.style.backgroundImage = "url('../img/bg.jpg')";
    
    //   4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    //   Отсортировать их по алфавиту 
    //   5) Добавить нумерацию выведенных фильмов
      movieList.innerHTML = "";

console.log(poster.innerHTML);//Получение структуры данного блока редко используется
      
      movieDB.movies.sort();//Cортировка массива по алфавиту Когда мы слышим слово переьрать юзаем фор ич 
     
      movieDB.movies.forEach((film, i) =>{
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
      });

    
