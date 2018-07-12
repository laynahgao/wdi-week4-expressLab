// server.js
 // SERVER-SIDE JAVASCRIPT
 const express = require('express');
 const app = express();

 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

 app.get('/', (req, res) => res.send('Hello World!'));

 app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));

 const albums = [
     {
       title: 'Cupid Deluxe',
       artist: 'Blood Orange'
     },
     {
       title: 'M3LL155X - EP',
       artist: 'FKA twigs'
     },
     {
       title: 'Fake History',
       artist: 'letlive.'
     }
   ];
   app.get('/api/albums', (req, res) => res.json(albums));

   $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/albums',
      success: handleSuccess
      error: handleError
    });

    const handleSuccess = json =>  console.log(json);

    const handleError = (xhr, status, errorThrown) => console.log('uh oh');
