import { priceConverter } from "./priceConverter.js";

const productDetailContainer = document.querySelector(".product-detail");

async function fetchProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const response = await fetch(
    `https://cors.noroff.dev/https://trailblaze-jackets.42web.io/wp-json/wc/store/products/${productId}`
  );
  const product = await response.json();
  console.log(product);

  const regularPrice = priceConverter(product.prices.regular_price);

  if (product.on_sale) {
    const salePrice = priceConverter(product.prices.sale_price);
    productDetailContainer.innerHTML = `
        <div>
            <img src="${product.images[0].src}" alt="${product.name}" class="product-detail-image">
            <div>
                <h2>${product.name}</h2>
                <p class="cross-out-regular-price">${regularPrice} kr</p>
                <p>${salePrice} kr</p>
                <p>${product.description}</p>
            </div>
        </div>
        `;
    return;
  }

  productDetailContainer.innerHTML = `
    <div>
        <img src="${product.images[0].src}" alt="${product.name}" class="product-detail-image">
        <div>
            <h2>${product.name}</h2>
            <p>${regularPrice} kr</p>
            <p>${product.description}</p>
        </div>
    </div>
    `;
}

fetchProductDetail();
