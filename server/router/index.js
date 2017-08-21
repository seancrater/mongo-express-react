const path = require('path');

function init(app) {
  app.get('*', function(req, res) {
    if(req.query.id) {
      console.log(req.query.id); // Will log ?id= if exists
    }

    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  app.listen(3000, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log('Listening at http://localhost:3000/');
  });
}

module.exports = {
  init
}
