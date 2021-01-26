const express = require('express');
const app = express();
import * as path from 'path'
app.use(express.static('public'));
app.use(express.json())
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log('Server is up!');
});
