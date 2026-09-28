import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const host = '0.0.0.0';

// Serve static assets
app.use(express.static(__dirname));

// Route handlers for clean URLs
app.get('/listings', (req, res) => {
  res.sendFile(path.join(__dirname, 'listings.html'));
});

app.get('/property', (req, res) => {
  res.sendFile(path.join(__dirname, 'property.html'));
});

// Fallback to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
