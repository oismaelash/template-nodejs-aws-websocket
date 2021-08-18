const Connect = require("../connectHandler");
const Disconnect = require("../disconnectHandler");
const PublishMessage = require("../publishMessageHandler");
const Default = require("../defaultHandler");
const SetTopic = require("../setTopicHandler");
const Constants = require("../../utils/constants");
const Response = require("../../utils/response");

exports.handler = async (event) => {
  // console.log("event", event);

  const route = event.requestContext.routeKey;
  const connectionId = event.requestContext.connectionId;
  const domainName = event.requestContext.domainName;
  const stage = event.requestContext.stage;

  switch (route) {
    case "$connect":
      await Connect.handler(connectionId, Constants.TABLE_NAME, domainName, stage);
      return Response.send(200, 'connected websocket system');
    case "$disconnect":
      await Disconnect.handler(connectionId, Constants.TABLE_NAME);
      return Response.send(200, 'disconnected websocket system');
    case "publish":
      return await PublishMessage.handler(event.body, Constants.TABLE_NAME, domainName, stage);
    case "setTopic":
      let setTopicResponse = await SetTopic.handler(connectionId, event.body, Constants.TABLE_NAME);
      return setTopicResponse;
    default:
      return await Default.handler(connectionId, domainName, stage);
  }

};

// wss://4tak5p460k.execute-api.us-east-2.amazonaws.com/develop