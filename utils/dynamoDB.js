const AWS = require("aws-sdk");
const Constants = require("../utils/constants");
AWS.config.update({ region: Constants.AWS_REGION });
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.createOrUpdate = async function (data, tableName) {
  if (!data.Id) {
    console.log("no ID on the data")
  }

  const params = {
    TableName: tableName,
    Item: data,
  };

  try {
    await documentClient.put(params).promise();
    return data;
  } catch (error) {
    console.log(`There was an error inserting ID of ${data.Id} in table ${tableName}`, error)
  }
}

module.exports.readOne = async function (ID, TableName) {
  const params = {
    TableName,
    Key: {
      Id: ID,
    },
  };

  const data = await documentClient.get(params).promise();

  if (!data || !data.Item) {
    console.log(`There was an error fetching the data for ID of ${ID} from ${TableName}`)
  }

  return data.Item;
}

module.exports.readAll = async function (TableName) {
  const params = {
    TableName,
  };

  const data = await documentClient.scan(params).promise();

  if (!data || !data.Items) {
    console.log(`There was an error fetching the data from ${TableName}`)
  }

  return data.Items;
}

module.exports.delete = async function (ID, TableName) {
  const params = {
    TableName,
    Key: {
      Id: ID,
    },
  };

  try {
    await documentClient.delete(params).promise();
  } catch (error) {
    console.log(`There was an error delete ID of ${ID} in table ${tableName}`, error);
  }
}

module.exports.getAllClientsOnTopic = async function (topicName, TableName) {
  var params = {
    TableName: TableName,
    FilterExpression: "#topicColumn = :topicName",
    ExpressionAttributeNames: {
      "#topicColumn": "topic",
    },
    ExpressionAttributeValues: {
      ":topicName": topicName,
    },
  };

  try {
    var data = await documentClient.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.log('getAllClientsOnEvent.error', error)
    return []
  }
}