const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");
const Message = require("../utils/messages");

exports.handler = async (body, tableName, domainName, stage) => {
  try {
    let payload = JSON.parse(body);
    console.log(`payload`, payload)
    let clientsOnTopicResponse = await DynamoDB.getAllClientsOnTopic(
      payload.topic,
      tableName
    );
    console.log(`clientsOnTopicResponse`, clientsOnTopicResponse)
    for (const client of clientsOnTopicResponse) {
      await Message.send(
        domainName,
        stage,
        client.Id,
        payload.body
      );
    }

    return Response.send(200, "Send message for all clients subscribe on topic");
  } catch (error) {
    console.log('notificationHandler.error', error)
    Response.send(500, error)
  }
};