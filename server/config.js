const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: "mongodb://dbadmin:kissaclubi@ds141428.mlab.com:41428/data"
  }
};

module.exports = config;
