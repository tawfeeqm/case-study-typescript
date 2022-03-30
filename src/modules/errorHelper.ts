class ErrorResponse extends Error {
  msg: string;

  code: number;

  constructor(code: number, msg: string) {
    super();
    this.code = code;
    this.msg = msg;
  }
}

function throwError(code: number, msg: string) {
  throw new ErrorResponse(code, msg);
}

export default throwError;
