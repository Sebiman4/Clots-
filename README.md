# Clots - E-Commerce Clothing Store

<div align="center">
  <img src="./img/clots.png" alt="Clots Logo" width="200"/>
  <p><strong>A modern, fully-featured e-commerce website built with vanilla JavaScript</strong></p>
</div>

## 🌟 Live Demo

Open `index.html` in your browser to see the live demo!

## ✨ Features

### 🛒 Shopping Cart System
- **Persistent Cart**: Uses localStorage to save cart across sessions
- **Add to Cart**: Quick add with size and color selection
- **Real-time Updates**: Cart badge shows item count
- **Cart Management**: View, modify, and remove items from cart
- **Smart Quantity**: Automatically combines identical items

### 🎨 Interactive Product Display
- **Dynamic Slider**: Smooth horizontal navigation between products
- **Color Selection**: Visual color swatches with smooth image transitions
- **Size Options**: Interactive size selector with visual feedback
- **Product Switching**: Menu-driven product category navigation
- **Smooth Animations**: Fade and slide effects throughout

### 🔍 Smart Search
- **Debounced Search**: Efficient search with 500ms debounce
- **Instant Navigation**: Auto-scroll to matching products
- **Toast Notifications**: Visual feedback for search results

### ✅ Form Validation
- **Real-time Validation**: Instant feedback on input fields
- **Pattern Matching**: Validates card numbers, phone numbers, CVV
- **Visual States**: Success (green) and error (red) indicators
- **Smart Checkout**: Validates all fields before order placement

### 🎭 UX Enhancements
- **Toast Notifications**: Success and error messages with auto-dismiss
- **Modal System**: Elegant cart and payment modals
- **Hover Effects**: Interactive buttons and elements
- **Scroll Animations**: Fade-in effects for features and gallery items
- **Keyboard Navigation**: Full keyboard support for accessibility

### ♿ Accessibility
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Support**: Tab navigation and Enter/Space activation
- **Focus States**: Clear visual focus indicators
- **Semantic HTML**: Proper use of HTML5 semantic elements

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint at 480px**: Adaptive layout for different screen sizes
- **Touch-Friendly**: Large, easy-to-tap interactive elements

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with animations, transitions, and flexbox
- **Vanilla JavaScript**: ES6+ features, no frameworks or libraries
- **LocalStorage API**: Persistent cart storage
- **Intersection Observer API**: Scroll animations
- **Google Fonts**: Belanosima font family

## 📁 Project Structure

```
Clots-/
├── index.html          # Main HTML file with all page structure
├── style.css           # Complete styling including responsive design
├── app.js             # All JavaScript logic and interactivity
├── img/               # Product images and icons
│   ├── clots.png
│   ├── Ribrave.png
│   ├── Puma.png
│   ├── adidas.png
│   ├── polo.png
│   └── ...
├── README.md          # Project documentation
└── WARP.md           # Development guidelines
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Clots-
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # No build process or server required!
   ```

3. **Start exploring**
   - Browse products using the menu
   - Try the search functionality
   - Add items to cart
   - Test the checkout process

## 💡 Key Implementation Highlights

### State Management
```javascript
// Simple but effective state management
let choosenProduct = products[0];
let selectedColor = 0;
let selectedSize = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
```

### Debounced Search
```javascript
const handleSearch = debounce((searchTerm) => {
    // Efficient search implementation
}, 500);
```

### Form Validation
```javascript
function validateInput(input) {
    // Real-time validation with regex patterns
    // Visual feedback with success/error states
}
```

### Scroll Animations
```javascript
const observer = new IntersectionObserver((entries) => {
    // Fade-in animation when elements enter viewport
});
```

## 🎯 Features Showcase

### Cart System
- ✅ Add/Remove items
- ✅ Persistent storage (localStorage)
- ✅ Quantity management
- ✅ Real-time total calculation
- ✅ Visual cart badge

### User Experience
- ✅ Smooth transitions and animations
- ✅ Toast notifications for feedback
- ✅ Loading states and visual cues
- ✅ Keyboard navigation support
- ✅ Responsive design

### Code Quality
- ✅ Well-organized and commented
- ✅ ES6+ JavaScript features
- ✅ No external dependencies
- ✅ Modular function structure
- ✅ Performance optimizations (debouncing, event delegation)

## 🎨 Design Features

- Custom color schemes for each brand
- Smooth slider transitions
- Interactive hover effects
- Professional modal designs
- Clean, modern typography
- Consistent spacing and alignment

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with sidebar product details
- **Mobile (<480px)**: Vertical stack layout, optimized navigation

## 🔮 Future Enhancements

- [ ] Product filtering by price/brand
- [ ] User authentication
- [ ] Backend integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Payment gateway integration

## 📝 What I Learned

- Building a complete e-commerce flow without frameworks
- Implementing persistent state with localStorage
- Creating smooth animations with CSS and JavaScript
- Form validation patterns and user feedback
- Accessibility best practices
- Responsive design techniques
- Code organization in vanilla JavaScript

## 👨‍💻 Development

This project demonstrates:
- Strong understanding of vanilla JavaScript
- Modern CSS techniques (flexbox, animations, transitions)
- UX/UI design principles
- Performance optimization
- Accessibility standards
- Code organization and maintainability

## 📄 License

This project is open source and available for portfolio purposes.

## 🤝 Contributing

This is a portfolio project, but suggestions are welcome!

---

<div align="center">
  <p>Built with ❤️ using Vanilla JavaScript</p>
  <p>No frameworks. No libraries. Just pure web development skills.</p>
</div>
