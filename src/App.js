import HomePage from './pages/HomePage';
import { useRoutes, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDetailspage from './pages/ProductDetailsPage';
import ProductsList from './components/ProductsList';
import ProductsPage from './pages/ProductsCategoryPage';
import ProductsCategoryPage from './pages/ProductsCategoryPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import { useEffect, useState } from 'react';
import NotFoundPage from './pages/NotFoundPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {

    

  return (
    <div className="mx-5">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/products/:category" element={<ProductsCategoryPage/>} />
        <Route path="/productdetails/:id" element={<ProductDetailspage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/reset" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
