import type { IBlockedUser, IMeUser } from '../../types/lihkg';
import type { IBaseResponseBody } from '../types';

export interface IBlockedUserResponseBody extends IBaseResponseBody {
  response: {
    blocked_user_list: IBlockedUser[];
    me: IMeUser;
  };
}
