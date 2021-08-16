module.exports.send = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: body
  };
};