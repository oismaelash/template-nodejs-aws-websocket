const AWS = require("aws-sdk");

module.exports.send = async (domainName, stage, connectionId, payload) => {
  const endpoint = `${domainName}/${stage}`;
  const api = new AWS.ApiGatewayManagementApi({ endpoint: endpoint });

  const params = {
    ConnectionId: connectionId,
    Data: Buffer.from(JSON.stringify(payload)),
  };

  return api.postToConnection(params).promise();
}