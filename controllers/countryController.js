const Country = require('../libraries/Country');
const axios = require('axios');

async function getData(req, res) {
    try {
      const myContry = new Country();
      const data = await myContry.fetchData();
      res.json(data);
    } catch (error) {
      console.error(error);
    
    }
  }


  const getCountryData = (req, res) => {
      const countryName = req.params.countryName; 
      //to fetch data for request coutry from user
      axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
          .then(response => {
              //console.log(response.data);
  
              if (response.data.length === 0) {
                  
                  res.status(404).json({ success: false, message: 'Country not found' });
              } else {
                  
                  res.status(200).json({ success: true, countryData: response.data });
              }
          })
          .catch(error => {
              
              res.status(500).json({ success: false, message: error.message });
          });
  };
  
  module.exports = {getCountryData,getData};
  
