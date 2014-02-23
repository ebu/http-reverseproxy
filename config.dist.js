var config = {
  listening_port: 80,
  https: {
    listening_port: 443,
    key: '', // SSL Private key
    cert: '' // SSL Public certificate
  },
  backend_servers: [
    {
      'local_port': 8080,
      'origin_host': 'www.ebu.io'
    },
    {
      'local_port': 8081,
      'origin_host': 'bbc1.ebu.io'
    },
    {
      'local_port': 8082,
      'origin_host': 'bbc2.ebu.io'
    }
  ],
  fallback_port: 8090 | null,
  error_message: 'The system is down.\n\n2014 - EBU Technology & Innovation - ebu.io'
};

module.exports = config;
