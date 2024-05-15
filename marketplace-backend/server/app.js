const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const categoriesRouter = require('./routes/categories');
const searchResultsRouter = require('./routes/searchResults'); // Agregar esta línea

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoriesRouter);
app.use('/api/search-results', searchResultsRouter); // Agregar esta línea

mongoose.connect('mongodb://localhost:27017/marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

