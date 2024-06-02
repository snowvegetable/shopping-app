import Carousel from 'react-bootstrap/Carousel';
import cat1Img from '../asset/img/cat1.jpg';

export default function Home() {
  return (
    <div className="flex">
      <Carousel style={{ width: 500 }} className="m-2">
        <Carousel.Item>
          <img src={cat1Img} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cat1Img} alt="" />
        </Carousel.Item>
      </Carousel>
      <Carousel style={{ width: 500 }} className="m-2">
        <Carousel.Item>
          <img src={cat1Img} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cat1Img} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
