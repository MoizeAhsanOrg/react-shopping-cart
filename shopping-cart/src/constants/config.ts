// import dotenv from 'dotenv';

// dotenv.config();


/** secret key for encrypting and decrypting user data */
export const secretKey = process.env.REACT_APP_SECRET_KEY || 'default-secret-key';
console.log('SEC KEY', secretKey);
/**
 * URL of the server.
 */
export const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

/**
 * User roles.
 */
export const roles = ['admin', 'customer'];

/**
 * Categories of products.
 */
export const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty', 'Toys', 'Sports'];

