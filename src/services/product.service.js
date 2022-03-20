export const GetFeatured = (products) => {
  let product1 = products[0];
  let product2 = products[1];
  let product3 = products[2];
  let product4 = products[3];
  console.log(product1);
  let tmp = [];
  tmp.push(product1);
  tmp.push(product2);
  tmp.push(product3);
  tmp.push(product4);
  console.log(tmp);
  return tmp;
};

export const GetNewArrival = (products) => {
  let prod = [];
  return prod;
};
