# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Clots is a vanilla JavaScript e-commerce website for clothing (t-shirts). It's a static, single-page application with no build system or external dependencies beyond Google Fonts.

## Architecture

### Core Structure
- **index.html**: Single HTML file containing the entire page structure with navigation, product slider, product details section, payment modal, gallery, and footer
- **app.js**: Vanilla JavaScript handling all interactivity - product switching, color/size selection, and payment modal display
- **style.css**: All styling including responsive design with mobile breakpoint at 480px
- **img/**: Static image assets for products, icons, and branding

### Key Components

**Product Management**
- Products array in `app.js` (lines 4-66) defines all available products with id, title, price, and color variants
- Each product has 2 color options with corresponding image paths
- Selected product state tracked via `choosenProduct` variable

**Interactive Elements**
- Menu items (RIBRAVE, PUMA, ADIDAS, POLO) trigger slider navigation and update product details
- Slider uses CSS transform (`translateX`) for horizontal scrolling between products
- Color selectors dynamically update product image
- Size selectors toggle visual selection state (black background for selected)
- Payment modal triggered by "BUY NOW" button, closed via X button

**Responsive Design**
- Mobile-first styles in media query starting at line 390 of `style.css`
- Mobile view: vertical layout, hidden elements (search, gallery, slider title), adjusted component sizing

## Development

### Running the Site
Open `index.html` directly in a browser - no server or build step required.

### Testing Changes
Refresh the browser after editing HTML, CSS, or JS files. Use browser DevTools for debugging JavaScript and inspecting CSS.

### Image Assets
All images must be placed in the `img/` directory. Product images follow naming convention: `{brand}.png` and `{brand}{color}.png` (e.g., `Puma.png`, `Pumablue.png`).

## Code Patterns

- **Event Listeners**: All interactive elements use `addEventListener` with arrow functions
- **DOM Queries**: Elements cached at top of script after products array (lines 70-74)
- **Styling Updates**: Direct style manipulation via `.style` property, not class toggling
- **Product Updates**: When menu item clicked, all product details (title, price, image, colors) update simultaneously
