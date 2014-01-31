var http = require('http'),
    httpProxy = require('http-proxy'),
    config = require('./config');

var proxy = httpProxy.createProxyServer({});

proxy.on('error', function(err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end(config.error_message);
});

var server = require('http').createServer(function(req, res) {
  for(c in config.proxies) {
  	if(req.headers['host'] === config.proxies[c].host) {
      proxy.web(req, res, { target: 'http://127.0.0.1:' + config.proxies[c].local_port });
    }
  }
});

console.log('listening on port ' + config.listening_port);
server.listen(config.listening_port);
