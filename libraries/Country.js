const axios = require('axios');
const { response } = require("../app");

class Country {
  async fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all"); //get all data
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = Country;
