const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");
const Message = require("../utils/message");

exports.handler = async (connectionId, tableName, domainName, stage) => {
  const data = {
    Id: connectionId,
    Date: Date.now(),
    Domain: domainName,
    Stage: stage,
    topic: ""
  };

  console.log('Connect.handler', tableName, data)
  try {
    await DynamoDB.createOrUpdate(data, tableName);
    return Response.send(200, 'connected websocket system');
  } catch (error) {
    console.log("connectHandler.error", error);
    return Response.send(500, error);
  }
};