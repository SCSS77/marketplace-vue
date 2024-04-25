const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware

// Import route handlers
const gamesRouter = require('./routes/games');
const consolesRouter = require('./routes/consoles');
const accessoriesRouter = require('./routes/accesories');
const merchandisingRouter = require('./routes/merchandising');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Mount route handlers
app.use('/api/games', gamesRouter);
app.use('/api/consoles', consolesRouter);
app.use('/api/accessories', accessoriesRouter);
app.use('/api/merchandising', merchandisingRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
