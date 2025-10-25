// ============================================
// STATE & DATA
// ============================================

const products = [
    {
        id: 1,
        title: "Ribrave T-shirt",
        price: 25,
        colors: [
            { code: "pink", img: "./img/Ribrave.png" },
            { code: "green", img: "./img/Ribravegreen.png" },
        ],
    },
    {
        id: 2,
        title: "Puma T-shirt",
        price: 30,
        colors: [
            { code: "white", img: "./img/Puma.png" },
            { code: "blue", img: "./img/Pumablue.png" },
        ],
    },
    {
        id: 3,
        title: "Adidas T-shirt",
        price: 30,
        colors: [
            { code: "black", img: "./img/adidas.png" },
            { code: "white", img: "./img/adidaswhite.png" },
        ],
    },
    {
        id: 4,
        title: "Polo T-shirt",
        price: 40,
        colors: [
            { code: "green", img: "./img/polo.png" },
            { code: "white", img: "./img/polowhite.png" },
        ],
    },
];

let choosenProduct = products[0];
let selectedColor = 0;
let selectedSize = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ============================================
// DOM ELEMENTS
// ============================================

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const addToCartButton = document.querySelector(".addToCartButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const cartIcon = document.querySelector(".cartIcon");
const cartModal = document.querySelector(".cartModal");
const closeCart = document.querySelector(".closeCart");
const cartBadge = document.querySelector(".cartBadge");
const searchInput = document.querySelector(".searchInput");
const toast = document.querySelector(".toast");

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PRODUCT SLIDER & SELECTION
// ============================================

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        selectedColor = 0;
        updateProductDisplay();
    });
    
    // Keyboard support
    item.addEventListener("keypress", (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
        }
    });
});

function updateProductDisplay() {
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    
    // Add transition effect
    currentProductImg.classList.add('changing');
    setTimeout(() => {
        currentProductImg.src = choosenProduct.colors[selectedColor].img;
        currentProductImg.classList.remove('changing');
    }, 150);

    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        color.classList.toggle('selected', index === selectedColor);
    });
}

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        selectedColor = index;
        currentProductColors.forEach(c => c.classList.remove('selected'));
        color.classList.add('selected');
        
        currentProductImg.classList.add('changing');
        setTimeout(() => {
            currentProductImg.src = choosenProduct.colors[index].img;
            currentProductImg.classList.remove('changing');
        }, 150);
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
        selectedSize = size.textContent;
    });
});

// ============================================
// CART FUNCTIONALITY
// ============================================

function addToCart() {
    if (!selectedSize) {
        showToast('Please select a size', 'error');
        return;
    }

    const cartItem = {
        id: Date.now(),
        productId: choosenProduct.id,
        title: choosenProduct.title,
        price: choosenProduct.price,
        color: choosenProduct.colors[selectedColor].code,
        image: choosenProduct.colors[selectedColor].img,
        size: selectedSize,
        quantity: 1
    };

    // Check if same product with same color and size exists
    const existingItem = cart.find(item => 
        item.productId === cartItem.productId && 
        item.color === cartItem.color && 
        item.size === cartItem.size
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    showToast('Added to cart!', 'success');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    showToast('Removed from cart', 'success');
}

function renderCart() {
    const cartItems = document.querySelector('.cartItems');
    const totalPrice = document.querySelector('.totalPrice');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="emptyCart">Your cart is empty</p>';
        totalPrice.textContent = '$0';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `$${total}`;

    cartItems.innerHTML = cart.map(item => `
        <div class="cartItem">
            <img src="${item.image}" alt="${item.title}">
            <div class="cartItemDetails">
                <h4>${item.title}</h4>
                <p>Color: ${item.color} | Size: ${item.size}</p>
                <p>Qty: ${item.quantity}</p>
            </div>
            <span class="cartItemPrice">$${item.price * item.quantity}</span>
            <button class="removeItem" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

function openCart() {
    renderCart();
    cartModal.classList.add('active');
}

function closeCartModal() {
    cartModal.classList.remove('active');
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

const handleSearch = debounce((searchTerm) => {
    searchTerm = searchTerm.toLowerCase().trim();
    
    if (!searchTerm) {
        return;
    }

    const matchedProduct = products.find(p => 
        p.title.toLowerCase().includes(searchTerm)
    );

    if (matchedProduct) {
        const index = products.indexOf(matchedProduct);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        selectedColor = 0;
        updateProductDisplay();
        showToast(`Found: ${matchedProduct.title}`, 'success');
    } else {
        showToast('Product not found', 'error');
    }
}, 500);

searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch(e.target.value);
    }
});

// ============================================
// PAYMENT MODAL & VALIDATION
// ============================================

const payInputs = document.querySelectorAll('.payInput');

function validateInput(input) {
    const value = input.value.trim();
    const placeholder = input.placeholder.toLowerCase();

    if (!value) {
        input.classList.add('error');
        input.classList.remove('success');
        return false;
    }

    if (placeholder.includes('card number')) {
        // Basic card number validation (16 digits)
        const isValid = /^\d{16}$/.test(value.replace(/\s/g, ''));
        input.classList.toggle('error', !isValid);
        input.classList.toggle('success', isValid);
        return isValid;
    }

    if (placeholder.includes('phone')) {
        const isValid = /^[\d\s+\-()]+$/.test(value);
        input.classList.toggle('error', !isValid);
        input.classList.toggle('success', isValid);
        return isValid;
    }

    if (placeholder.includes('cvv')) {
        const isValid = /^\d{3,4}$/.test(value);
        input.classList.toggle('error', !isValid);
        input.classList.toggle('success', isValid);
        return isValid;
    }

    input.classList.remove('error');
    input.classList.add('success');
    return true;
}

payInputs.forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => {
        if (input.classList.contains('error') || input.classList.contains('success')) {
            validateInput(input);
        }
    });
});

// ============================================
// EVENT LISTENERS
// ============================================

addToCartButton.addEventListener("click", addToCart);

productButton.addEventListener("click", () => {
    if (!selectedSize) {
        showToast('Please select a size', 'error');
        return;
    }
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

cartIcon.addEventListener("click", openCart);
cartIcon.addEventListener("keypress", (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCart();
    }
});

closeCart.addEventListener("click", closeCartModal);

cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

document.querySelector('.checkoutButton').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Cart is empty', 'error');
        return;
    }
    closeCartModal();
    payment.style.display = "flex";
});

document.querySelector('.payButton').addEventListener('click', (e) => {
    e.preventDefault();
    
    const allValid = Array.from(payInputs).every(input => validateInput(input));
    
    if (allValid) {
        showToast('Order placed successfully!', 'success');
        setTimeout(() => {
            payment.style.display = "none";
            cart = [];
            saveCart();
            payInputs.forEach(input => {
                input.value = '';
                input.classList.remove('success', 'error');
            });
        }, 1500);
    } else {
        showToast('Please fill all fields correctly', 'error');
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature, .galleryItem').forEach(el => {
    observer.observe(el);
});

// ============================================
// INITIALIZATION
// ============================================

updateCartBadge();
currentProductColors[0].classList.add('selected');
