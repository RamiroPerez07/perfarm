export const addProduct = (cartProducts, newProduct) => {

  //verifico si el producto esta en el carrito, si lo encuentra me devuelve el objeto, sino retorna undefined
  const existingProductItem = cartProducts.find(cartProduct => cartProduct.id === newProduct.id);

  console.log("producto existente ==> ",existingProductItem);

  //si el producto existe adiciona la  cantidad = cantidad + 1
  if (existingProductItem){
    if (existingProductItem.quantity === existingProductItem.stock){
      alert(`Producto ${existingProductItem.name} fuera de stock!`);
      return [...cartProducts];
    } 
    return cartProducts.map(cartProduct => {
      return cartProduct.id === newProduct.id ? 
      {...cartProduct, quantity: cartProduct.quantity + 1 } : 
      cartProduct;
    } )
  }

  //si el producto no esta en el carrito, que devuelva todos los productos del carro + el producto nuevo con cantidad = 1
  return [...cartProducts, {...newProduct, quantity: 1}];
}

export const subtractProduct = (cartProducts, selectedProduct) => {

  if (selectedProduct.quantity === 1) {
    const updatedProducts = removeProduct(cartProducts, selectedProduct);
    return updatedProducts;
  }

  return cartProducts.map(cartProduct => {
    return (
      cartProduct.id === selectedProduct.id ?
      {...cartProduct, quantity: cartProduct.quantity - 1 } :
      cartProduct
    )
  });
}


export const removeProduct = (cartProducts, selectedProduct) => {
  const res = window.confirm(`¿Desea eliminar el producto ${selectedProduct.name} del carrito?`)
  if (res){
    const updatedProducts = cartProducts.filter(cartProduct => cartProduct.id !== selectedProduct.id);
    return updatedProducts;
  }
  return cartProducts;
}

export const removeAllProducts = (cartProducts) => {
  if (cartProducts.length === 0){
    alert("No hay productos en el carrito");
    return [];
  }
  const res = window.confirm('Desea eliminar todos los productos del carrito?');
  if (res) return [];
  return cartProducts;
}
