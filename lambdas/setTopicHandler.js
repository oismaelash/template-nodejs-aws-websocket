const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");

exports.handler = async (connectionId, body, tableName) => {
  var payload = JSON.parse(body);
  var topicName = payload.body.topic;
  console.log('payload', payload)
  console.log('topicName', topicName)
  try {
    var item = await DynamoDB.readOne(connectionId, tableName);
    console.log('item', item)
    item.topic = topicName;
    var response = await DynamoDB.createOrUpdate(item, tableName);
    console.log('createOrUpdate res', response)
    return Response.send(200, response);
  } catch (error) {
    console.log("setTopicHandler.error", error);
    return Response.send(500, error);
  }
};