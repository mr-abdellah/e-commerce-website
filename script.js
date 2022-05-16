const openMenu = document.querySelector('#open-menu-button');
const closeMenu = document.querySelector('#close-menu-button');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-link');

openMenu.addEventListener('click', () => {
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  navBar.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  navBar.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.screen.width < 768) {
      openMenu.style.display = 'block';
      closeMenu.style.display = 'none';
      navBar.style.display = 'none';
    }
    else if (window.onload.screen.width > 768) {
      navBar.style.display = 'flex';
    }
  });
});

const productsContainer = document.querySelector('.products-container');
function generateProducts({
  image, alt, title, type, description,
}) {
  return `
  <div class="product">
    <div class="image"><img src="${image}" alt="${alt}"></div>
    <div class="details">
        <h4>${title}</h4>
        <p class="type">${type}</p>
        <div class = "details-line"></div>
        <p class="desc">${description}</p>
    </div>
  </div>
  `;
}

const products = [
  {
    image: 'img/products/sunray.jpg',
    alt: 'Sunray Sandal',
    title: 'Sunray Protect 3 Sandal',
    type: 'Baby',
    description: 'Open sides and a closed antistub toe bring all-adventure comfort to a sandal that resists water',
  },
  {
    image: 'img/products/ecru.jpg',
    alt: 'Ecru Desert Short',
    title: 'Ecru Desert Shirt',
    type: 'Men',
    description: 'Add a some pattern into your wardrobe with this this lovely mens desert print shirt.',
  },
  {
    image: 'img/products/glasses.jpg',
    alt: 'Polarised Glasses',
    title: 'Mens Polarised Navigator Sunglasses',
    type: 'Men',
    description: 'These Silver polarised navigator sunglasses will make a stylish addition to your Summer accessories collection',
  },
  {
    image: 'img/products/floral.jpg',
    alt: 'Red Floral Shirred Top',
    title: 'Red Floral Shirred Top',
    type: 'Girls',
    description: 'Update their new season wardrobe with this lovely shirred crop top in a pretty red floral print. ',
  },
  {
    image: 'img/products/hat.jpg',
    alt: 'Blue Hat',
    title: 'Blue Hearts Bucket Hat',
    type: 'Girls',
    description: 'Open sides and a closed antistub toe bring all-adventure comfort to a sandal that resists water to keep little kids moving in rain or sun.',
  },
  {
    image: 'img/products/sandals.jpg',
    alt: 'Womens Tan Strappy Sandals',
    title: 'Womens Tan Strappy Sandals',
    type: 'Womens',
    description: 'These lovely women sandals will make a great addition to your spring/summer wardrobe.',
  },
];

const more = document.getElementById('more');
const less = document.getElementById('less');
more.addEventListener('click', () => {
  const htmlProducts = products.map((product) => generateProducts(product)).join('');
  productsContainer.innerHTML = htmlProducts;
  more.style.display = 'none';
  less.style.display = 'block';
});

less.addEventListener('click', () => {
  const htmlProducts = products.slice(0, 2).map((product) => generateProducts(product)).join('');
  productsContainer.innerHTML = htmlProducts;
  more.style.display = 'block';
  less.style.display = 'none';
});

const htmlProducts = products.slice(0, 2).map((product) => generateProducts(product)).join('');
productsContainer.innerHTML = htmlProducts;

if (window.screen.width >= 768) {
  productsContainer.innerHTML = products.map((product) => generateProducts(product)).join('');
}