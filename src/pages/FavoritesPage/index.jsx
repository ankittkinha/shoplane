import React from 'react';
import Navbar from "../../components/Navbar";
import { useSelector } from 'react-redux';
import FavProduct from '../../components/FavProduct';
import EmptyFavorites from '../../components/EmptyFavorites';

export default function FavoritesPage() {

  const products = useSelector(state => state.favorites.favorites)

  return (
    <div>
      <div className='row'>
        {
          (products.length !== 0) ? products.map(item => <FavProduct key={item.id} data={item} />) : <EmptyFavorites />
        }
      </div>


    </div>
  )
}
