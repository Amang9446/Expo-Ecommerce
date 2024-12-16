# React Native E-commerce App

A modern e-commerce application built with React Native, Expo, and TypeScript. This app provides a seamless shopping experience across mobile and web platforms.

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 20px;">

### Login Screen
<img src="https://res.cloudinary.com/drzv3bviq/image/upload/v1734372553/kn9ygpefcms3jwgecehp.png" width="250" alt="Login Screen">

### Shop Screen
<img src="https://res.cloudinary.com/drzv3bviq/image/upload/v1734372554/vx6nirmnnybglbztaxrd.png" width="250" alt="Shop Screen">

### Product Screen
<img src="https://res.cloudinary.com/drzv3bviq/image/upload/v1734372553/zmb09s0pef8bhw1ylxxo.png" width="250" alt="Product Screen">

### Cart Screen
<img src="https://res.cloudinary.com/drzv3bviq/image/upload/v1734372554/idudnrpnf84dwgy6btfb.png" width="250" alt="Cart Screen">

</div>

## Features

- 🛍️ Product browsing and shopping cart functionality
- 🔐 User authentication
- 📱 Responsive design with mobile-first approach
- 🎨 Customizable UI components with GlueStack UI
- 🔄 State management with Zustand
- 📊 Data fetching with TanStack Query

## Tech Stack

- [Expo](https://expo.dev/) - Development platform
- [React Native](https://reactnative.dev/) - Mobile framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [TanStack Query](https://tanstack.com/query) - Data fetching
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [GlueStack UI](https://gluestack.io/) - UI component library

## Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn package manager
- Expo CLI

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecommerce


2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Project Structure

├── app/ # App screens and navigation
├── components/ # Reusable UI components
├── store/ # State management
├── api/ # API integration
├── assets/ # Static assets

## Environment Variables

Create a `.env` file in the root directory with the following variables:

env
EXPO_PUBLIC_API_URL=your_api_url


## Building for Production

To create a production build:
For more information about deployment, refer to the [Expo documentation](https://docs.expo.dev/build/introduction/).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
