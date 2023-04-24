const fs = require("fs");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: `https://${process.env.ELASTICSEARCH_HOST}:9200`,
  auth: {
    username: process.env.ELASTICSEARCH_USER,
    password: process.env.ELASTICSEARCH_PASSWORD,
  },
  tls: {
    ca: fs.readFileSync("./ca.crt"),
  },
});

const addRecipeToES = async (body, props = {}) => {
  try {
    return client.index({
      index: "recipes",
      body,
      ...props,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addRecipeToES,
};
