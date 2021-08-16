const Connect = require("../connectHandler");
const Disconnect = require("../disconnectHandler");
const PublishMessage = require("../PublishMessageHandler");
const Default = require("../defaultHandler");
const SetTopic = require("../setTopicHandler");
const Constants = require("../../utils/constants");

exports.handler = async (event) => {
  console.log("event", event);

  const route = event.requestContext.routeKey;
  const connectionId = event.requestContext.connectionId;
  const domainName = event.requestContext.domainName;
  const stage = event.requestContext.stage;

  switch (route) {
    case "$connect":
      Connect.handler(connectionId, Constants.TABLE_NAME, domainName, stage);
      break;
    case "$disconnect":
      Disconnect.handler(connectionId, Constants.TABLE_NAME);
      break;
    case "publish":
      PublishMessage.handler(event.body, Constants.TABLE_NAME, domainName, stage);
      break;
    case "setTopic":
      SetTopic.handler(connectionId, event.body, Constants.TABLE_NAME);
      break;
    default:
      Default.handler(connectionId, domainName, stage);
      break;
  }

  // return Response.send(200, null)
};