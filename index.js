const express = require('express');

require('@babel/register');

const render = require('./render').default;

const app = express();
app.use(express.static('public/images'));

app.get('/', (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>Shop React</title>
      </head>
      <body>
        <div id="root">${render()}</div>
      </body>
    </html>
  `;
  
  res.send(response);
});

app.listen(3001, () => console.log('Server is listeninig on 3001'));
