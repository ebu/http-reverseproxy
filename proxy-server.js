var http = require('http'),
  https = require('https'),
  httpProxy = require('http-proxy'),
  config = require('./config'),
  fs = require('fs');

/**
 * Return the hostname without port number
 */
var extractHostname = function(host) {
  var index = host.indexOf(':');
  if (index > 0) {
    return host.substring(0, index);
  }
  return host;
}

var sendError = function(err, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end(config.error_message);
};

var handleRequest = function(req, res) {
  var reqHost = extractHostname(req.headers['host']);

  for (c in config.backend_servers) {
    var configHost = config.backend_servers[c].origin_host;

    if (reqHost === configHost) {
      return proxy.web(req, res, { target: 'http://127.0.0.1:' + config.backend_servers[c].local_port });
    }
  }

  if (config.fallback_port) {
    return proxy.web(req, res, { target: 'http://127.0.0.1:' + config.fallback_port });
  }

  console.log('No rules for ', reqHost);
  sendError(new Error('No rule for '+ reqHost), req, res);
};


var proxy = httpProxy.createProxyServer({});
proxy.on('error', function(err, req, res) {
  console.log('Unable to forward the request from ', req.headers['host']);
  sendError(err, req, res);
});

// HTTPS
if (config.https && config.https.listening_port) {
  var options = {
    key: fs.readFileSync(config.https.key),
    cert: fs.readFileSync(config.https.cert)
  };

  require('https').createServer(options, handleRequest).listen(config.https.listening_port);
  console.log('listening on port ' + config.https.listening_port);
}

// HTTP
if (config.listening_port) {
  require('http').createServer(handleRequest).listen(config.listening_port);
  console.log('listening on port ' + config.listening_port);
}
