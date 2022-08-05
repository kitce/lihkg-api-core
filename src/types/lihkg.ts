interface IPost {
  post_id: string;
  quote_post_id: string;
  thread_id: string;
  user_nickname: string;
  user_gender: Gender;
  like_count: string;
  dislike_count: string;
  vote_score: string;
  no_of_quote: string;
  remark: unknown[] | IPostRemark;
  status: string;
  reply_time: number;
  msg_num: string;
  msg: string;
  is_minimized_keywords: boolean;
  page: number;
  user: IUser;
  vote_status: string;
  display_vote: boolean;
  low_quality: boolean;
  quote?: IPost;
}

interface IPostRemark {
  is_newbie?: boolean;
  is_not_push_post?: boolean;
}

export interface IThread {
  thread_id: string;
  cat_id: CategoryId;
  sub_cat_id: string;
  title: string;
  user_id: string;
  user_nickname: string;
  user_gender: Gender;
  no_of_reply: string;
  no_of_uni_user_reply: string;
  like_count: number;
  dislike_count: number;
  reply_like_count: string;
  reply_dislike_count: string;
  max_reply_like_count: string;
  max_reply_dislike_count: string;
  create_time: number;
  last_reply_time: number;
  status: string;
  is_adu: boolean;
  remark: IThreadRemark;
  last_reply_user_id: string;
  max_reply: string;
  total_page: number;
  notice?: string;
  is_hot: boolean;
  category: ICategory;
  display_vote: boolean;
  vote_status: string;
  is_bookmarked: boolean;
  is_replied: boolean;
  user: IUser;
  pinned_post?: IPost;
  sub_category?: ISubCategory;
  is_highlight_sub_cat?: boolean;
}

export interface ICategory {
  cat_id: CategoryId;
  name: string;
  postable: boolean;
}

interface ISubCategory {
  sub_cat_id: string;
  cat_id: CategoryId;
  name: string;
  postable: boolean;
  filterable: boolean;
  is_highlight: boolean;
  orderable: boolean;
  is_filter: boolean;
  url: string;
  query: IQuery;
}

interface IQuery {
  cat_id: CategoryId;
  sub_cat_id: string;
}

interface IThreadRemark {
  last_reply_count: number;
  author_pin_post_id?: string;
  no_of_uni_not_push_post?: number;
  notice?: string;
  cover_img?: string;
  custom_title?: string;
}

export interface IBlockedUser extends IUser {
  blocked_time: number;
  block_remark: IBlockUserRemark;
}

interface IBlockUserRemark {
  nickname?: string;
  reason: string;
}

interface IUser {
  user_id: string;
  nickname: string;
  level: string;
  gender: Gender;
  status: string;
  create_time: number;
  level_name: LevelName;
  is_following: boolean;
  is_blocked: boolean;
  is_disappear: boolean;
  is_newbie: boolean;
}

export interface IMeUser extends IUser {
  email: string;
  plus_expiry_time: number;
  last_login_time: number;
  is_disappear: boolean;
  is_plus_user: boolean;
  meta_data: IUserMetaData;
}

interface IUserMetaData {
  custom_cat: unknown[];
  keyword_filter: string;
  login_count: number;
  last_read_notify_time: number;
  notify_count: number;
  push_setting: IPushSetting;
  twofa_setting: I2FASetting;
  auto_logout: IAutoLogout;
}

interface IAutoLogout {
  enabled: boolean;
}

interface IPushSetting {
  all: boolean;
  show_preview: boolean;
  new_reply: boolean;
  quote: boolean;
  following_new_thread: boolean;
}

interface I2FASetting {
  totp: boolean;
}

export interface ILocalStorageUser {
  token: string;
  user_id: string;
}

enum Gender {
  F = 'F',
  M = 'M',
}

enum LevelName {
  Newbie = '新手會員',
  Normal = '普通會員',
  Admin = '站長',
}

export enum CategoryId {
  /** 吹水台 */
  BlowWater = '1',
  /** 熱門 */
  Hot = '2',
  /** 最新 */
  Latest = '3',
  /** 手機台 */
  MobilePhone = '4',
  /** 時事台 */
  News = '5',
  /** 體育台 */
  Sports = '6',
  /** 娛樂台 */
  Entertainment = '7',
  /** 動漫台 */
  Anime = '8',
  /** Apps台 */
  Apps = '9',
  /** 遊戲台 */
  Gaming = '10',
  /** 影視台 */
  Movie = '11',
  /** 講故台 */
  StoryTelling = '12',
  /** 潮流台 */
  Fashion = '13',
  /** 工作台 */
  Work = '14',
  /** 財經台 */
  Finance = '15',
  /** 飲食台 */
  Cuisine = '16',
  /** 旅遊台 */
  Travel = '17',
  /** 學術台 */
  Academy = '18',
  /** 校園台 */
  School = '19',
  /** 汽車台 */
  Vehicle = '20',
  /** 音樂台 */
  Music = '21',
  /** 硬件台 */
  Hardware = '22',
  /** 攝影台 */
  Photography = '23',
  /** 玩具台 */
  Toy = '24',
  /** 寵物台 */
  Pet = '25',
  /** 軟件台 */
  Software = '26',
  /** 活動台 */
  Activity = '27',
  /** 站務台 */
  Administration = '28',
  /** 成人台 */
  Adult = '29',
  /** 感情台 */
  Emotion = '30',
  /** 創意台 */
  Creativity = '31',
  /** 黑洞 */
  BlackHole = '32',
  /** 政事台 */
  Politics = '33',
  /** 直播台 */
  LiveStream = '34',
  /** 電訊台 */
  Telecom = '35',
  /** 健康台 */
  Health = '36',
  /** 房屋台 */
  Housing = '37',
  /** World */
  World = '38',
  /** 自選台 */
  Custom = '999'
}

export enum CategoryName {
  BlowWater = '吹水台',
  Hot = '熱門',
  Latest = '最新',
  MobilePhone = '手機台',
  News = '時事台',
  Sports = '體育台',
  Entertainment = '娛樂台',
  Anime = '動漫台',
  Apps = 'Apps台',
  Gaming = '遊戲台',
  Movie = '影視台',
  StoryTelling = '講故台',
  Fashion = '潮流台',
  Work = '工作台',
  Finance = '財經台',
  Cuisine = '飲食台',
  Travel = '旅遊台',
  Academy = '學術台',
  School = '校園台',
  Vehicle = '汽車台',
  Music = '音樂台',
  Hardware = '硬件台',
  Photography = '攝影台',
  Toy = '玩具台',
  Pet = '寵物台',
  Software = '軟件台',
  Activity = '活動台',
  Administration = '站務台',
  Adult = '成人台',
  Emotion = '感情台',
  Creativity = '創意台',
  BlackHole = '黑洞',
  Politics = '政事台',
  LiveStream = '直播台',
  Telecom = '電訊台',
  Health = '健康台',
  Housing = '房屋台',
  World = 'World',
  Custom = '自選台'
}

export enum ThreadType {
  /** 熱門 */
  Hot = 'hot',
  /** 最新 */
  Latest = 'news',
  /** 吹水台 */
  BlowWater = 'latest',
  Category = 'category'
}

export enum ThreadListType {
  /** 即時熱門 */
  Now = 'now',
  /** 今天熱門 */
  Daily = 'daily',
  /** 本週精選 */
  Weekly = 'weekly'
}

export enum ThreadListOrder {
  /** 最新 */
  Latest = 'now',
  /** 熱門 */
  Hot = 'hot'
}

export enum DeviceType {
  Android = 'android',
  Browser = 'browser'
}
