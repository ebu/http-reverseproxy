var config = {
  listening_port: 5000,
  https: {
    listening_port: 443,
    key: '',
    cert: ''
  },
  backend_servers: [
    {
      'local_port': 8080,
      'origin_host': 'www.ebu.io:5000'
    },
    {
      'local_port': 8081,
      'origin_host': 'bbc1.ebu.io:5000'
    },
    {
      'local_port': 8082,
      'origin_host': 'bbc2.ebu.io:5000'
    }
  ],
  fallback_port: 8090 | null,
  error_message: 'The system is down.\n\n2014 - EBU Technology & Innovation - ebu.io'
};

module.exports = config;
