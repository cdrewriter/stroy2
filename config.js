require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  staticRoute: '/public', // The URL portion
  staticPath: './app/public', // The local path on disk
  distDir: 'dist',
  databaseUrl: process.env.DATABASE_URL || '',
  email: {
    user: 'info@stxp.ru',
    pass: 'Derparol12'
  }
};
