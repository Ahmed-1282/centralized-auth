import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

interface ErrorResponseObject {
  statusCode: number;
  message: string | string[];
  error: string;
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Determine Status Code
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Determine Error Message
    let message: string | string[] = 'Internal server error';

    if (exception instanceof HttpException) {
      const errorResponse = exception.getResponse();

      if (typeof errorResponse === 'string') {
        message = errorResponse;
      } else if (typeof errorResponse === 'object' && errorResponse !== null) {
        const errorObj = errorResponse as ErrorResponseObject;
        message = errorObj.message || errorObj.error || 'Unknown error';
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // Send Standardized Error Response
    response.status(status).json({
      status: 'error',
      message: Array.isArray(message) ? message.join(', ') : message,
      data: null,
    });
  }
}
