import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
//   const myList = ['11.png','22.png','33.png','44.png','55.png']

  return (
    

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='11.png' text="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='22.png' text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='33.png' text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='44.png' text="Third slide" />
        <Carousel.Caption>
          {/* <h3>4 slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='55.png' text="Third slide" />
        <Carousel.Caption>
          {/* <h3>5 slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;