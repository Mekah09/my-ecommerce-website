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
       <div class="group relative">
        <img src="${value.thumbnail}" alt="${value.title}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${value.title}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${value.tags}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$${value.price}</p>
        </div>
      </div>
      `;
    }).join('');  
  })