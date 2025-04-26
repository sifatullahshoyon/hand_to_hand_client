# HandToHand 🛒

_A Marketplace for Buying & Selling Used Items_

Welcome to the **HandToHand** web application — a modern, user-friendly platform designed to make buying and selling used products seamless, secure, and efficient.

## 🔗 Live Preview

[Visit Live Site](https://hand-to-hand-frontend.vercel.app/)

---

## 📌 Project Overview

SecondHand is a full-stack marketplace application where users can:

- Post listings for used items
- Browse products with advanced search and filters
- Communicate with sellers
- Manage their sales, purchases, and profile

Users can both buy and sell items using a **single unified role**. Additionally, there's an **admin panel** for moderation and management.

---

## 🚀 Features

### 👤 User Features

- Custom authentication using email/phone & password
- JWT-based secure login system
- Bcrypt password hashing
- Personal dashboard with:
  - ✅ Add, edit, and delete listings
  - 📦 View purchase & sales history
  - ❤️ Wishlist items
  - 🧾 Manage personal profile

### 🛍️ Product Listings

- Add items with images, condition, price & category
- Advanced search and filtering
- Mark items as sold

### 📩 Communication

- Buyer-Seller messaging system

### 🛠️ Admin Features

- Ban/unban users
- Delete or review listings

---

## ⚙️ Tech Stack

### Frontend:

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Axios / React Query**
- **JWT**

### Backend:

> Hosted separately

- **Express.js**
- **MongoDB**
- **JWT & bcrypt**

---

## 🗂️ Project Structure

secondhand-client/
├── public/ # Static files
├── src/
│ ├── components/ # Reusable components
│ ├── contexts/ # React contexts
│ ├── hooks/ # Custom hooks
│ ├── lib/ # Utility functions
│ ├── pages/ # Next.js pages
│ │ ├── api/ # API routes (if using Next.js API)
│ │ ├── dashboard/ # User dashboard pages
│ │ ├── products/ # Product-related pages
│ │ ├── \_app.tsx # Main app component
│ │ └── index.tsx # Home page
│ ├── styles/ # Global styles
│ ├── types/ # TypeScript type definitions
│ └── utils/ # Utility functions
├── .env.local # Environment variables
├── next.config.js # Next.js configuration
├── package.json # Project dependencies
└── tsconfig.json # TypeScript configuration

---

## 🧪 Available Routes

### Public:

- `/` – Home
- `/login` – Login/Register
- `/products` – Browse all listings

### Authenticated Users:

- `/dashboard` – Overview
- `/dashboard/listing` – Manage your items
- `/dashboard/purchase-history` – View purchases
- `/dashboard/sales-history` – View sales
- `/dashboard/profile` – Manage profile
- `/messages` – Chat with sellers

### Admin (Optional):

- `/dashboard/admin` – Admin panel
- `/dashboard/admin/user-management`
- `/dashboard/admin/listings`

---

## 📸 Screenshots

> (https://i.ibb.co.com/395HCQ8V/hand-to-hand-frontend-vercel-app-1.png)

---

## 🧑‍💻 Setup & Installation

1. **Clone the Repository**

```bash
git clone https://github.com/sifatullahshoyon/hand_to_hand_client.git
cd hand_to_hand_client
```
