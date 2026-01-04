// Initialize cart from localStorage
let cartCount = localStorage.getItem('cartCount') || 0;

// Update cart display on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count display
    const cartDisplays = document.querySelectorAll('#cartCount');
    cartDisplays.forEach(display => {
        display.textContent = cartCount;
    });

    // Add to cart buttons
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            
            // Update all cart displays
            cartDisplays.forEach(display => {
                display.textContent = cartCount;
            });
            
            // Show feedback
            alert('Item added to cart!');
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Save theme preference
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Set greeting and date on homepage
    const greeting = document.getElementById('greeting');
    const dateDisplay = document.getElementById('dateDisplay');
    
    if (greeting) {
        const hour = new Date().getHours();
        if (hour < 12) greeting.textContent = "Good Morning!";
        else if (hour < 18) greeting.textContent = "Good Afternoon!";
        else greeting.textContent = "Good Evening!";
    }
    
    if (dateDisplay) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options);
    }
});

// Contact form validation
function validateForm() {
    const email = document.getElementById('email');
    if (email && !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Check all required fields
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    for (let input of inputs) {
        if (!input.value.trim()) {
            alert('Please fill in all required fields.');
            input.focus();
            return false;
        }
    }
    
    alert('Message sent successfully!');
    return true;
}