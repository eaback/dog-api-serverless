const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses');
const db = new AWS.DynamoDB.DocumentClient();

// var dogs = [
    // {
    //   "id": 123456,
    //   "breed": "Golden Retriever",
    //   "age": 3,
    //   "color": "Golden",
    //   "weight_kg": 30
    // },
    // {
    //   "id": 234567,
    //   "breed": "Beagle",
    //   "age": 2,
    //   "color": "Tri-color",
    //   "weight_kg": 12
    // },
    // {
    //   "id": 345678,
    //   "breed": "German Shepherd",
    //   "age": 4,
    //   "color": "Black and Tan",
    //   "weight_kg": 35
    // },
    // {
    //   "id": 456789,
    //   "breed": "Poodle",
    //   "age": 1,
    //   "color": "White",
    //   "weight_kg": 8
    // },
    // {
    //   "id": 567890,
    //   "breed": "Labrador Retriever",
    //   "age": 5,
    //   "color": "Chocolate",
    //   "weight_kg": 28
    // },
    // {
    //   "id": 678901,
    //   "breed": "Dachshund",
    //   "age": 2,
    //   "color": "Red",
    //   "weight_kg": 10
    // },
    // {
    //   "id": 789012,
    //   "breed": "Bulldog",
    //   "age": 3,
    //   "color": "Fawn",
    //   "weight_kg": 25
    // },
    // {
    //   "id": 890123,
    //   "breed": "Siberian Husky",
    //   "age": 2,
    //   "color": "Gray and White",
    //   "weight_kg": 20
    // },
    // {
    //   "id": 901234,
    //   "breed": "Boxer",
    //   "age": 4,
    //   "color": "Brindle",
    //   "weight_kg": 32
    // },
    // {
    //   "id": 012345,
    //   "breed": "Shih Tzu",
    //   "age": 1,
    //   "color": "Gold and White",
    //   "weight_kg": 6
    // }
//   ];

  

exports.handler = async (event, context) => {

    const {Items} = await db.scan({
      TableName: 'dogs-db',
    }).promise();

    return sendResponse(200, {success: true, dogs : Items});
}