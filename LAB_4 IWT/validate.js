const validator = require('xsd-schema-validator');

const xmlString = require('fs').readFileSync('pet_data.xml', 'utf8');
const xsdPath = 'pet_schema.xsd';

validator.validateXML(xmlString, xsdPath)
  .then(result => {
      console.log("your XML is valid.");
  })
  .catch(error => {
    console.error("Validation error! -> ", error);
  });