import type { AxiosResponse } from 'axios';
import type { ICategory, IMeUser, IThread, ThreadListType } from '../../types/lihkg';
import type { IBaseResponseBody, IErrorResponseBody } from '../types';

export interface IThreadListResponseBody extends IBaseResponseBody {
  response: {
    category: ICategory;
    is_pagination: boolean;
    items: IThread[];
    me?: IMeUser;
  };
}

export type TFetchThreadListFunction = (
  page?: number,
  count?: number,
  type?: ThreadListType
) => Promise<AxiosResponse<IThreadListResponseBody | IErrorResponseBody>>;
