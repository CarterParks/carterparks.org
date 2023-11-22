fetch("content.txt")
  .then((res) => res.text())
  .then((text) => {
    let content =  text.split(/\n\*/).slice(1);
    while (content.length > 0) {
      let cardHead = document.createElement('div');
      cardHead.classList.add("card-header");
      cardHead.innerHTML = content.shift();

      let cardBody = document.createElement('div');
      cardBody.classList.add("card-body");
      cardBody.innerHTML = content.shift();

      let card = document.createElement('div');
      card.classList.add("card");
      card.prepend(cardBody);
      card.prepend(cardHead);

      document.querySelector('#container').appendChild(card);
    }

    let cards = document.querySelectorAll('.card');
    cards.forEach((x, i) => x.style.setProperty('--hue', `${(i / cards.length) * 360 }`));
  })
  .catch((e) => console.error(e));
