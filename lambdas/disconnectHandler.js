const Response = require("../utils/response");
const DynamoDB = require("../utils/dynamoDB");

exports.handler = async (connectionId, tableName) => {
  try {
    let response = await DynamoDB.delete(connectionId, tableName);
    return Response.send(200, response);
  } catch (error) {
    console.log("disconnectHandler.error", error);
    return Response.send(500, error);
  }
};