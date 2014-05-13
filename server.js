var server = require('./app.js')	
var port = 3000;
server.listen(port, function(err) {
  window.location.href = "http://localhost:"+port+"/";
});

