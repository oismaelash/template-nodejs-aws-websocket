const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");
const Message = require("../utils/messages");

exports.handler = async (body, tableName, domainName, stage) => {
  try {
    var payload = JSON.parse(body);
    var clientsOnTopic = await DynamoDB.getAllClientsOnTopic(
      payload.body.topic,
      tableName
    );

    for (const client of clientsOnTopic) {
      await Message.send(
        domainName,
        stage,
        client.Id,
        Response.send(200, payload.body)
      );
    }

    return Response.send(200, "Send message for all clients subscribe on topic");
  } catch (error) {
    console.log('notificationHandler.error', error)
    Response.send(500, error)
  }
};