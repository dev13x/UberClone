const http = require('http');
const app = require('./app');
const connectToDB = require('./db/db');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectToDB();
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();