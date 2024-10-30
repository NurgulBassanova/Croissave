document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal_tab");
    modal.style.display = "none"; 

    // Apply saved filters
    applySavedFilters();

    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');
    const products = productList.getElementsByClassName('product'); 

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const query = searchInput.value.toLowerCase(); 
        for (let product of products) {
            const productName = product.querySelector('.imya').textContent.toLowerCase(); 
            if (productName.includes(query)) {
                product.style.display = ''; 
            } else {
                product.style.display = 'none'; 
            }
        }
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase(); 

        if (query === '') {
            for (let product of products) {
                product.style.display = ''; 
            }
        }
    });
});

function openModal(ingredients, allergens) {
    const modal = document.getElementById("modal_tab");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <p>Ingredients: ${ingredients}</p>
        <p>Allergens: ${allergens}</p>
    `;

    modal.classList.add("show");
    modal.style.display = "flex"; 
}

function closeModal() {
    const modal = document.getElementById("modal_tab");
    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none"; 
    }, 300); 
}


function applySavedFilters() {
    const minPrice = localStorage.getItem('minPrice');
    const maxPrice = localStorage.getItem('maxPrice');

    if (minPrice) {
        document.getElementById('minPrice').value = minPrice;
    }
    if (maxPrice) {
        document.getElementById('maxPrice').value = maxPrice;
    }
    filterByPrice(); 
}

function filterByPrice() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const products = document.querySelectorAll('.product');

  
    products.forEach(product => {
        product.style.display = 'block';
    });

   
    products.forEach(product => {
        const price = parseFloat(product.dataset.price);
        if (price < minPrice || price > maxPrice) {
            product.style.display = 'none';
        }
    });

    
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
}