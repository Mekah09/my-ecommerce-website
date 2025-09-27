// products connected to the html 
const trendingProducts = document.querySelector('#trendingProducts')

fetch('https://api.escuelajs.co/api/v1/products', {
    method: "GET"
})

.then(function(response){
    console.log(response);
    return response.json();
})

.then(function(tProducts){
  // to get the best of the best product
  const firstFour = tProducts.slice(0, 4);
  console.log(firstFour);

  let theTrendingProducts = firstFour;
  console.log(theTrendingProducts);


     trendingProducts.innerHTML = theTrendingProducts.map(function(value, index, array){
        // console.log(value);
        // the best of the best product layer out connected
        return `
            <div class="group relative">
        <img src="${value.images}" alt="${value.title}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${value.title}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${value.updatedAt}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$${value.price}</p>
        </div>
      </div>
        `;
    }).join('');
})
.catch(function(error){
    console.log("Something went wrong");
    // alert('Something went wrong');
    console.log(error);
})