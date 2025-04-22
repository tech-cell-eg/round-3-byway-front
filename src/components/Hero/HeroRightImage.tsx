import { useEffect, useState } from 'react';
import image1 from '../../assets/images/Herosection/frame1.png';
import image2 from '../../assets/images/Herosection/frame2.png';
import image3 from '../../assets/images/Herosection/frame3.png';
const HeroRightImage = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const images = [image1, image2, image3];
  const getRandomImage = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    setRandomImages(getRandomImage());
  }, []);
  return (
    <>
      <div>
        <img src={randomImages[0]} alt="" className="w-full" />
      </div>
    </>
  );
};

export default HeroRightImage;
