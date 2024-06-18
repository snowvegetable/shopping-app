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
  productList: ShoppingCartItem[];
  favoriteProductList: string[];
  productOrderList: ProductOrder[];
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
type Product = {
  id: string;
  name: string;
  price: number;
  numberOfProducts: number;
  img: string;
  text: string;
};

/**
 * 購物車商品
 *
 * @param shoppingCartItemId 購物車商品編號
 * @param productId 商品編號
 * @param quantity 商品數量
 */
type ShoppingCartItem = {
  shoppingCartItemId: string;
  productId: string;
  quantity: number;
};

/**
 * 訂單
 *
 * @param ProductOrderId 訂單編號
 * @param ShoppingCartItemList 購物車商品列表，裡面保存商品Id和數量
 * @param totalPrice 訂單總價格
 */
type ProductOrder = {
  productOrderId: string;
  shoppingCartItemList: ShoppingCartItem[];
  totalPrice: number;
};
