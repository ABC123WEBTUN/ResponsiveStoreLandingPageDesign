import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Search, 
  User, 
  Star, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      description: "Premium quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$299.99",
      originalPrice: "$399.99",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      description: "Feature-rich smartwatch with health monitoring capabilities"
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$49.99",
      originalPrice: "$79.99",
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      description: "Ergonomic aluminum laptop stand for better posture"
    },
    {
      id: 4,
      name: "Smartphone",
      price: "$699.99",
      originalPrice: "$899.99",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      description: "Latest smartphone with advanced camera system"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "$89.99",
      originalPrice: "$129.99",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      description: "Portable bluetooth speaker with rich, immersive sound"
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      description: "High-precision gaming mouse with customizable buttons"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">TechStore</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#products" className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200">
                Products
              </a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact
              </a>
            </nav>

            {/* Desktop Action Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
                  Home
                </a>
                <a href="#products" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
                  Products
                </a>
                <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
                  About
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">
                  Contact
                </a>
                <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-3 pt-3">
                  <button className="p-2 text-gray-700 hover:text-blue-600">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-blue-600">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-blue-600 relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      2
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tech Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find the latest gadgets and electronics at unbeatable prices. Quality products, fast shipping, and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of the best tech products available today
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <span className="ml-3 text-xl font-bold">TechStore</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for the latest technology and electronics. Quality products, competitive prices, exceptional service.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">support@techstore.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">123 Tech Street, Digital City</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TechStore. All rights reserved. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;