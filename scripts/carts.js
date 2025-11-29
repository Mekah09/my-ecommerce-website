const itemsaddedtocart = document.querySelector('#itemaddedtocart')
const cartsItemsCount = document.querySelector('#cartCount')


function addToCart(id, title, price, thumbnail) {
  alert("Item added to cart")
  // console.log(id, title, image, price)

  const cartItem = JSON.parse(localStorage.getItem('carts')) || [];
  // console.log(cartItem)
  let productCart = {
    id: id,
    title: title,
    thumbnail: thumbnail,
    price: price,
    quantity: 1
  }

  cartItem.push(productCart);
  // console.log(cartItem)
  localStorage.setItem('carts', JSON.stringify(cartItem))

  cartsItemsCount.innerText = JSON.parse(localStorage.getItem('carts')).length
  console.log(JSON.parse(localStorage.getItem('carts')).length)
  console.log(JSON.parse(localStorage.getItem('carts')))
  cartsItems()

}


function cartsItems() {
  let productCart = JSON.parse(localStorage.getItem('carts')) || []
  console.log(productCart)
  if (productCart.length > 0) {
    itemsaddedtocart.innerHTML = productCart.map(value => `
          <div class="flex gap-4 mb-4 pb-4 border-b">
            <img src="${value.thumbnail}" class="w-20 h-20 object-cover rounded-lg" />
            <div class="flex-1">
              <h4 class="font-semibold text-sm mb-2">${value.title}</h4>
              <p class="text-gray-600 text-sm mb-2">${value.price}</p>
              <div class="flex items-center gap-2">
                <button onclick="updateQuantity(${value.id}, -1)" class="w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200">
                  <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <span class="font-medium">${value.quantity}</span>
                <button onclick="updateQuantity(${value.id}, 1)" class="w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200">
                  <i class="fa-solid fa-plus text-xs"></i>
                </button>
              </div>
            </div>
            <button onclick="removeFromCart(${value.id})" class="text-red-500 hover:text-red-600">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `).join('');
  }

}

cartsItems()


// let theCarts = JSON.parse(localStorage.getItem('carts'))
// let thecarttohtml = itemsaddedtocart.innerHTML
