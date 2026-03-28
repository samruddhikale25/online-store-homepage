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

document.getElementById("category").addEventListener("change", e=>{
  let val = e.target.value;

  let filtered = products.filter(p =>
    val === "all" || p.category === val
  );

  displayFiltered(filtered);
});

document.getElementById("sort").addEventListener("change", e=>{
  let sorted = [...products];

  if(e.target.value==="low"){
    sorted.sort((a,b)=>a.price-b.price);
  } else {
    sorted.sort((a,b)=>b.price-a.price);
  }

  displayFiltered(sorted);
});

function displayFiltered(data){
  let container = document.querySelector(".grid");
  container.innerHTML = "";

  data.forEach(p=>{
    container.innerHTML += `
      <div class="bg-white/10 p-4 rounded-xl">
        <img src="${p.image}">
        <h2>${p.name}</h2>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

// Search
document.querySelector("input").addEventListener("keyup", e=>{
  let val = e.target.value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(val)
  );

  displayFiltered(filtered);
});

// Cart
function addToCart(){
  alert("Added to cart");
}