const productDetailContainer = document.querySelector(".product-detail");

async function fetchProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const response = await fetch(
    `http://trailblaze-jackets.local/wp-json/wc/store/products/${productId}`
  );
  const product = await response.json();
  console.log(product);
  productDetailContainer.innerHTML = `
    <div>
        <img src="${product.images[0].src}" alt="${product.name}" class="product-detail-image">
        <div>
            <h2>${product.name}</h2>
            <p>${product.prices.price}</p>
            <p>${product.description}</p>
        </div>
    </div>
    `;
}
fetchProductDetail();
