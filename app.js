const products = [
  { name: "Blue Runner", price: 100, img: "img/nike1.png" },
  { name: "White/Black Sport", price: 114, img: "img/nike2.png" },
  { name: "Lime Light", price: 199, img: "img/nike3.png" },
  { name: "Classic White", price: 761, img: "img/nike4.png" },
  { name: "Red Swoosh", price: 384, img: "img/nike5.png" },
  { name: "Air Max Gold", price: 304, img: "img/nike6.png" },
  { name: "Lime Light", price: 496, img: "img/nike7.png" },
  { name: "Classic White", price: 761, img: "img/nike8.png" },
  { name: "Red Swoosh", price: 384, img: "img/nike9.png" },
  { name: "Air Max Gold", price: 304, img: "img/nike10.png" }
];

const itemsContainer = document.querySelector('.items');
const filterSelect = document.getElementById('price');

function renderItems(filter) {
itemsContainer.innerHTML = ""; // Clear current items

  const filtered = products.filter(p => {
    if (filter === "under20") return p.price < 200;
    if (filter === "2050") return p.price >= 200 && p.price <= 500;
    if (filter === "above50") return p.price > 500;
    return true;
  });

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <p>$${p.price}</p>
    `;
    itemsContainer.appendChild(card);
  });
}

// Listen for changes
filterSelect.addEventListener('change', (e) => renderItems(e.target.value));

// Initial Load
renderItems(filterSelect.value);