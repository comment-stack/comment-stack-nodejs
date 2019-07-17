require('dotenv/config');

const config = {
  dialect: process.env.DATABASE_DIALECT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

if (process.env.DATABASE_URL) {
  config.url = process.env.DATABASE_URL;
  config.dialectOptions = {
    ssl: true,
  };
} else {
  config.host = process.env.DATABASE_HOST;
  config.username = process.env.DATABASE_USERNAME;
  config.password = process.env.DATABASE_PASSWORD;
  config.database = process.env.DATABASE_DATABASE;
}

module.exports = config;
