const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(express.static(`${__dirname}/public`));

// localhost:3100/images/tenanh.png
// app: <Image require

const productsController = require('./controllers/products.controller');
const authController = require ('./controllers/auth.controller')
const authenticateJWT = require('./middlewares/authenticateJWT');

const port = 3100;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('LetDiv');
});


app.route('/auth/dang-nhap').post(authController.login);

app
  .route('/products') //localhost:3100/products? (GET)
  .get(productsController.getProducts);
  
  app
  .route('/products/:id').patch(productsController.updateProduct) //localhost:3100/products? (GET)
  ;
  
  app
  .route('/products/:id') //localhost:3100/products? (GET)
  .get(productsController.getProductDetail);
// app
//   .route('/products/:id') //localhost:3100/products/3 param (GET)
//   .get(productsController.getProduct);

  app.use(authenticateJWT);

app.listen(port, () => {
  console.log(`LetDiv app listening on port ${port}`)
});