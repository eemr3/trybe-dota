const cardItem = document.querySelector('.dota__card');

function setCardScreen(value) {
  const item = document.createElement('div');
  const img = document.createElement('img');
  item.classList.add('dota__card-item');
  img.setAttribute('src', value);
  item.appendChild(img);
  return item;
}

async function getDataApi() {
  const baseURL = 'https://api.opendota.com';
  const response = await fetchApiDota();
  response.forEach((card) => {
    const cards = setCardScreen(`${baseURL}${card.img}`);
    cardItem.appendChild(cards);
  });
}

getDataApi();
