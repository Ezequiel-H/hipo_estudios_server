import app from './src/app.js';

try {
  app.listen(process.env.PORT);
  console.log(`Listening on port ${process.env.PORT}`);
} catch (error) {
  console.log(error);
}
