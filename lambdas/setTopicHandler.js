const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");
const Message = require("../utils/message");

exports.handler = async (connectionId, body, tableName, domainName, stage) => {
  let topicName = JSON.parse(body).topic;
  let payload = Response.send(200,  `Client with ID: ${connectionId} subscribe on topic: ${topicName}`);
  console.log('payload', payload)
  console.log('topicName', topicName)
  try {
    let connectionItem = await DynamoDB.readOne(connectionId, tableName);
    connectionItem.topic = topicName;
    console.log('connectionItem', connectionItem)
    await DynamoDB.createOrUpdate(connectionItem, tableName);
    await Message.send(
      domainName,
      stage,
      connectionId,
      payload
    );
    return payload
  } catch (error) {
    console.log("setTopicHandler.error", error);
    return Response.send(500, error);
  }
};