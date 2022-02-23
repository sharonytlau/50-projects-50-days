const cardsDiv = document.querySelector(".cards-container");

const imgs = [
  {
    photographer: "damyb99",
    location: "London, UK",
    img: "https://images.unsplash.com/photo-1579458240276-80b08577a28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "https://unsplash.com/photos/ko8kAbASDYc",
  },
  {
    photographer: "marckleen",
    location: "Amsterdam, the Netherlands",
    img: "https://images.unsplash.com/photo-1562052692-7c9adc98aa98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    url: "https://unsplash.com/photos/r3cOMlQOQpk",
  },
  {
    photographer: "brainburger_",
    location: "Sevilla, Spain",
    img: "https://images.unsplash.com/photo-1598280883752-af10100f34c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1942&q=80",
    url: "https://unsplash.com/photos/edcMYZ_vSgw",
  },
  {
    photographer: "josswoodhead",
    location: "Grindelwald, Switzerland",
    img: "https://images.unsplash.com/photo-1576947749093-a0502092a721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "https://unsplash.com/photos/dScHXrBxYD0",
  },
  {
    photographer: "thiagorocha5",
    location: "Fez, Morocco",
    img: "https://images.unsplash.com/photo-1589808453594-5224413a1fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "https://unsplash.com/photos/NtxHHbQLzg4",
  },
];

function init() {
  const firstCard = document.querySelector(".card");
  firstCard.classList.add("active");
}

imgs.forEach((img) =>
  cardsDiv.insertAdjacentHTML(
    "beforeend",
    `
      <div class='card' style='background-image: url("${img.img}")'> 
        <p> @${img.photographer} 
            ${img.location} 
        </p>
      </div>
    `
  )
);

const expandCard = function (e) {
  if (e.target.classList.contains("card")) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.classList.remove("active"));
    e.target.classList.add("active");
  }
};

cardsDiv.addEventListener("click", expandCard);

init();
