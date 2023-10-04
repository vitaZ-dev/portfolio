import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


const SwiperTest = () => {
  return (
    <>
    <>
      <div className="swiper-prev-btn">
        이전버튼
      </div>
      <Swiper
        id="item-swiper"
        navigation={{
          prevEl: '.swiper-prev-btn',
          nextEl: '.swiper-next-btn',
        }}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={25}
        breakpoints={{
          826: {
            slidesPerView: 2,
          },
          // 1024px 이상일 때
          1024: {
            slidesPerView: 2,
          },
        }}>
        <SwiperSlide>
        <div className="project-item">
          <div className="item-title">
            웹 포트폴리오 solo project <br />
            작업기간 2022.05.12 ~ 2022.05.14 (solo/협업)
          </div>
          <div className="item-box">
            <div className="item-thumbnail"></div>
            <div className="item-detail">
              소개글 <br />
              주요기능? 2(FE) <br />
              작업인원 2(FE) <br />
              사용기술 HTML5 CSS3 JavaScript <br />
              작업파트 HTML 마크업 CSS 스타일링 <br />
              배포 vercel? <br />
              깃허브 github <br />
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="swiper-next-btn">
        다음버튼
      </div>
    </>
    </>
  );
};

export default SwiperTest;
