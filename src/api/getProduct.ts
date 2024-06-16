import product1Img from '../asset/img/product1.jpg';
import product2Img from '../asset/img/product2.jpg';
import product3Img from '../asset/img/product3.jpg';
import product4Img from '../asset/img/product4.jpg';
import product5Img from '../asset/img/product5.jpg';
import product6Img from '../asset/img/product6.jpg';
import product7Img from '../asset/img/product7.jpg';
import product8Img from '../asset/img/product8.jpg';

const productList: Product[] = [
  {
    id: '1',
    name: 'xbox手把',
    price: 100,
    numberOfProducts: 10,
    img: product1Img,
    text: '為您的Xbox遊戲機提供最佳控制體驗，具有高精準度的操控與舒適的握感，讓您在遊戲中盡情享受。',
  },
  {
    id: '2',
    name: '電競後背包',
    price: 200,
    numberOfProducts: 13,
    img: product2Img,
    text: '專為電競玩家設計的大容量背包，耐用、防水，並配備多個隔層，方便存放遊戲設備和配件。',
  },
  {
    id: '3',
    name: '筆電型記憶體 DDR4',
    price: 500,
    numberOfProducts: 34,
    img: product3Img,
    text: '高效能DDR4筆記本內存，提升系統速度和穩定性，適用於各種高要求的應用程式和遊戲。',
  },
  {
    id: '4',
    name: 'iphone矽膠保護殼',
    price: 300,
    numberOfProducts: 10,
    img: product4Img,
    text: '採用優質矽膠材質，柔軟耐用，為您的iPhone提供全方位保護，且易於安裝和拆卸。',
  },
  {
    id: '5',
    name: '吸管杯',
    price: 150,
    numberOfProducts: 10,
    img: product5Img,
    text: '時尚環保的吸管杯，容量適中，適合各種飲品，易於清洗，完美適合日常使用。',
  },
  {
    id: '6',
    name: '三星專用PD快充組',
    price: 320,
    numberOfProducts: 22,
    img: product6Img,
    text: '專為三星設備設計的PD快充套裝，高效充電，安全可靠，讓您的裝置隨時保持滿電狀態。',
  },
  {
    id: '7',
    name: 'T桖',
    price: 200,
    numberOfProducts: 3,
    img: product7Img,
    text: '經典設計的T卹，採用高品質棉料，穿著舒適，適合日常休閒和運動時穿著。',
  },
  {
    id: '8',
    name: '海底撈 自煮火鍋',
    price: 540,
    numberOfProducts: 30,
    img: product8Img,
    text: '海底撈自煮火鍋，口味豐富，操作簡單，無需廚房也能享受美味的火鍋盛宴。',
  },
];

export default async function getProduct(
  productId: string
): Promise<Product | undefined> {
  return new Promise((resolve) => {
    const product = productList.find((product) => product.id === productId);

    if (product) {
      resolve(product);
    } else {
      resolve(undefined);
    }
  });
}
