import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import LottieJson from '@/public/intro_ani.json';

const IntroAnimation = () => {
  return (
    <>
      <Player autoplay loop src={LottieJson} />
    </>
  );
};

export default IntroAnimation;
