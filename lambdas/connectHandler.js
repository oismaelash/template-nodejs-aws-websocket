const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");

exports.handler = async (connectionId, tableName, domainName, stage) => {
  const data = {
    Id: connectionId,
    Date: Date.now(),
    Domain: domainName,
    Stage: stage,
    topic: ""
  };

  console.log('Connect.handler')
  try {
    let response = await DynamoDB.createOrUpdate(data, tableName);
    return Response.send(200, response);
  } catch (error) {
    console.log("connectHandler.error", error);
    return Response.send(500, error);
  }
};