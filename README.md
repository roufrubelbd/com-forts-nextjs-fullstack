🛍️ COMFORTS — Full-Stack Product ManagementCOMFORTS is a high-end, full-stack e-commerce management platform designed with a modern Glassmorphism aesthetic. It provides a seamless experience for managing product inventories with a permanent, premium dark-themed interface.

🔗 Live Demo: Visit COMFORTS

✨ Key Features
🌑 Always Dark UI: A premium, high-contrast dark theme powered by DaisyUI and Tailwind v4.
🔐 NextAuth Integration: Secure authentication via Google OAuth and Credentials provider.
📦 Inventory Management: Full CRUD (Create, Read, Update, Delete) functionality for products.
📱 Responsive Grid: Advanced layout (Mobile: 2 cols, Tablet: 3 cols, Desktop: 5 cols).
🔍 Real-time Filtering: Search and filter products by category or title.
💎 Modern UX: Glassmorphism effects, backdrop blurs, and Lucide icon integration.🛠️ Tech StackFrontendFramework: Next.js 15+ (App Router)Styling: Tailwind CSS v4 + DaisyUI (Dark Mode)Auth: NextAuth.jsIcons: Lucide React & React IconsFeedback: React Hot Toast & SweetAlert2BackendServer: Node.js & Express.jsDatabase: MongoDB Atlas (Mongoose/MongoDB Native)Deployment: Vercel (Frontend & Backend)

🚀 Getting Started

1️⃣ Clone the RepositoryBashgit clone https://github.com/roufrubelbd/comforts_products_management_client.git
cd comforts_products_management_client

2️⃣ Frontend ConfigurationNavigate to the client folder and install dependencies:Bashnpm install

Create a .env.local file in the root directory:Code snippet# NextAuth Configuration

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API Connection
NEXT_PUBLIC_API_URL=http://localhost:5000

3️⃣ Backend ConfigurationNavigate to the backend folder and install dependencies:Bashcd backend
npm install

Create a .env file in the backend directory:Code snippetMONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

📂 Project StructurePlaintextcomforts/
├── src/
│   ├── app/                # Next.js App Router (v15+)
│   │   ├── api/auth/       # NextAuth Route Handlers
│   │   ├── products/       # Dynamic Product Catalog & Details
│   │   └── layout.js       # Forced Dark Theme Config
│   ├── components/         # Reusable UI (Logo, Navbar, Footer)
│   └── lib/                # Database & Auth Configurations
└── backend/
    ├── index.js            # Express Server
    └── .env                # Backend Secrets


🛡️ API Endpoints SummaryMethodEndpointDescriptionGET/productsFetch all products with search/filterGET/products/:idFetch detailed single product dataPOST/addCreate a new product (Protected)PATCH/products/:idUpdate product detailsDELETE/products/:idRemove product from database🎨 Global Styles (Permanent Dark Mode)To ensure the premium look, the project uses the following DaisyUI configuration:HTML<html lang="en" data-theme="dark">
  <body className="bg-base-100 text-white">
    {children}
  </body>
</html>

🤝 ContributingFork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request📜 LicenseDistributed under the MIT License. See LICENSE for more information.Developed with ❤️ by Rouf Rubel