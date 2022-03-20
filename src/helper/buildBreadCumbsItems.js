export const buildBreadCumbsItems = () => {
  const location = window.location.pathname;
  const arr = location.split("/");
  const breadItems = [
    { id: 1, url: `/${arr[1]}`, item: arr[1] },
    { id: 2, url: `/${arr[1]}/${arr[2]}`, item: arr[2] },
  ];

  return breadItems;
};
