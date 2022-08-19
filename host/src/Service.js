export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
     resolve([
        {
          name: 'Product 1',
        },
        {
          name: 'Product 2',
        }
      ]) 
    }, 300);
  })
}
