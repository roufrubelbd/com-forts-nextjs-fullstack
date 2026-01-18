# 🛍️ COMFORTS — Full-Stack Product Management

COMFORTS is a high-end, full-stack e-commerce management platform designed with a modern Glassmorphism aesthetic. It provides a seamless experience for managing product inventories with a permanent, premium dark-themed interface.

## 🔗 Live Demo: [https://com-forts-nextjs-fullstack.vercel.app]

## ✨ Key Features
🌑 Always Dark UI: A premium, high-contrast dark theme powered by DaisyUI and Tailwind v4.
🔐 NextAuth Integration: Secure authentication via Google OAuth and Credentials provider.
📦 Inventory Management: Full CRUD (Create, Read, Update, Delete) functionality for products.
📱 Responsive Grid: Advanced layout (Mobile: 2 cols, Tablet: 3 cols, Desktop: 5 cols).
🔍 Real-time Filtering: Search and filter products by category or title.
💎 Modern UX: Glassmorphism effects, backdrop blurs, and Lucide icon integration.

# 🛠️ Tech Stack
Frontend and Backend: Next.js 15+ (App Router)
Styling: Tailwind CSS v4 + DaisyUI (Dark Mode)
Auth: NextAuth.js
Icons: Lucide React & React Icons
Feedback: React Hot Toast & SweetAlert2
Database: MongoDB Atlas
Deployment: Vercel

## 🚀 Getting Started

1️⃣ Clone the Repository : [https://github.com/roufrubelbd/com-forts-nextjs-fullstack]
cd comforts

2️⃣ Frontend ConfigurationNavigate to the client folder and install dependencies: Bash npm install

Create a .env.local file in the root directory:Code snippet# NextAuth Configuration

NEXTAUTH_URL=[https://your-public-url/api/auth/callback/google]
NEXTAUTH_SECRET=your_random_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API Connection
NEXT_PUBLIC_API_URL=[https://com-forts-nextjs-fullstack.vercel.app]


# 📂 Project Structure Plaintext comforts/
── src/
   ├── app/                # Next.js App Router (v15+)
   │   ├── api/auth/       # NextAuth Route Handlers
   │   ├── products/       # Dynamic Product Catalog & Details
   │   └── layout.js       # Forced Dark Theme Config
   ├── components/         # Reusable UI (Logo, Navbar, Footer)
   └── lib/                # Database & Auth Configurations



# 🛡️ API Endpoints SummaryMethodEndpointDescription
GET/productsFetch all products with search/filter
GET/products/:idFetch detailed single product data
POST/addCreate a new product (Protected)
PATCH/products/:idUpdate product details
DELETE/products/:idRemove product from database

# 🎨 Global Styles (Permanent Dark Mode)
To ensure the premium look, the project uses the following DaisyUI configuration:HTML<html lang="en" data-theme="dark">
  <body className="bg-base-100 text-white">
    {children}
  </body>
</html>

# Developed with ❤️ by Rouf Rubel