import React, { useState } from 'react';
import '../Home/Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../Assets/CarouselImages/Carousel_1.jpg';
import img2 from '../Assets/CarouselImages/Carousel_2.jpg';
import img3 from '../Assets/CarouselImages/Carousel_3.jpg';
import img4 from '../Assets/CarouselImages/Carousel_4.jpg';
import img5 from '../Assets/CarouselImages/Carousel_5.jpg';
import img6 from '../Assets/CarouselImages/Carousel_6.jpg';
import img7 from '../Assets/CarouselImages/Carousel_7.jpg';
import banner1 from '../Assets/Home/Banner_1.jpg';
import banner2 from '../Assets/Home/Banner_2.jpg';
import banner3 from '../Assets/Home/Life-Skills.jpg';
import banner4 from '../Assets/Home/JointFamily.png';
import pc1 from '../Assets/Home/pc1.jpg';
import corporate from '../Assets/Home/Corporate.jpg';
import { Pagination } from 'react-bootstrap';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderMainBodyContent = () => (
    <div className="mainBody container">
      <div className="container">
        <h2 className="subHead py-5">
          Daily Arathi, Meditation, Prayer, Group Prayer & Healing
        </h2>
        <div className="row">
          <div className="col-12">
            <img src={banner1} alt="" />
            <p className="subContent">
              Life has always been a mystery. There are so many questions which we come across and we do not have answers; so many incidents and we have no reasons; so many things and we do not understand why. Strange is the creation. We often wonder how this universe is so systematically organised and working. For example, for ages, the sun rises in the east and sets in the west. It never stopped rising. How are elephants communicating? How are the birds flying 18000 miles from Siberia to the Coromandel coast in South India and lay their eggs and fly back - the eggs hatch and the chicks fly back all the way to Siberia and where did they get the intelligence to go back to their homes. Who gave this intelligence. There are many more for which we do not have answers. To name that Supreme Intelligence, who is formless and can take a form when needed as GOD, the Almighty, the Creator, and the Creation.
            </p>

            <button className="btn py-1 mb-5 px-4 shadow rounded-1" style={{ border: '.1px solid black' }}>
              <a href="" className="text-capitalize fw-normal text-black fs-6">
                Read More ....
              </a>
            </button>

   <OwlCarousel>
            items={1}
            loop
            margin={10}
            dots={true}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            animateOut='fadeOut'


            <div class='item'>
              <img src={img1} alt="" />
            </div>
            <div class='item'>
              <img src={img2} alt="" />
            </div>
            <div class='item'>
              <img src={img3} alt="" />
            </div>
            <div class='item'>
              <img src={img4} alt="" />
            </div>
            <div class='item'>
              <img src={img5} alt="" />
            </div>
            <div class='item'>
              <img src={img6} alt="" />
            </div>
            <div class='item'>
              <img src={img7} alt="" />
            </div>
          </OwlCarousel>
        </div>

        <div className="container">
          <h2 className='subHead py-5'>
            Daily Arathi, Meditation, Prayer, Group Prayer & Healing
          </h2>
          <div className="row">
            <div className="col-12">
              <img src={banner1} alt="" />
              <p className='subContent'>Life has always been a mystery. There are s
                o many questions which we come across and we do not have answers; so many incidents
                and we have no reasons; so many things and we do not understand why. Strange is the creation.  We often wonder how this universe is
                so systematically organised and working.  For example, for ages, the sun rises in the east and sets in the west. It never stopped
                rising. How are elephants communicating? How are the birds flying 18000 miles from Siberia to the Coromandel coast in South India
                and lay their eggs and fly back - the eggs hatch and the chicks fly back all the way to Siberia and where did they get the
                intelligence to go back to their homes. Who gave this intelligence. There are many more for which we do not have answers.
                To name that Supreme Intelligence, who is formless and can take a form when needed as GOD, the Almighty, the Creator, and
                the Creation. </p>

              <button className='btn py-1 mb-5 px-4 shadow rounded-1' style={{  border: '.1px solid black' }}>
                <a href="" className='text-capitalize fw-normal text-black fs-6' >Read More ....</a>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 py-5 px-3">
            <div>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/PhjJEr9Kbac?si=Pex7kQyIGkMYgbBL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="entryHeader pt-4">
              <h2>Sahaayata Anubhava Workshop</h2>
            </div>
            <div className="YogaBanner pt-5">
              <img src={banner2} alt="" style={{ width: '100%' }} />
            </div>

            <div className="entrySub">
              <h4>Sahaayata 2 days Anubhava Workshop</h4>
              <p>
                For Better Health, Wealth, Relationships, Success and Spiritual Growth
              </p>
              <h5>Become a Divine Healer in 2 days</h5>

              <p className="entryData py-5">
                This workshop is not just a lecture, but a journey and an experiential process in consciousness which leads us to a much evolved and joyous living. All of us sail in the boat of life. We want to make our life very healthy, prosperous, loving, enjoyable, beautiful and happy. All the time we try not to hurt others or not get hurt. We want to maintain good relationships. No person wants problems and sufferings. But none can be free from suffering and problems. But we must know how to overcome problems and suffering. We should first become aware of our problems and analyse the causes, search for solutions and then apply them in our life and be free from them or at least reduce their impact of them in our lives.
              </p>
            </div>

            <div className="">
              <button className="btn py-1 px-4 shadow rounded-1" style={{ border: '.1px solid black' }}>
                <a href="" className="text-capitalize fw-normal text-black fs-6">
                  Read More ....
                </a>
              </button>
            </div>
          </div>

          <div className="col-4 py-5 px-3">
            <div className="visionHead">
              <h2>Sahaayata - The Vision</h2>
            </div>
            <div className="visionBody pt-5">
              <img src={banner3} alt="" />
              <h4>Helping people to help others</h4>
              <p>
                Set up with this vision to serve and guide people from all walks of life who can find practical solutions to fulfill everyday needs and challenges. To fulfill this need by serving as a conduit to bridge their scared intent, channeling their resources and enabling people to be beneficiaries in the form of physical Grace manifesting in their life.
              </p>
            </div>
          </div>

          <div className="col-4 py-5 px-3">
            <div className="designHead">
              <h2>Sahaayata -By Design</h2>
            </div>
            <div className="designBody pt-3">
              <img src={banner4} alt="" />
              <h4>Quality of Living : Better Relationships : Helping Society</h4>
              <p>
                Dedicated to serve as a one stop solution for a plethora of issues ranging from academics, marriage, counseling, sports, coping with health issues, food related issues (hunger/diet/malnutrition), to more subtler issues like relationships, upbringing, personal success, creativity, professional counseling and family / ancestral guidance / handling failures / breakups / rejections / work relationship related stress / organizational issues …
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 pt-2 pb-5 px-3">
            <div className="entryHeader">
              <h2>Sahaayata - a Personal Portal</h2>
            </div>
            <div className="designBody pt-3">
              <img src={pc1} alt="" />
              <h4>Sahaayata as a personal portal - for that timely direction in life</h4>
              <p>
                Using powerful time tested techniques, procedures, processes engaging the interconnectedness of mind - body - spirit – consciousness – heart and relationships for leading a fulfilled life and for a happy and joyous living.
              </p>
              <p>
                Guidance through sacred rituals – to realize the vision / purpose of one’s birth – to achieve success in health, wealth, relationships, success in one's endeavours, apart from experiencing most profound spiritual and altered states of consciousness.
              </p>

              <div className="">
                <button className="btn py-1 mb-5 px-3 shadow rounded-1" style={{ border: '.1px solid black' }}>
                  <a href="" className="text-capitalize fw-normal text-black fs-6">
                    Personal Counselling and Guidance
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 pt-2 pb-5 px-3">
            <div className="entryHeader">
              <h2>Sahaayata - For Corporates</h2>
            </div>
            <div className="designBody pt-5">
              <img src={corporate} alt="" />
              <h4>Focused on decision making, efficiency and effectiveness at workplace</h4>
              <p>
                Spirit of entrepreneurship, signature contribution, development and fulfillment, inter-personal skills relationship management, to achieve organizational success and scale career growth;.
              </p>
              <p>
                A proverbial consultant’s role lies in re-configuring an organization to a level where it becomes relevant to its business environment for its success. Another level is one where there is the experience of transformation.
              </p>
              <h4 className="m-0 p-0">How do organizations transform?</h4>
              <div className="mt-3">
                <button className="btn py-1 mb-5 px-4 shadow rounded-1" style={{ border: '.1px solid black' }}>
                  <a href="" className="text-capitalize fw-normal text-black fs-6">
                    Read More ....
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 pt-2 pb-5 px-3">
            <div className="entryHeader">
              <h2>Sahaayata Vardaan Workshop</h2>
            </div>
            <div className="designBody pt-3">
              <img src={banner2} alt="" />

              <div className="carouselContainer my-4">
                <OwlCarousel
                  className="owl-theme"
                  items={1}
                  loop
                  margin={10}
                  dots={true}
                  autoplay={true}
                  autoplayTimeout={5000}
                  autoplayHoverPause={true}
                  animateOut="fadeOut"
                >
                  <div className="item">
                    <img src={img1} alt="" />
                  </div>
                  <div className="item">
                    <img src={img2} alt="" />
                  </div>
                  <div className="item">
                    <img src={img3} alt="" />
                  </div>
                  <div className="item">
                    <img src={img4} alt="" />
                  </div>
                  <div className="item">
                    <img src={img5} alt="" />
                  </div>
                  <div className="item">
                    <img src={img6} alt="" />
                  </div>
                  <div className="item">
                    <img src={img7} alt="" />
                  </div>
                </OwlCarousel>
              </div>
              <h4>The Sahaayata 1 Day Vardaan Workshop for everyone</h4>
              <h5>
                For Better Health, Wealth, Relationships, Success and Spiritual Growth For Better Health, Wealth, Relationships, Success and Spiritual Growth
              </h5>
              <p>
                This workshop is not just a lecture, but a journey and an experiential process in consciousness which leads us to a much evolved and joyous living. All of us sail in the boat of life. We want to make our life very healthy, prosperous, loving, enjoyable, beautiful and happy. All the time we try not to hurt others or not get hurt. We want to maintain good relationships. No person wants problems and sufferings. But none can be free from suffering and problems. But we must know how to overcome problems and suffering. We should first become aware of our problems and analyse the causes, search for solutions and then apply them in our life and be free from them or at least reduce their impact of them in our lives.
              </p>

              <div className="">
                <button className="btn btn-outline py-1 mb-5 px-4 shadow rounded-1" style={{ border: '.1px solid black' }}>
                  <a href="" className="text-capitalize fw-normal text-black fs-6">
                    Read More ....
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="links">
          <ol className="" style={{ lineHeight: '2rem' }}>
            <li>
              <a href="">Sahaayata - For Parenting</a>
            </li>
            <li>
              <a href="">Sahaayata Projects for the Needy</a>
            </li>
            <li>
              <a href="">Prayer Request</a>
            </li>
            <li>
              <a href="">Sahaayata Vinayaka Archana Puja</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  );

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="Carousel_container">
          <OwlCarousel
            className="owl-theme"
            items={1}
            loop
            margin={10}
            dots={true}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            animateOut="fadeOut"
          >
            <div className="item">
              <img src={img1} alt="" />
            </div>
            <div className="item">
              <img src={img2} alt="" />
            </div>
            <div className="item">
              <img src={img3} alt="" />
            </div>
            <div className="item">
              <img src={img4} alt="" />
            </div>
            <div className="item">
              <img src={img5} alt="" />
            </div>
            <div className="item">
              <img src={img6} alt="" />
            </div>
            <div className="item">
              <img src={img7} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="mainBody container">
        {renderMainBodyContent()}
        <Pagination className="d-flex justify-content-center mt-4">
          <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>
            1
          </Pagination.Item>
          <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>
            2
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
}

export default Home;
