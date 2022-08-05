import { RequestMethod } from '../../types/http';
import { CategoryId, ThreadListType, ThreadType } from '../../types/lihkg';
import api from '../api';
import type { IErrorResponseBody } from '../types';
import type { IThreadListResponseBody, TFetchThreadListFunction } from './types';

/**
 * factory to create a function to fetch thread list
 * @param {ThreadType} threadType
 * @param {CategoryId} categoryId
 * @returns {TFetchThreadListFunction} the function to fetch thread list
 */
const createFetchThreadListFunction = (threadType: ThreadType, categoryId: CategoryId): TFetchThreadListFunction => {
  return (page = 1, count = 60, type = ThreadListType.Now) => {
    const method = RequestMethod.GET;
    const url = `/thread/${threadType}`;
    const params = { cat_id: categoryId, page: `${page}`, count: `${count}`, type };
    return api.request<IThreadListResponseBody | IErrorResponseBody>({
      method,
      url,
      params
    });
  };
};

/**
 * fetch the latest thread list
 */
export const fetchLatestThreadList = createFetchThreadListFunction(ThreadType.Latest, CategoryId.Latest);
