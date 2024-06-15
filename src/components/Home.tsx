import Carousel from 'react-bootstrap/Carousel';
import catImg from '../asset/img/cat.jpg';

export default function Home() {
  return (
    <div className="flex">
      <Carousel style={{ width: 500 }} className="m-2">
        <Carousel.Item>
          <img src={catImg} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={catImg} alt="" />
        </Carousel.Item>
      </Carousel>
      <Carousel style={{ width: 500 }} className="m-2">
        <Carousel.Item>
          <img src={catImg} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={catImg} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
