// ===== Navbar Toggle for Mobile =====
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ===== Smooth Scroll for Navigation Links =====
const navLinks = document.querySelectorAll("header nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    nav.classList.remove("active"); // Close mobile menu after click
  });
});

// ===== Newsletter Form Validation =====
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value.trim();
    if (email === "") {
      alert("Please enter your email.");
    } else {
      alert(`Thank you for subscribing with ${email}!`);
      newsletterForm.reset();
    }
  });
}

// ===== Cart Functionality =====
let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const cartIcon = document.getElementById("cart-icon");
const closeCart = document.getElementById("close-cart");

function updateCart() {
  if (!cartItems || !cartTotal || !cartCount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: ₹${total}`;
  cartCount.textContent = cart.length;
}

// Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".product-card .btn");

addToCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const productCard = button.closest(".product-card");
    if (!productCard) return;

    const productName = productCard.querySelector("h3").innerText;
    const productPrice = parseInt(
      productCard.querySelector(".price").innerText.replace("₹", "")
    );

    cart.push({ name: productName, price: productPrice });
    updateCart();

    alert(`${productName} has been added to your cart!`);
  });
});

// Show Cart Modal
if (cartIcon && cartModal) {
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.style.display = "block";
  });
}

// Close Cart Modal
if (closeCart && cartModal) {
  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// ===== Testimonial Auto Slider =====
const testimonials = document.querySelectorAll(".testimonial-card");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? "block" : "none";
  });
}

if (testimonials.length > 0) {
  showTestimonial(currentTestimonial);

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000); // change every 5 seconds
}

// ===== Contact Form Alert =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset();
  });
}
