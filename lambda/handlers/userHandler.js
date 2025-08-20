const { getUserById } = require('../services/pyBridge');

exports.handler = async (event) => {
    const userId = event.queryStringParameters?.id;
    const user = await getUserById(userId);
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    };
};
