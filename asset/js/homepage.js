const url = "https://striveschool-api.herokuapp.com/api/product/";
fetch(URL, {});

document.addEventListener("DOMContentLoaded", function () {
  const modifyButtons = document.querySelectorAll(".modify-button");

  modifyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".card");
      const image = card.querySelector("img");
      const currentIndex = parseInt(image.getAttribute("data-current-index"));
      const alternativeSrc1 = image.getAttribute("data-alternative-src1");
      const alternativeSrc2 = image.getAttribute("data-alternative-src2");

      if (currentIndex === 1) {
        image.setAttribute("src", alternativeSrc1);
        image.setAttribute("data-current-index", 2);
      } else if (currentIndex === 2) {
        image.setAttribute("src", alternativeSrc2);
        image.setAttribute("data-current-index", 3);
      } else {
        const originalSrc = image.getAttribute("data-original-src");
        image.setAttribute("src", originalSrc);
        image.setAttribute("data-current-index", 1);
      }
    });
  });

  const discoverButtons = document.querySelectorAll(".discover-button");

  discoverButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Qui inserisci il codice per reindirizzare l'utente alla pagina desiderata
      window.location.replace("/info.html");
    });
  });
});
