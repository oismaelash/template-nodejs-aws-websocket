const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");

exports.handler = async (connectionId, body, tableName) => {
  var payload = JSON.parse(body);
  var topicName = payload.topic;
  console.log(payload)
  try {
    var item = await DynamoDB.readOne(connectionId, tableName);
    item.topic = topicName;
    var response = await DynamoDB.createOrUpdate(item, tableName);
    return Response.send(200, response);
  } catch (error) {
    console.log("connectHandler.error", error);
    return Response.send(500, error);
  }
};