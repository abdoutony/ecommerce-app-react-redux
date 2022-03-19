export const GetFeatured = (products) => {
  let indexone = Math.floor(Math.random() * 10);
  let indextwo = Math.floor(Math.random() * 10);
  let indexthree = Math.floor(Math.random() * 10);
  let featured = products.filter(
    // (pr) => pr.id === indexone || pr.id === indextwo || pr.id === indexthree
    (pr) => pr.id !== 1
  );
  return products;
};
