import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config();

(async () => {
  try {
    await connectDB();
    console.log('App initialized');
  } catch (error) {
    console.error('Startup error:', error);
    process.exit(1);
  }
})();