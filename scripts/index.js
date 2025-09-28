// // products connected to the html 
const trendingProducts = document.querySelector('#trendingProducts')
const thePro = document.querySelector('#pro')
const thePro2 = document.querySelector('#pro2')

// fetch('https://dummyjson.com/products', {
// // fetch('https://fakestoreapi.com/products', {
// // fetch('https://api.escuelajs.co/api/v1/products', {
//     method: "GET"
// })

// .then(function(response){
//     console.log(response);
//     return response.json();
// })

// .then(function(tProducts){
//   // to get the best of the best product
//   const firstFour = tProducts.products;
//   console.log(firstFour);

//   let theTrendingProducts = firstFour.slice(0, 4);
//   console.log(theTrendingProducts);


//      trendingProducts.innerHTML = theTrendingProducts.map(function(value, index, array){
//         // console.log(value);
//         // the best of the best product layer out connected
//         return `
//             <div class="group relative">
//         <img src="${value.images}" alt="${value.title}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
//         <div class="mt-4 flex justify-between">
//           <div>
//             <h3 class="text-sm text-gray-700">
//               <a href="#">
//                 <span aria-hidden="true" class="absolute inset-0"></span>
//                 ${value.title}
//               </a>
//             </h3>
//             <p class="mt-1 text-sm text-gray-500">${value.tags}</p>
//           </div>
//           <p class="text-sm font-medium text-gray-900">$${value.price}</p>
//         </div>
//       </div>
//         `;
//     }).join('');
// })
// .catch(function(error){
//   console.log("Something went wrong");
//   // alert('Something went wrong');
//   console.log(error);
// })

fetch('https://dummyjson.com/carts', {
    method: "GET"
})
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(tProducts){
    // Let's explore the structure first
    console.log("Full response:", tProducts);
    console.log("Keys in response:", Object.keys(tProducts));
    
    // Now let's look at the carts array
    if (tProducts.carts) {
        console.log("Number of carts:", tProducts.carts.length);
        console.log("First cart:", tProducts.carts[0]);
        console.log("Products in first cart:", tProducts.carts[0].products);
    }
    
    // Extract products from all carts
    const allCartProducts = [];
    
    tProducts.carts.forEach(function(cart) {
        cart.products.forEach(function(product) {
            allCartProducts.push(product);
        });
    });
    
    console.log("All products from all carts:", allCartProducts);
    console.log("Total products found:", allCartProducts.length);
    
    // Get first 4 products for trending
    let theTrendingProducts = allCartProducts.slice(22, 26);
    console.log("First 4 trending products:", theTrendingProducts);
    
    trendingProducts.innerHTML = theTrendingProducts.map(function(value, index, array){
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
                        <p class="mt-1 text-sm text-gray-500">${value.category}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$${value.price}</p>
                </div>
            </div>
        `;
    }).join('');
})
.catch(function(error){
    console.log("Something went wrong");
    console.log(error);
})

fetch('https://dummyjson.com/products', {
  method: "GET"
})

.then(function(responsetwo) {
  console.log(responsetwo)
  return responsetwo.json()
})

.then(function(thepro){
  // to get the best of the best product
  const nextfour = thepro.products;
  console.log(nextfour);

  let finalpro = nextfour.slice(5, 9);
  console.log(finalpro);


      thePro.innerHTML = finalpro.map(function(value, index, array){
        // console.log(value);
        // the best of the best product layer out connected
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

fetch('https://dummyjson.com/products', {
  method: "GET"
})

.then(function(responsethird) {
  console.log(responsethird)
  return responsethird.json()
})

.then(function(thepro2){
  // to get the best of the best product
  const nextfour2 = thepro2.products;
  console.log(nextfour2);

  let finalpro2 = nextfour2.slice(10, 14);
  console.log(finalpro2);


      thePro2.innerHTML = finalpro2.map(function(value, index, array){
        // console.log(value);
        // the best of the best product layer out connected
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
