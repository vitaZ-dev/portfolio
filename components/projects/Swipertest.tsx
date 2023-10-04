import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const SwiperTest = () => {
  return (
    <>
      <>
        <div className="swiper-btn-wrap">
          <div className="swiper-prev-btn"></div>
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
            968: {
              slidesPerView: 2,
            },
            // 1024px 이상일 때
            1180: {
              slidesPerView: 2,
            },
          }}
        >
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
          <SwiperSlide>
            <div>포트폴리오 웹사이트</div>
            <div>0000.00.00~0000.00.00 (1인)</div>
            <hr />
            <div style={{ display: 'flex' }}>
              <div
                className="thumb"
                style={{ width: '45%', minWidth: 186, height: 200, marginRight: 10, backgroundColor: 'lightgreen' }}
              ></div>
              <div>
                <ul>
                  <li>
                    NextJS를 활용한 포트폴리오 웹사이트 제작
                    <hr />
                  </li>
                  <li>
                    주요기능
                    <br />
                    간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리 링크, 프로젝트 경험, 업무 경력
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLink} />
                    URL
                  </li>
                  <li>GitHub</li>
                  <li>사용기술 : NextJS TypeScript scss + fontawsome swiper</li>
                  <li>담당파트(2인이상일때만)</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <div className="swiper-btn-wrap">
          <div className="swiper-next-btn"></div>
        </div>
      </>
    </>
  );
};

export default SwiperTest;
