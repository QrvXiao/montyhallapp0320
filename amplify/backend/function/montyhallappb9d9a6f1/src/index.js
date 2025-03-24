

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const door = event.arguments.door;
    return `你选择了 ${door} 号门`;
  };