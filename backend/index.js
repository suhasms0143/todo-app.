require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
