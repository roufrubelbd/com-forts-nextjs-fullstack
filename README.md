# Comforts — Full-Stack Product Management Website

A full-stack web application built with **Next.js (frontend)** and **Express.js + MongoDB (backend)** for managing products.  
Includes authentication, product creation, editing, deletion, and responsive UI design.

Website live link: https://comforts-products-management-fullst.vercel.app

---

## Tech Stack

### **Frontend**

- ✔ Next.js 16.04 (App Router)
- ✔ React 19
- ✔ Tailwind CSS + DaisyUI
- ✔ NextAuth (Google + Credentials)
- ✔ React Hot Toast
- ✔ SweetAlert2
- ✔ Deployed on Vercel

### **Backend**

- ✔ Node.js
- ✔ Express.js
- ✔ MongoDB / MongoDB Atlas
- ✔ CORS / JSON middleware
- ✔ Deployed on Vercel

---

## Features

- ✔ User authentication (NextAuth)
- ✔ Add new products
- ✔ Edit existing products
- ✔ Delete products
- ✔ Dynamic product detail pages
- ✔ Fully responsive UI (mobile-first)
- ✔ Backend API connected with MongoDB Atlas

---

# Setup & Installation

## **1️⃣ Clone the Project**

```sh
git clone https://github.com/roufrubelbd/comforts_products_management_client.git
cd comforts_products_management_client


2️⃣ Frontend Setup (Next.js)
Go into comforts_products_management_client folder:
cd comforts_products_management_client
npm install

Create .env.local
NEXTAUTH_SECRET=your-secret
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Backend API URL (local)
NEXT_PUBLIC_API_URL=http://localhost:5000

Start frontend
npm run dev


Frontend runs at:

http://localhost:3000

3️⃣ Backend Setup (Express + MongoDB)
Go into backend folder:
cd backend
npm install

Create .env in backend
MONGO_URI=your-mongo-atlas-url
PORT=5000

Start backend
node index.js


Backend runs at:

http://localhost:5000

🔗 API Route Summary (Backend)
Products
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get single product by ID
POST	/add	Add new product
PATCH	/products/:id	Update product
DELETE	/products/:id	Delete product
Auth (frontend)
Method	Endpoint	Description
GET	/api/signin	Login page
GET	/api/signout	Logout
GET	/api/auth/session	NextAuth session
🌐 Deployment
Frontend Deployment (Vercel)

Push code to GitHub

Import project into Vercel

Add NEXT_PUBLIC_API_URL pointing to your backend

Deploy

Backend URL example:

https://comfortsproductsmanagementwebsitese.vercel.app

Backend Deployment (Vercel)

Upload backend folder to GitHub

Create new Web Service

Set Build Command:

npm install


Set Start Command:

node index.js


Add Environment Variables

Deploy

You will get a live URL like:

https://comfortsproductsmanagementwebsitese.vercel.app


Use this URL in Next.js:

NEXT_PUBLIC_API_URL=https://comfortsproductsmanagementwebsitese.vercel.app

📁 Project Structure
comforts/
│
├── frontend/          # Next.js frontend
│   ├── app/
│                   └──  api/auth  # NextAuth
│   ├── components/
│                               └── public/
│
└── backend/           # Express.js backend
    ├── index.js
    └── .env

🙌 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you’d like to improve.
```
