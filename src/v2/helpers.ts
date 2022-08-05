import crypto from 'crypto-js';
import { RequestMethod } from '../types/http';
import { DeviceType, ILocalStorageUser } from '../types/lihkg';

const getLoadTimeHeader = (x: boolean) => {
  const a = (('false'[0] + x) + ('false'[2])).length;
  const b = 0 | 4 + Math.PI * Math.random();
  const c = b + '.';
  const d = a ^ b;
  const e = c + d;
  const f = 1000000 * Math.random();
  const g = f | 0;
  const h = e + g;
  return h;
};

const getDigestHeader = (method: RequestMethod, url: string, params: Record<string, string> | undefined, data: Record<string, string> | undefined, token: string, timestamp: string) => {
  const _params = new URLSearchParams(params);
  const messages = [
    'jeams',
    method,
    method === RequestMethod.GET && params ? `${url}?${_params.toString()}` : url,
    method === RequestMethod.POST && data ? JSON.stringify(data) : '',
    token,
    timestamp
  ];
  const hash = crypto.SHA1(messages.join('$'));
  return crypto.enc.Hex.stringify(hash);
};

const getPlusHeader = (timestamp: string) => {
  const a = 'false'[1] + [false] + undefined;
  const b = (window as any).isPlusUser;
  const c = a + b;
  const d = c + timestamp;
  const hash = crypto.SHA1(d);
  return crypto.enc.Hex.stringify(hash);
};

export const getRequestHeaders = (method: RequestMethod, url: string, params?: Record<string, string>, data?: Record<string, string>) => {
  const device = localStorage.getItem('device');
  const user = localStorage.getItem('user');
  const headers: Record<string, string> = {
    'X-LI-DEVICE-TYPE': DeviceType.Browser,
    'X-LI-LOAD-TIME': getLoadTimeHeader(false)
  };
  if (device) {
    headers['X-LI-DEVICE'] = JSON.parse(device);
  }
  if (user) {
    const { token, user_id: userId } = JSON.parse(user) as ILocalStorageUser;
    const timestamp = Math.floor(Date.now() / 1000).toString();
    headers['X-LI-DIGEST'] = getDigestHeader(method, url, params, data, token, timestamp);
    headers['X-LI-PLUS'] = getPlusHeader(timestamp);
    headers['X-LI-REQUEST-TIME'] = timestamp;
    headers['X-LI-USER'] = userId;
  }
  return headers;
};
