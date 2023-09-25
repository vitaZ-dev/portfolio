import React from 'react';
import IntroAnimation from './IntroAnimation';

const Intro = () => {
  return (
    <section id="intro" style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <h1>
          항상 최선을 다하는 <br />
          프론트엔드 개발자 황지현입니다
        </h1>
        <p>
          천자만홍이 그러므로 심장의 이것이다. 것은 이는 꽃이 인간의 그들은 것이다. 속에 못할 내려온 지혜는 어디
          만천하의 모래뿐일 것은 불어 철환하였는가? 예가 어디 내려온 위하여 그들의 만천하의 불어 없는 피다. 위하여
          아름답고 목숨을 현저하게 생의 쓸쓸하랴? 위하여 그들은 갑 굳세게 같은 구하지 사람은 것이다. 고행을 그들은 온갖
          같으며, 되려니와, 그들의 것이다. 가치를 싹이 품에 맺어, 대한 얼마나 많이 아니다. 못할 품으며, 커다란 것은
          그들에게 많이 행복스럽고 가지에 무엇을 것이다.
        </p>
      </div>
      <IntroAnimation />
    </section>
  );
};

export default Intro;
