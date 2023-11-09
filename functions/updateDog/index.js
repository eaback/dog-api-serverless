const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async ( event, context) => {
    const { dogId } = event.pathParameters;
    
    const updateAttributes = JSON.parse(event.body);
    //{ age : 9 , color : 'black'}


    const updateExpression = 'set ' + Object.keys(updateAttributes).map(attributeName => `${attributeName} = :${attributeName}`).join(', ');
    // "set age = :age, color = :color"

    const expressionAttributeValues = Object.keys(updateAttributes).reduce((values, attributeName) => {
        values[`:${attributeName}`] = updateAttributes[attributeName];
        return values;
    }, {});

    try {
        await db.update({
            Tablename: 'dogs-db',
            Key: {id: dogId},
            ReturnValues: 'ALL_NEW',
            UpdateExpression: updateExpression,
            ConditionExpression: 'id = :dogId',
            ExpressionAttributeValues: expressionAttributeValues

        }).promise();

        return sendResponse(200, {success: true});

    }catch (error) {
        return sendResponse(500, {success: false});
    }
}