const Response = require("../utils/response");
const Message = require("../utils/messages");

exports.handler = async (connectionId, domainName, stage) => {
  try {
    var response = await Message.send(
      domainName,
      stage,
      connectionId,
      Response.send(200, response)
    );
    return Response.send(200, "Connected on system of websocket");
  } catch (error) {
    console.log("defaultHandler.error", error);
    return Response.send(500, error);
  }
};