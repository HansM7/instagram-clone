class ResponseService {
  ok(message = "Fetch is ok!", response = null) {
    return {
      ok: true,
      statusCode: 200,
      message,
      response,
    };
  }

  created(message = "Created is ok!", response = null) {
    return {
      ok: true,
      statusCode: 201,
      message,
      response,
    };
  }

  BadRequest(message = "Bad request!", response = null) {
    return {
      ok: false,
      statusCode: 400,
      message,
      response,
    };
  }

  UnAuthorization(message = "No authorization!", response = null) {
    return {
      ok: false,
      statusCode: 401,
      message,
      response,
    };
  }

  NotFound(message = "Not found!", response = null) {
    return {
      ok: false,
      statusCode: 404,
      message,
      response,
    };
  }

  ErrorServer(message = "Error in server!", response = null) {
    return {
      ok: false,
      statusCode: 500,
      message,
      response,
    };
  }
}

export const responseService = new ResponseService();
