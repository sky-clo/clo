# Postman Tests

## Usage

### Postman

Import the collection files into Postman, open the Postman Runner and select the collection. Choose 'Select File', find the corresponding test data file and run.

### Command Line

Navigate to relevant directory and, using newman, specify collection and test data files like so:

``` newman run weatherAPITesting.postman_collection.json -d weatherAPITestData.json ```


