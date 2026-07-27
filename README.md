# 🛒 OurMart E-Commerce

A modern and responsive E-Commerce web application built with **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **FakeStore API**. This project demonstrates modern React development practices including state management, routing, reusable components, API integration, loading skeletons, and responsive UI.

---

## 🚀 Live Demo

```
https://redux-mini-hackthone.vercel.app/
```


## ✨ Features

- 🏠 Responsive Home Page
- 📦 Products Listing
- 🔍 Product Details Page
- 👤 User Details Page
- 🛒 Shopping Cart using Redux Toolkit
- ➕ Increase Product Quantity
- ➖ Decrease Product Quantity
- ❌ Remove Product from Cart
- 🗑️ Clear Cart
- 💰 Total Price Calculation
- ⚡ Loading Skeleton UI
- 📱 Fully Responsive Design
- ✅ Fake Checkout Success Page
- 🔄 Dynamic Routing
- 🌐 API Integration using Axios

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- React Redux
- Tailwind CSS
- Axios
- Lucide React

### API

- FakeStore API

---

## 📂 Folder Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── CartSlice.js
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductCardSkeleton.jsx
│   ├── UserCard.jsx
│   ├── UserCardSkeleton.jsx
│   └── UserDetailsSkeleton.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── ProductPage.jsx
│   ├── ProductDetails.jsx
│   ├── UserDetails.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   └── AboutPage.jsx
│
├── layout/
│   └── MainLayout.jsx
│
├── routes/
│
└── main.jsx
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/fakestore-ecommerce.git
```

Go to project folder

```bash
cd fakestore-ecommerce
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

## 🌍 API Endpoints

### Products

```
https://fakestoreapi.com/products
```

### Product Details

```
https://fakestoreapi.com/products/:id
```

### Users

```
https://fakestoreapi.com/users
```

### User Details

```
https://fakestoreapi.com/users/:id
```

---

## 🛒 Cart Management (Redux Toolkit)

The cart is fully managed using **Redux Toolkit**.

Implemented reducers:

- addToCart()
- removeFromCart()
- increaseQuantity()
- decreaseQuantity()
- clearCart()

---

## 📱 Pages

- Home
- Products
- Product Details
- Cart
- User Details
- About
- Checkout Success

---

## 🎯 Learning Objectives

This project helped me learn:

- React Components
- React Hooks
- React Router
- Nested Routing
- Dynamic Routing
- Redux Toolkit
- Global State Management
- API Integration
- Axios
- Skeleton Loading UI
- Reusable Components
- Responsive Design
- Tailwind CSS Best Practices

---

## 🚀 Future Improvements

- Authentication
- Wishlist
- Search Products
- Filter & Sort
- Category Pages
- Payment Gateway Integration
- Order History
- Dark Mode
- Local Storage Persistence
- Backend Integration

---

## 👨‍💻 Author

**Krishna Gupta**

GitHub: https://github.com/your-github

LinkedIn: https://linkedin.com/in/your-linkedin

---

## ⭐ Support

If you like this project, don't forget to give it a ⭐ on GitHub.