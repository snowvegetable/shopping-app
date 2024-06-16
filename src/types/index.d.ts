/**
 * 導覽路徑
 *
 * @param name 導覽名稱
 * @param href 路徑
 */
type PathItem = {
  name: string;
  href: string;
};

/**
 * 導覽列路徑
 *
 * @param index 主頁路徑
 * @param pathList 其餘路徑陣列
 */
type PathList = {
  index: PathItem; //主頁
  pathList: PathItem[];
};

/**
 * 登入狀態和使用者資料
 *
 * @param status 登入狀態
 * @param userData 使用者資料
 * @param token 用於身分驗證的token
 */
type LoginStatus = {
  status: 'success' | 'error';
  token: string;
  userData?: User;
};

/**
 * 登入表單資料
 *
 * @param account 帳號
 * @param password 密碼
 */
type LoginFormData = {
  account: string;
  password: string;
};

/**
 * 使用者資料
 *
 * @param username 使用者名稱
 */
type User = {
  username: string;
  productList: Produce[];
};

/**
 * 註冊表單資料
 *
 * @param account 帳號
 * @param password 密碼
 * @param checkPassword 確認密碼
 * @param name 名稱
 * @param email 電子信箱
 */
type RegisterFormData = {
  account: string;
  password: string;
  checkPassword: string;
  name: string;
  email: string;
};

/**
 * 商品
 * @param id 商品id
 * @param name 商品名稱
 * @param price 商品價格
 * @param numberOfProducts 商品數量
 */
type Produce = {
  id: string;
  name: string;
  price: number;
  numberOfProducts: number;
};
