import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import starbucks_log from './images/starbucks_logo.png';
import badge1 from './images/badge1.jpg';
import badge2 from './images/badge2.jpg';
import visual_title from './images/visual_title.png';
import visual_cup1 from './images//visual_cup1.png';
import visual_cup1_text from './images/visual_cup1_text.png';
import visual_cup2 from './images/visual_cup2.png';
import visual_cup2_text from './images/visual_cup2_text.png';
import visual_spoon from './images/visual_spoon.png';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import { TimelineLite } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const App = () => {
  const inputRef = useRef();
  SwiperCore.use([Autoplay]);

  const badgeEl = useRef();
  const fade_ref1 = useRef();
  const fade_ref2 = useRef();
  const fade_ref3 = useRef();
  const fade_ref4 = useRef();
  const [add_class_name, setAdd_class_name] = useState('');
  const badge_style = new TimelineLite({ paused: true });
  const fade_style1 = new TimelineLite({ paused: true });
  const fade_style2 = new TimelineLite({ paused: true });
  const fade_style3 = new TimelineLite({ paused: true });
  const fade_style4 = new TimelineLite({ paused: true });
  //배지 숨기기 나타내기
  const doThrottle = () => {
    if (window.scrollY > 500) {
      console.log('adsfadfs');
      badge_style.to(badgeEl.current, { opacity: 0, display: 'none' }).play();
    } else {
      badge_style.to(badgeEl.current, { opacity: 1, display: 'block' }).play();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _.throttle(doThrottle, 300));
    fade_ref1.current !== undefined &&
      REF_MAP.map((element, index) =>
        element.style
          .to(element.id.current, {
            opacity: 1,
            display: 'block',
            delay: (index + 1) * 1,
          })
          .play()
      );
    return () =>
      window.removeEventListener(
        'scroll',
        _.throttle(() => {}, 300)
      );
  }, []);
  const REF_MAP = [
    { id: fade_ref1, style: fade_style1 },
    { id: fade_ref2, style: fade_style2 },
    { id: fade_ref3, style: fade_style3 },
    { id: fade_ref4, style: fade_style4 },
  ];
  return (
    <body>
      <header>
        <div className="inner">
          <a href="/" className="logo">
            <img src={starbucks_log} alt="Starbucks" />
          </a>
          <div className="sub-menu">
            <ul className="menu">
              <li>
                <a href="/signin">Sign In</a>
              </li>
              <li>
                <a href="javascript:void(0)">My Starbucks</a>
              </li>
              <li>
                <a href="javascript:void(0)">Customer Service & Idess</a>
              </li>
              <li>
                <a href="javascript:void(0)">Find a Store</a>
              </li>
            </ul>
            <div className={'search ' + add_class_name}>
              <input
                type="text"
                ref={inputRef}
                onFocus={(e) => (e.target.placeholder = '통합검색')}
                onBlur={(e) => {
                  e.target.placeholder = '';
                  setAdd_class_name('');
                }}
              />
              <div
                className="focused material-icons"
                onClick={() => {
                  inputRef.current.focus();
                  setAdd_class_name('focused');
                }}
              >
                <SearchIcon color="secondary" style={{ color: 'black ' }} />
              </div>
            </div>
          </div>
          <ul class="main-menu">
            <li class="item">
              <div class="item__name">COFFEE</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>커피</h4>
                      <ul>
                        <li>스타벅스 원두</li>
                        <li>스타벅스 비아</li>
                        <li>스타벅스 오리가미</li>
                      </ul>
                    </li>
                    <li>
                      <h4>에스프레소 음료</h4>
                      <ul>
                        <li>도피오</li>
                        <li>에스프레소 마키아또</li>
                        <li>아메리카노</li>
                        <li>마키아또</li>
                        <li>카푸치노</li>
                        <li>라떼</li>
                        <li>모카</li>
                        <li>리스트레또 비안코</li>
                      </ul>
                    </li>
                    <li>
                      <h4>커피 이야기</h4>
                      <ul>
                        <li>스타벅스 로스트 스팩트럼</li>
                        <li>최상의 아라비카 원두</li>
                        <li>한 잔의 커피가 완성되기까지</li>
                        <li>클로버® 커피 추출 시스템</li>
                      </ul>
                    </li>
                    <li>
                      <h4>최상의 커피를 즐기는 법</h4>
                      <ul>
                        <li>커피 프레스</li>
                        <li>푸어 오버</li>
                        <li>아이스 푸어 오버</li>
                        <li>커피 메이커</li>
                        <li>리저브를 매장에서 다양하게 즐기는 법</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>나와 어울리는 커피 찾기</h4>
                    <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                    <h4>최상의 커피를 즐기는 법</h4>
                    <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="item__name">MENU</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>음료</h4>
                      <ul>
                        <li>콜드 브루</li>
                        <li>브루드 커피</li>
                        <li>에스프레소</li>
                        <li>프라푸치노</li>
                        <li>블렌디드 음료</li>
                        <li>스타벅스 피지오</li>
                        <li>티(티바나)</li>
                        <li>기타 제조 음료</li>
                        <li>스타벅스 주스(병음료)</li>
                      </ul>
                    </li>
                    <li>
                      <h4>푸드</h4>
                      <ul>
                        <li>베이커리</li>
                        <li>케익</li>
                        <li>샌드위치 & 샐러드</li>
                        <li>따뜻한 푸드</li>
                        <li>과일 & 요거트</li>
                        <li>스낵 & 미니 디저트</li>
                        <li>아이스크림</li>
                      </ul>
                    </li>
                    <li>
                      <h4>상품</h4>
                      <ul>
                        <li>머그</li>
                        <li>글라스</li>
                        <li>플라스틱 텀블러</li>
                        <li>스테인리스 텀블러</li>
                        <li>보온병</li>
                        <li>액세서리</li>
                        <li>커피 용품</li>
                        <li>패키지 티(티바나)</li>
                      </ul>
                    </li>
                    <li>
                      <h4>카드</h4>
                      <ul>
                        <li>실물카드</li>
                        <li>e-Gift 카드</li>
                      </ul>
                    </li>
                    <li>
                      <h4>메뉴 이야기</h4>
                      <ul>
                        <li>콜드 브루</li>
                        <li>스타벅스 티바나</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>스타벅스 티바나</h4>
                    <p>
                      다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의
                      티를 선보입니다.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="item__name">STORE</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>매장 찾기</h4>
                      <ul>
                        <li>퀵 검색</li>
                        <li>지역 검색</li>
                        <li>My 매장</li>
                      </ul>
                    </li>
                    <li>
                      <h4>매장 이야기</h4>
                      <ul>
                        <li>청담스타</li>
                        <li>티바나 인스파이어드 매장</li>
                        <li>파미에파크</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>매장 찾기</h4>
                    <p>보다 빠르게 매장을 찾아보세요.</p>
                    <h4>청담스타</h4>
                    <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="item__name">RESPONSIBILITY</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>지역 사회 참여 활동</h4>
                      <ul>
                        <li>회망배달 캠페인</li>
                        <li>재능기부 카페 소식</li>
                        <li>커뮤니티 스토어</li>
                        <li>청년인재 양성</li>
                        <li>우리 농산물 사랑 캠페인</li>
                        <li>우리 문화 지키기</li>
                      </ul>
                    </li>
                    <li>
                      <h4>환경보호 활동</h4>
                      <ul>
                        <li>환경 발자국 줄이기</li>
                        <li>일회용 컵 없는 매장</li>
                        <li>커피 원두 재활용</li>
                      </ul>
                    </li>
                    <li>
                      <h4>윤리 구매</h4>
                      <ul>
                        <li>윤리적 원두 구매</li>
                        <li>공정무역 인증</li>
                        <li>커피 농가 지원 활동</li>
                      </ul>
                    </li>
                    <li>
                      <h4>글로벌 사회 공헌</h4>
                      <ul>
                        <li>윤리경영 보고서</li>
                        <li>스타벅스 재단</li>
                        <li>지구촌 봉사의 달</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>커피원두 재활용</h4>
                    <p>스타벅스 커피 원두를 재활용 해보세요.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="item__name">MY STARBUCKS REWARDS</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>마이 스타벅스 리워드</h4>
                      <ul>
                        <li>마이 스타벅스 리워드 소개</li>
                        <li>등급 및 혜택</li>
                        <li>스타벅스 별</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                    <li>
                      <h4>스타벅스 카드</h4>
                      <ul>
                        <li>스타벅스 카드 소개</li>
                        <li>스타벅스 카드 갤러리</li>
                        <li>등록 및 조회</li>
                        <li>충전 및 이용안내</li>
                        <li>분실신고/환불신청</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                    <li>
                      <h4>스타벅스 카드 e-Gift</h4>
                      <ul>
                        <li>스타벅스 카드 e-Gift 소개</li>
                        <li>이용안내</li>
                        <li>선물하기</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>스타벅스 카드 등록하기</h4>
                    <p>
                      카드 등록 후 리워드 서비스를 누리고 사용내역도
                      조회해보세요.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="item__name">WHAT'S NEW</div>
              <div class="item__contents">
                <div class="contents__menu">
                  <ul class="inner">
                    <li>
                      <h4>프로모션 & 이벤트</h4>
                      <ul>
                        <li>전체</li>
                        <li>스타벅스 카드</li>
                        <li>마이 스타벅스 리워드</li>
                        <li>온라인</li>
                        <li>2017 스타벅스 플래너</li>
                      </ul>
                    </li>
                    <li>
                      <h4>새소식</h4>
                      <ul>
                        <li>전체</li>
                        <li>상품 출시</li>
                        <li>스타벅스의 문화</li>
                        <li>스타벅스 사회공헌</li>
                        <li>스타벅스 카드출시</li>
                      </ul>
                    </li>
                    <li>
                      <h4>매장별 이벤트</h4>
                      <ul>
                        <li>일반 매장</li>
                        <li>신규 매장</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="contents__texture">
                  <div class="inner">
                    <h4>매장별 이벤트</h4>
                    <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
                    <h4>소셜 스타벅스</h4>
                    <p>
                      다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* BADGES */}
        <div ref={badgeEl} class="badges">
          <div class="badge">
            <img src={badge1} alt="Badge" />
          </div>
          <div class="badge">
            <img src={badge2} alt="Badge" />
          </div>
        </div>
      </header>
      {/* 이미지 */}
      <section class="visual">
        <div class="inner">
          <div class="title fade-in" ref={fade_ref1}>
            <img
              src={visual_title}
              alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
            />
            <a href="javascript:void(0)" class="btn btn--brown">
              자세히 보기
            </a>
          </div>
          <div class="fade-in" ref={fade_ref2}>
            <img src={visual_cup1} alt="new OATMEAL LATTE" class="cup1 image" />
            <img src={visual_cup1_text} alt="오트밀 라떼" class="cup1 text" />
          </div>
          <div class="fade-in" ref={fade_ref3}>
            <img
              src={visual_cup2}
              alt="new STARBUCKS CARAMEL CRUMBLE MOCHA"
              class="cup2 image"
            />
            <img
              src={visual_cup2_text}
              alt="스타벅스 카라멜 크럼블 모카"
              class="cup2 text"
            />
          </div>
          <div class="fade-in" ref={fade_ref4}>
            <img src={visual_spoon} alt="Spoon" class="spoon" />
          </div>
        </div>
      </section>
      {/* 공지사항 */}
      <section class="notice">
        <div class="notice-line">
          <div class="bg-left"></div>
          <div class="bg-right"></div>
          <div class="inner">
            <div class="inner__left">
              <h2>공지사항</h2>

              <Swiper
                style={{ height: 50 }}
                direction={'vertical'}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                loopAdditionalSlides={1}
                slidesPerView={1}
                slidesPerGroup={1}
                observer={true}
                observeParents={false}
                loopAdditionalSlides={1}
                style={{ backgroundColor: 'red' }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide class="swiper-slide">
                  <a href="javascript:void(0)">
                    크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
                  </a>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <a href="javascript:void(0)">
                    [당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트
                  </a>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <a href="javascript:void(0)">
                    스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
                  </a>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <a href="javascript:void(0)">
                    [당첨자 발표] 뉴이어 전자영수증 이벤트
                  </a>
                </SwiperSlide>
              </Swiper>
              <a href="javascript:void(0)" class="notice-line__more">
                <span class="material-icons">add_circle</span>
              </a>
            </div>

            <div class="inner__right">
              <h2>스타벅스 프로모션</h2>
              <div class="toggle-promotion open">
                <div class="material-icons">upload</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default App;
