import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const host = '0.0.0.0';

const publicDir = path.join(__dirname, 'public');

// Serve static assets from public and root
app.use(express.static(publicDir));
app.use(express.static(__dirname));

// Route handlers for clean URLs
app.get('/listings', (req, res) => {
  res.sendFile(path.join(publicDir, 'listings.html'));
});

app.get('/property', (req, res) => {
  res.sendFile(path.join(publicDir, 'property.html'));
});

// Fallback to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
