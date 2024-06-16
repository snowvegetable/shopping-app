import Carousel from 'react-bootstrap/Carousel';
import catImg from '../../asset/img/cat.jpg';
import ProductCard from './ProductCard';

export default function Home() {
  return (
    <div>
      {/* <div className="flex">
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
        <Carousel style={{ width: 500 }} className="m-2">
          <Carousel.Item>
            <img src={catImg} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={catImg} alt="" />
          </Carousel.Item>
        </Carousel>
      </div> */}

      <div className="flex">
        <ProductCard
          imgSrc={catImg}
          title="Card Title"
          text="Some quick example text to build on the card title and make up thebulk of the card's content"
        />
        <ProductCard
          imgSrc={catImg}
          title="Card Title"
          text="Some quick example text to build on the card title and make up thebulk of the card's content"
        />
        <ProductCard
          imgSrc={catImg}
          title="Card Title"
          text="Some quick example text to build on the card title and make up thebulk of the card's content"
        />
      </div>
    </div>
  );
}
