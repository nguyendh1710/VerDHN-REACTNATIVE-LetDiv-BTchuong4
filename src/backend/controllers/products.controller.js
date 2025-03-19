// import
const products = require("../data/products.data");

// hàm xử lý yêu cầu từ frontend và trả dữ liệu về frontend
const getProducts = (req, res) => {
  const { search = "" } = req.query;
  const filters = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  res.status(200).json({
    products: filters,
  });
};
const getProduct = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = products.find((item) => item.id.toString() === id);

  if (product) {
    res.status(200).json({ product });
  } else {
    res.status(404);
  }
};
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  console.log(id);
  const product = products.find((item) => item.id.toString() === id);

  if (product) {
    product.image = image;
    product.price = price;
    product.name = name;
    res.status(200).json({ product });
  } else {
    res.status(404);
  }
};
const getProductDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = products.find((item) => item.id.toString() === id);

  if (product) {
    res.status(200).json({ product });
  } else {
    res.status(404);
  }
};

// export ra
module.exports = { getProducts, getProduct ,getProductDetail,updateProduct};
