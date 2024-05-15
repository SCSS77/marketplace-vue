const mongoose = require('mongoose');
const Category = require('../models/Category');

const categoriesData = [
  { name: 'Accommodations', description: 'Accommodations description', price: 100, category: 'Accommodations' },
  { name: 'Restaurants', description: 'Restaurants description', price: 200, category: 'Restaurants' },
  { name: 'Activities', description: 'Activities description', price: 150, category: 'Activities' },
  { name: 'Veterinary Services', description: 'Veterinary Services description', price: 120, category: 'Veterinary Services' }
];

async function initializeDatabase() {
  try {
    const batchSize = 1;
    const totalCount = await Category.countDocuments();
    let deletedCount = 0;

    while (deletedCount < totalCount) {
      await Category.deleteMany().limit(batchSize);
      deletedCount += batchSize;
      console.log(`Deleted ${deletedCount} documents`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo entre lotes
    }

    await Category.insertMany(categoriesData);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    mongoose.disconnect();
  }
}

mongoose.connect('mongodb://localhost:27017/marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  initializeDatabase();
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
