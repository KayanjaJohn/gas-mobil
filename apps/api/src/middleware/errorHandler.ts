import { Response, Request, NextFunction } from 'express';
import { sendError } from '../utils/response';
import ApiError from '../utils/errors';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);

  if (err instanceof ApiError) {
    sendError(res, err);
  } else if (err.name === 'ValidationError') {
    sendError(res, new ApiError(400, 'Validation Error', 'VALIDATION_ERROR'));
  } else if (err.name === 'CastError') {
    sendError(res, new ApiError(400, 'Invalid ID format', 'INVALID_ID'));
  } else if (err.name === 'JsonWebTokenError') {
    sendError(res, new ApiError(401, 'Invalid token', 'INVALID_TOKEN'));
  } else if (err.name === 'TokenExpiredError') {
    sendError(res, new ApiError(401, 'Token expired', 'TOKEN_EXPIRED'));
  } else {
    sendError(res, new ApiError(500, err.message || 'Internal Server Error', 'INTERNAL_SERVER_ERROR'));
  }
};
