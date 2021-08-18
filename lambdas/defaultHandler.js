const Response = require("../utils/response");
const Message = require("../utils/message");

exports.handler = async (connectionId, domainName, stage) => {
  try {
    let payload = Response.send(404, "route not found")
    await Message.send(
      domainName,
      stage,
      connectionId,
      payload
    );
    return payload
  } catch (error) {
    console.log("defaultHandler.error", error);
    return Response.send(500, error);
  }
};