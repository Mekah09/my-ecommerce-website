const allMyProducts = document.querySelector('#productsDisplay')
const itemsaddedtocart = document.querySelector('#itemsaddedtocart')


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
            <button class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-900 hover:text-white">
              <i class="fa-regular fa-heart"></i>
            </button>
              ${value.discountPercentage ? `
              <div class="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                -${Math.round(value.discountPercentage)}%
              </div>
            ` : ''}
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
                                ${value.discountPercentage ? `
                  <p class="text-sm text-gray-400 line-through">$${(value.price / (1 - value.discountPercentage / 100)).toFixed(2)}</p>
                ` : ''}

              </div>
            </div>
            <button 
             onclick="addToCart(${value.id}, '${value.title}', ${value.price}, '${value.thumbnail}')"
              class="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <i class="fa-solid fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>

          </div>
      `;
    }).join('');
  })

function addToCart(id, title, image, price) {
  // alert("Button clicked")
  // console.log(id, title, image, price)

  const cartItem = JSON.parse(localStorage.getItem('carts')) || [];
  // console.log(cartItem)
  let productCart = []

  cartItem.push(productCart);
  // console.log(cartItem)
  localStorage.setItem('carts', JSON.stringify(cartItem))

  console.log(JSON.parse(localStorage.getItem('carts')).length)
  console.log(JSON.parse(localStorage.getItem('carts')))

  itemsaddedtocart.innerHTML = JSON.parse(localStorage.getItem('carts'))


  if (productCart.length === 0) {
    itemsaddedtocart.innerHTML = `
          <div class="text-center py-12">
            <i class="fa-solid fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
            <p class="text-gray-500">Your cart is empty</p>
          </div>
        `;
  } else {
    itemsaddedtocart.innerHTML = productCart.map(item => `
          <div class="flex gap-4 mb-4 pb-4 border-b">
            <img src="${item.image}" class="w-20 h-20 object-cover rounded-lg" />
            <div class="flex-1">
              <h4 class="font-semibold text-sm mb-2">${item.title}</h4>
              <p class="text-gray-600 text-sm mb-2">$${item.price}</p>
              <div class="flex items-center gap-2">
                <button onclick="updateQuantity(${item.id}, -1)" class="w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200">
                  <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <span class="font-medium">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200">
                  <i class="fa-solid fa-plus text-xs"></i>
                </button>
              </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-600">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `).join('');
  }

}

// let theCarts = JSON.parse(localStorage.getItem('carts'))
// let thecarttohtml = itemsaddedtocart.innerHTML
