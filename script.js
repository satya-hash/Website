let cardsContainer = document.querySelector('.cardsContainer')

async function getProducts(){
     let res = await fetch('https://dummyjson.com/products?limit=3')
     let data = await res.json();
     // console.log(data);
     return await data;
}

(async () => {
     let items;
     function showProduct(product) {
          let { title, id, images , description} = product;
          return `<div class="product max-w-md  px-5 py-2 rounded overflow-hidden shadow-md" id=${id}>
                         <div class=' h-1/2 flex justify-center items-center'>
                              <img class="w-1/2 h-full text-center" src=${images[0]} alt=${title}>
                         </div>
                         <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">${title}</div>
                              <p class="text-gray-700 text-base">
                                   ${description}
                              </p>
                         </div>
                    </div>`;
     }
     let { products } = await getProducts();
     items = products.map(product => showProduct(product) )
     cardsContainer.innerHTML = items.join(' ');
})()


let name = document.querySelector('#name').value
let email = document.querySelector('#email').value
let txt = document.querySelector('#txt').value

console.log(name,email,txt);

const postData =  () => {
     fetch('https://jsonplaceholder.typicode.com/posts',{
          method: 'POST',
          body: JSON.stringify({
               title: 'example',
               body: 'this is the body',
               userId:1,
               name: `${name}`,
               email: `${email}`,
               comment:`${txt}`
          }),
          headers: {
                    'Content-type': 'application/json; charset=UTF-8',
          },
     }).then(res=>res.json()).then(data=>console.log(data))
}


let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('submit', (e) => {
     e.preventDefault();
     console.log('event listener working');
     postData();
})