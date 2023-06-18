import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import loveyou from './assets/loveyou.jpg';
import kill from './assets/kill.jpg';
import hey from './assets/hey.jpg';
import ui from './assets/ui.jpg';
import unashe from './assets/unashe.jpg';
import love from './assets/love.jpg';

const Pictures = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className='center place-items center justify-center flex'>
        <Image src={loveyou} alt="Image 1" width={900} height={900} />
      </div>
      <div>
        <Image src={kill} alt="Image 2" width={900} height={900} />
      </div>
      <div>
        <Image src={ui} alt="Image 3" width={900} height={900} />
      </div>
      <div>
        <Image src={hey} alt="Image 4" width={900} height={900} />
      </div>
      <div>
        <Image src={unashe} alt="Image 5" width={900} height={900} />
      </div>
      <div>
        <Image src={love} alt="Image 6" width={900} height={900} />
      </div>
    </Slider>
  );
};

export default Pictures;
