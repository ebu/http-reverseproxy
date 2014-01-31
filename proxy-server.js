var http = require('http'),
    httpProxy = require('http-proxy'),
    config = require('./config');


var sendError = function(err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end(config.error_message);
};

var proxy = httpProxy.createProxyServer({});

proxy.on('error', function(err, req, res) {
  console.log('Unable to forward the request from ', req.headers['host']);
  sendError(err, req, res);
});

var server = require('http').createServer(function(req, res) {
  var reqHost = req.headers['host'];

  for(c in config.proxies) {
    var configHost = config.proxies[c].host;
    if(reqHost === configHost){
      return proxy.web(req, res, { target: 'http://127.0.0.1:' + config.proxies[c].local_port });
    }
  }

  console.log('No rules for :', req.headers['host']);
  sendError(new Error('No rule for host'), req, res);
});

console.log('listening on port ' + config.listening_port);
server.listen(config.listening_port);
