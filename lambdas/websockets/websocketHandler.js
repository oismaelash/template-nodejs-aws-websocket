const Connect = require("../connectHandler");
const Disconnect = require("../disconnectHandler");
const PublishMessage = require("../publishMessageHandler");
const Default = require("../defaultHandler");
const SetTopic = require("../setTopicHandler");
const Constants = require("../../utils/constants");

exports.handler = async (event) => {
  // console.log("event", event);

  const route = event.requestContext.routeKey;
  const connectionId = event.requestContext.connectionId;
  const domainName = event.requestContext.domainName;
  const stage = event.requestContext.stage;

  switch (route) {
    case "$connect":
      return await Connect.handler(connectionId, Constants.TABLE_NAME, domainName, stage);
    case "$disconnect":
      return await Disconnect.handler(connectionId, Constants.TABLE_NAME);
    case "publish":
      return await PublishMessage.handler(event.body, Constants.TABLE_NAME, domainName, stage);
    case "setTopic":
      return await SetTopic.handler(connectionId, event.body, Constants.TABLE_NAME);
    default:
      return await Default.handler(connectionId, domainName, stage);
  }
};