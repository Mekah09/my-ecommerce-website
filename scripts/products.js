const allMyProducts = document.querySelector('#productsDisplay')

fetch('https://dummyjson.com/products?limit=100', {
  method: "GET"
})
  .then(function (response) {
    console.log(response);
    return response.json();
  })

  .then(function (AllTheProducts) {
    const products = AllTheProducts.products;
    console.log(products);

    allMyProducts.innerHTML = products.map(function (value, index, array) {
      console.log("Current product:", value);
      return `
      <div class="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
  <div class="relative aspect-square overflow-hidden bg-gray-100">
  <img src="${value.thumbnail}" alt="${value.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${value.category}</span>
              <div class="flex items-center gap-1">
                <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                <span class="text-xs font-medium text-gray-600">${value.rating}</span>
              </div>
            </div>
            <h3 class="font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">${value.title}
               <p class="mt-1 text-sm text-gray-500">${value.tags}</p>
            </h3>
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-xl font-bold text-gray-900">$${value.price}</p>
              </div>
            </div>
            <button class="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <i class="fa-solid fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>

          </div>
      `;
    }).join('');
  })