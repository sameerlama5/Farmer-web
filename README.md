# Farmer Web Application

A comprehensive web platform connecting farmers (vendors) directly with customers, facilitating the purchase of fresh agricultural products. The platform features a multi-role authentication system with specific capabilities for customers, vendors, and administrators.

## Features

### User Roles

1. **Customer**
   - Can register and login immediately
   - Browse and purchase products
   - Manage their profile
   - View order history

2. **Vendor (Farmer)**
   - Requires admin approval for account activation
   - Can list and manage products
   - Handle orders and inventory
   - Update profile and business information

3. **Admin**
   - Manage all users and vendors
   - Approve/reject vendor registrations
   - Monitor transactions
   - System configuration

## Authentication System

### Registration Fields
All users need to provide the following information:

- Full Name
- Email Address
- Phone Number
- Password
- Role Selection (Customer/Vendor(Farmer))

### Role-specific Process

#### Customer Registration
- Instant access upon registration
- No approval required
- Can immediately start shopping

#### Vendor Registration
- Initial registration with business details(in future)
- Pending status until admin approval
- Email notification upon approval/rejection

#### Admin
- Super-user access
- Pre-configured accounts
- Complete system access

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Database (MongoDB)

### Installation

1. Clone the repository
```bash
git clone https://github.com/sameerlama5/Farmer-web.git
cd Farmer-web
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

4. Run the development server
```bash
npm i express
npm run dev
```