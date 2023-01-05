import React from 'react';
import {Route,Routes as ReactDomRoutes} from 'react-router-dom';
import {Home} from '../pages/Home/Home.jsx';
import {Products} from '../pages/Products/Products.jsx';
import {Error404} from '../components/Error404/Error404.jsx';

export const Routes = () => {
  return (
    <ReactDomRoutes>
      {/* Home: Vista de la portada + algunas cositas que se agreguen (ventajas de comprar en Perfarm) */}
      <Route path='/' element={<Home />} />
      {/* Products: Vista de los productos + filtros de busqueda*/}
      <Route path='/productos' element={<Products />} />
      {/* ruta del error 404*/}
      <Route path='*' element={<Error404 />} />
    </ReactDomRoutes>
  )
}
