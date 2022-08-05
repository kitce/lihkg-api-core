export interface IBaseResponseBody {
  success: number;
  server_time: number;
}

export interface IErrorResponseBody extends IBaseResponseBody {
  error_code: number;
  error_message: string;
}
