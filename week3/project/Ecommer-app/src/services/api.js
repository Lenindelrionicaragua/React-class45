const API_BASE_URL = "https://fakestoreapi.com";

export const getCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/products/categories`);
  return response.json();
};

export const getProducts = async (selectedCategory = null) => {
  // Construct the URL based on the selected category
  const url = selectedCategory
    ? `${API_BASE_URL}/products/category/${selectedCategory}`
    : `${API_BASE_URL}/products`;

  // Fetch products from the API
  const response = await fetch(url);
  return response.json();
};

export const getProductDetails = async (productId) => {
  // Fetch product details from the API
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);
  return response.json();
};
