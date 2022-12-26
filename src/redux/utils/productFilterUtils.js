
//cuando se habiliten las categorias de productos
export const filterProductsByCategory = (productList, category) => {
  return category ? 
  productList.filter(product => product.category === category):
  productList;
}

export const sortProductsByParameter = (filterValue, products) => {
  switch(filterValue){
    case "Precio descendente":
      return products.sort((a,b) => a.price < b.price ? 1 : -1)
    case "Precio ascendente":
      return products.sort((a,b) => a.price > b.price ? 1 : -1)
    case "Nombre ascendente":
      return products.sort((a,b) => a.name < b.price ? 1 : -1)
    case "Nombre descendente":
      return products.sort((a,b) => a.name > b.price ? 1 : -1)
    default:
      return products;
  }
}

export const filterProductsByPrice = (filterValues, products) => {
  switch(filterValues){
    case "Menos de $2000":
      return products.filter(product => product.price <= 2000);
    case "Entre $2000 y $5000":
      return products.filter(product => product.price >=2000 && product.price <=10000);
    case "Entre $10000 y $20000":
      return products.filter(product => product.price >= 10000 && product.price <=20000);
    case "Mas de $20000": 
      return products.filter(product => product.price >= 20000);
    default:
      return products;
  }
}

export const filterProductsByStock = (filterValues, products) => {
  switch(filterValues){
    case "En Stock":{
      return products.filter(product => product.stock > 0);
    }
    case "Sin Stock":{
      return products.filter(product => product.stock === 0);
    }
    default:
      return products;
  }
}

export const filterProductsByShippingCost = (filterValues, products) => {
  switch(filterValues){
    case "Envío gratuito":{
      return products.filter(product => product.free_shipping === true);
    }
    case "Envío con cargo":{
      return products.filter(product => product.free_shipping === false);
    }
    default:
      return products
  }
}

export const filterProductByBrand = (filterValues, products) => {
  return products.filter(product => product.brand === filterValues);
}

export const filterProducts = (filterValues, products) => {
  let productList = [...products]; //genero una copia de los productos
  productList = sortProductsByParameter(filterValues.sort, productList);
  productList = filterProductsByPrice(filterValues.price, productList);
  productList = filterProductsByStock(filterValues.stock, productList);
  productList = filterProductsByShippingCost(filterValues.shipping, productList);
  productList = filterProductByBrand(filterValues.brand, productList);
  return productList;
}

