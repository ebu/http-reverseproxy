

var config = {
  listening_port: 5000,
  proxies:[
    {
      'local_port': 8080,
      'host': 'www.ebu.io:5000'
    },
    {
      'local_port': 8081,
      'host': 'bbc1.ebu.io:5000'
    },
    {
      'local_port': 8082,
      'host': 'bbc2.cpalocal.ebu.io:5000'
    }
  ],
  error_message: 'The system is down.\n\n2014 - EBU Technology & Innovation - ebu.io'
};

module.exports = config;
