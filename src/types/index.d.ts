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
