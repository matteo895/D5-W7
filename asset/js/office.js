//creiamo loggetto che ci verrà dato dagli input della pagina back office

const form = document.getElementById("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const objOffice = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("img").value,
    price: document.getElementById("price").value,
  };

  const URL = "https://striveschool-api.herokuapp.com/api/product/";

  // creiamo la fetch che ci permette di creare gli elementi delle card

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(objOffice),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYmQ2MTRjNTllYzAwMTk5MGQ4NjgiLCJpYXQiOjE3MDkyOTI4OTcsImV4cCI6MTcxMDUwMjQ5N30.HcHhBD-WjCnF1JdnH8DQP9gk_eKjfcKyPRe6CTYE4tM",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 400) {
          throw new Error("400 - Errore lato client");
        }

        if (response.status === 404) {
          throw new Error("404 - Dato non trovato");
        }

        if (response.status === 500) {
          throw new Error("500 - Errore lato server");
        }

        throw new Error("Errore nel reperimento dati");
      }
    })
    .catch((err) => console.log(err));
};
