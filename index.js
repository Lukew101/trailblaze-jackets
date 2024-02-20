import { priceConverter } from "./priceConverter.js";

const baseUrl = "https://trailblaze-jackets.42web.io/wp-json/wc/store/products";
const productContainer = document.querySelector(".products-list");

async function fetchProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    const regularPrice = priceConverter(product.prices.regular_price);

    if (product.on_sale) {
      const salePrice = priceConverter(product.prices.sale_price);

      productContainer.innerHTML += `<a href="product-detail.html?id=${product.id}" class="product-container">
        <img src="${product.images[0].src}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>${product.short_description}</p>
        <p class="cross-out-regular-price">${regularPrice} kr</p>
        <p>${salePrice} kr</p>
      </a>`;
      return;
    }

    productContainer.innerHTML += `<a href="product-detail.html?id=${product.id}" class="product-container">
          <img src="${product.images[0].src}" alt="${product.name}" class="product-image">
          <h2>${product.name}</h2>
          <p>${product.short_description}</p>
          <p>${regularPrice} kr</p>
        </a>`;
  });
}

fetchProducts(baseUrl);
