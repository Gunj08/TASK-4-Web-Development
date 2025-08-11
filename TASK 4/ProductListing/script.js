let products = [
    { name: "Laptop", category: "electronics", price: 50000, rating: 4.5 },
    { name: "Shirt", category: "clothes", price: 800, rating: 4.0 },
    { name: "Headphones", category: "electronics", price: 2000, rating: 4.7 },
    { name: "Jeans", category: "clothes", price: 1200, rating: 4.3 }
];

function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `<div class="product"><h3>${p.name}</h3><p>₹${p.price}</p><p>Rating: ${p.rating}</p></div>`;
    });
}

function filterProducts() {
    let category = document.getElementById("filter").value;
    let filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}

function sortProducts() {
    let sortBy = document.getElementById("sort").value;
    let sorted = [...products];
    if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
        sorted.sort((a, b) => a.price - b.price);
    }
    displayProducts(sorted);
}

displayProducts(products);
