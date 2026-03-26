let products = [
  {name:"iPhone", price:70000, category:"electronics", image:"https://via.placeholder.com/300"},
  {name:"Shoes", price:3000, category:"fashion", image:"https://via.placeholder.com/300"},
  {name:"Book", price:500, category:"books", image:"https://via.placeholder.com/300"}
];

function displayProducts(){
  let container = document.querySelector(".grid");
  container.innerHTML = "";

  products.forEach(p=>{
    container.innerHTML += `
      <div class="bg-white/10 p-4 rounded-xl hover:scale-105 transition">
        <img src="${p.image}" class="rounded mb-3">
        <h2>${p.name}</h2>
        <p class="text-blue-400">₹${p.price}</p>
      </div>
    `;
  });
}

displayProducts();