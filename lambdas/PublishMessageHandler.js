const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");
const Message = require("../utils/message");

exports.handler = async (connectionId, body, tableName, domainName, stage) => {
  try {
    // body = "{ "route":"publish", "topic":"testA", "body": "message to Topic A" }"
    let bodyParsed = JSON.parse(body);
    let payload = Response.send(200, `Client with ID: ${connectionId} publish message for all clients on topic: ${bodyParsed.topic}`);
    let clientsOnTopicResponse = await DynamoDB.getAllClientsOnTopic(bodyParsed.topic, tableName);

    console.log(`payload`, bodyParsed)
    console.log(`clientsOnTopicResponse`, clientsOnTopicResponse)
    for (const client of clientsOnTopicResponse)
      await Message.send(domainName, stage, client.Id, bodyParsed.body);

    await Message.send(domainName, stage, connectionId, payload);
    return payload;
  } catch (error) {
    console.log('notificationHandler.error', error)
    Response.send(500, error)
  }
};