const validator = require('xsd-schema-validator');

const xmlString = require('fs').readFileSync('pet_data.xml', 'utf8');
const xsdPath = 'pet_schema.xsd';

validator.validateXML(xmlString, xsdPath)
  .then(result => {
    if (result.valid) {
      console.log("XML is valid!");
    } else {
      console.error("XML is invalid:", result.errors);
    }
  })
  .catch(error => {
    console.error("Validation error:", error);
  });