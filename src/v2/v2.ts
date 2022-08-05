import * as me from './me/me';
import * as thread from './thread/thread';

/** high-level API library */
const v2 = {
  ...me,
  ...thread
};

export default v2;

export { default as api } from './api';
