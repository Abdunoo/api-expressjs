function createResponse(code, message, data) {
    return {
      code,
      message,
      data,
    };
  }
  
  module.exports = { createResponse }; 
  