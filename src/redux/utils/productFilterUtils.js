
const getProductsByCategory = (productList, category) => {
  return category ? 
  productList.filter(product => product.category === category):
  productList;
}

export const sortProductsByParameter = (value, products) => {
  switch(value){
    case "Precio mayor a menor":{
      return products.sort((a,b) => a.price < b.price ? 1 : -1)
    }
    case "Precio menor a mayor":{
      return products.sort((a,b) => a.price > b.price ? 1 : -1)
    }
    case "Nombre ascendente":{
      return products.sort((a,b) => a.name < b.price ? 1 : -1)
    }
    case "Nombre descendente":{
      return products.sort((a,b) => a.name > b.price ? 1 : -1)
    }
  }
}