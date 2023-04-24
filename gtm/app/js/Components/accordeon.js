$(document).ready(function () {
  // Добавляем обработчик события "click" на элемент с классом "catalog__price-title"
  $(".catalog__price-title").on("click", function () {
    // Добавляем/удаляем класс "active" на текущем элементе "catalog__price-title"
    $(this).toggleClass("active");

    // Добавляем/удаляем класс "active" на элементе "catalog__price-box"
    $(this)
      .siblings(".catalog__price-wrap")
      //   .find(".catalog__price-wrap")
      .toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "categories-choose__acordeon-wrapper"
  $(".categories-choose__acordeon-wrapper").on("click", function () {
    // Добавляем/удаляем класс "active" на элементе "categories-choose__acordeon-content"
    $(this)
      .siblings(".categories-choose__acordeon-content")
      .toggleClass("active");

    // Добавляем/удаляем класс "visible" на элементе "categories-choose__acordeon-content__text.accordeon2"
    $(this)
      .siblings(".categories-choose__acordeon-content")
      .find(".categories-choose__acordeon-content__text.accordeon2")
      .toggleClass("visible");

    // Добавляем/удаляем класс "active" на элементе "categories-choose__acordeon-title"
    $(this).find(".categories-choose__acordeon-title").toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "categories-choose__acordeon-content__text.accordeon2"
  $(".categories-choose__acordeon-content__text.accordeon2").on(
    "click",
    function () {
      // Добавляем/удаляем класс "active" на текущем элементе "categories-choose__acordeon-content__text.accordeon2"
      $(this).toggleClass("active");

      // Добавляем/удаляем класс "active" на ближайшем элементе "categories-choose__acordeon-content2"
      $(this)
        .closest(".categories-choose__acordeon-content")
        .find(".categories-choose__acordeon-content2")
        .toggleClass("active");
    }
  );

  // Добавляем обработчик события "click" на элемент с классом "catalog__brand-title"
  $(".catalog__brand-title").on("click", function () {
    // Добавляем/удаляем класс "active" на текущем элементе "catalog__brand-title"
    $(this).toggleClass("active");

    // Добавляем/удаляем класс "active" на элементе "catalog__brand-box"
    $(this).siblings(".catalog__brand-box").toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "catalog__brand-label"
  $(".catalog__brand-label").on("click", function () {
    // Добавляем/удаляем класс "active" на текущем элементе "catalog__brand-label"
    $(this).toggleClass("active");

    // Добавляем/удаляем класс "active" на ближайшем элементе "catalog__brand-box"
    $(this).closest(".catalog__brand-box").toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "catalog__brand-input"
  $(".catalog__brand-input").on("click", function () {
    // Добавляем/удаляем класс "active" на ближайшем элементе "catalog__brand-label"
    $(this).closest(".catalog__brand-label").toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "catalog__sort-title"
  $(".catalog__sort-title").on("click", function () {
    // Добавляем/удаляем класс "active" на текущем элементе "catalog__sort-title"
    $(this).toggleClass("active");

    // Добавляем/удаляем класс "active" на элементе "catalog__sort-box"
    $(this).siblings(".catalog__sort-box").toggleClass("active");
  });

  // Добавляем обработчик события "click" на элементы с классом "catalog__sort-label"
  $(".catalog__sort-label").on("click", function () {
    // Добавляем/удаляем класс "active" на текущем элементе "catalog__sort-label"
    $(this).toggleClass("active");

    // Добавляем/удаляем класс "active" на ближайшем элементе "catalog__sort-box"
    $(this).closest(".catalog__sort-box").toggleClass("active");
  });
});
