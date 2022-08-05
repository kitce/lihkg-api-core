import { RequestMethod } from '../../types/http';
import api from '../api';
import type { IErrorResponseBody } from '../types';
import type { IBlockedUserResponseBody } from './types';

/**
 * fetch blocked users
 */
export const fetchBlockedUsers = async () => {
  const method = RequestMethod.GET;
  const url = `/me/blocked-user`;
  return api.request<IBlockedUserResponseBody | IErrorResponseBody>({
    method,
    url
  });
};
