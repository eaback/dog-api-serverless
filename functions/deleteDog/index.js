const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async(event, context) =>{
    const {dogId} = event.pathParameters;

    try{
        await db.delete({
            TableName: 'dogs-db',
            Key : {id: dogId}
        }).promise();

    return sendResponse(200, {success : true});
    } catch (error) {
        return sendResponse(500, {success: false});
    }
}