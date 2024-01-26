function makeCard(header, body){
    let cardHead = document.createElement("div");
    cardHead.classList.add("card-header");
    cardHead.innerHTML = header;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = body;

    let card = document.createElement("div");
    card.classList.add("card");
    card.prepend(cardBody);
    card.prepend(cardHead);

    return card;
}

async function populate() {
  const content_file = await (await fetch("content.txt")).text();
  const key_file = await (await fetch("key.svg")).text();

  let ca = content_file.split(/\n\*/).slice(1);
  const cardHeaders = ca.filter((x, i) => i % 2 == 0)
  const cardBodies = ca.filter((x, i) => i % 2 == 1)

  let container = document.querySelector("#container");
  cardHeaders.forEach((header, idx) => container.appendChild(makeCard(header, cardBodies[idx])))

  let cards = document.querySelectorAll(".card");
  cards.forEach((x, i) => x.style.setProperty("--hue", `${(i / cards.length) * 360 }`));

  /*
  let key = document.createElement("a");
  key.id = "key";
  key.href="/retriever/index.html"
  key.innerHTML = key_file;
  container.appendChild(key);
  */
}

populate();
