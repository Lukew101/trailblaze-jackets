const baseUrl = "http://trailblaze-jackets.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".products-list");

async function fetchProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    productContainer.innerHTML += `<a href="product-detail.html?id=${product.id}" class="product-container">
        <img src="${product.images[0].src}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>${product.prices.price}</p>
        </a>`;
  });
}

fetchProducts(baseUrl);
