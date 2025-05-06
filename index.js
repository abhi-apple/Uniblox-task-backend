// index.js
import app from './app/app.js'

// Routes
import cartRouter from './routes/cart.js';
import checkoutRouter from './routes/checkout.js';
import adminRouter from './routes/admin.js';

// Use Routes
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/admin', adminRouter);

const startServer = async () => {
  try {
    
    app.listen( 9090, () => {
      console.log(`Server is running on port ${9090}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
