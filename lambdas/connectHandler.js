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

  try {
    await DynamoDB.createOrUpdate(data, tableName);
    return Response.send(200, null);
  } catch (error) {
    console.log("connectHandler.error", error);
  }
};