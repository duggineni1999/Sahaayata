import React from 'react'
import './about.css'
import corporates from '../Assets/building_blocks.jpg'
import SocialMedia from '../Social Media/SocialMedia'
import { Link } from 'react-router-dom';

function Corporates() {
  return (
    <div className=''>
    <div className='container py-5'>
      <h1 className='page1_heading'>Sahaayata - For Corporates</h1>
      <div className='py-5 d-flex flex-wrap justify-content-evenly'>
        <img className='img-fluid mb-4 vision_img' src={corporates} alt="" />  
                 
      </div>
      {/* <div className='d-flex flex-column gap-3 my-4'>
        <h5>Focused on decision making, efficiency and effectiveness at workplace </h5>
        <p>Spirit of entrepreneurship, signature contribution, development and fulfillment, inter-personal skills relationship management, to achieve organizational success and scale career growth;</p>
        <p>A proverbial consultant’s role lies in re-configuring an organization to a level where it becomes relevant to its business environment for its success. Another level is one where there is the experience of transformation.</p>
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <h5>How do organizations transform?</h5>
        <p> Externally – where the ‘buy out - sell out’ proposal could bring about a change.</p>
        <p>Then another – where an internal transformation where individuals within organisations undergo the radical shift;</p>
        <p>Sahaayata serves as a consultancy in re-designing organizations – for fulfilling their vision. You can feed people fish, but its important to impart the invaluable lessons of fishing – when they discover the joy of freedom and independence. They discover the fishing rod, the fishing ground, besides the FISH, all on their own!</p>
        <p>Sahaayata kindles the spirit giving it newer meaning. Mainly providing a platform, playing facilitator to those who are trying to make a difference.</p>
        <p>Sahaayata is about an individualized personal engagement and not a generic ‘one-size-fits-all’ type model. Since the clientele are ‘humans’, it has to be customized and not standardized as in conventional production lines.</p>
        <p>Sahaayata is about you, knowing what your life is and what you want it to be and where you want to take it to – its about direction in life and about finding the inner fulfillment. Corporate life is about individuals, wedding their aspirations to the organization’s vision, seamlessly.</p>
        <p>Sahaayata builds on value systems for individuals: soft skills on emotions, intelligence, contribution, sense of purpose, self worth, meeting challenges, achievement quotient, handling failure, coping with interpersonal skills networking, knowledge acquisition, focus and all other related non tangibles, which are a part of everyday corporate life – including overwhelming the baser human elements, like jealously, hatred, greed, anger, boredom, frustrations, etc. It also hones the growth drivers, enthusiasm, excitement, high spiritedness, speed, achievement, success etc., channeling them to add value to organizational success.</p>
      </div>
      <div className='d-flex flex-column gap-3 my-4'>
        <h5>Sahayaata : a window to a spirited living:</h5>
        <p>Wherever we are presently and whatever conditions we operate in, however trying the circumstances, whichever options we choose, Sahaayata serves as a guiding light that helps us to discover the joy of being where we are, driving that inner transformation personally, making that latitudinal shift to experience growth and inner fulfillment, experiencing the tremendous sense of gratitude to life and its opportunities thrown at us and finally having that personal satisfaction of making a difference and adding value to our surroundings, our environment, our people. Finally, its about leaving the world with our signature contribution.</p>
      </div> */}

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Focused on decision making, efficiency and effectiveness at workplace
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <li><p>Spirit of entrepreneurship, signature contribution, development and fulfillment, inter-personal skills relationship management, to achieve organizational success and scale career growth;</p></li>
                            <li><p>A proverbial consultant’s role lies in re-configuring an organization to a level where it becomes relevant to its business environment for its success. Another level is one where there is the experience of transformation.</p></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do organizations transform?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                              <ul>
                                  <li><p> Externally – where the ‘buy out - sell out’ proposal could bring about a change.</p></li>
                                  <li> <p>Then another – where an internal transformation where individuals within organisations undergo the radical shift;</p>
                                  </li>
                                  <li><p>Sahaayata serves as a consultancy in re-designing organizations – for fulfilling their vision. You can feed people fish, but its important to impart the invaluable lessons of fishing – when they discover the joy of freedom and independence. They discover the fishing rod, the fishing ground, besides the FISH, all on their own!</p>
                                  </li>
                                  <li><p>Sahaayata kindles the spirit giving it newer meaning. Mainly providing a platform, playing facilitator to those who are trying to make a difference.</p>
                                  </li>
                                  <li><p>Sahaayata is about an individualized personal engagement and not a generic ‘one-size-fits-all’ type model. Since the clientele are ‘humans’, it has to be customized and not standardized as in conventional production lines.</p>
                                  </li>
                                  <li><p>Sahaayata is about you, knowing what your life is and what you want it to be and where you want to take it to – its about direction in life and about finding the inner fulfillment. Corporate life is about individuals, wedding their aspirations to the organization’s vision, seamlessly.</p>
                                  </li>
                                  <li><p>Sahaayata builds on value systems for individuals: soft skills on emotions, intelligence, contribution, sense of purpose, self worth, meeting challenges, achievement quotient, handling failure, coping with interpersonal skills networking, knowledge acquisition, focus and all other related non tangibles, which are a part of everyday corporate life – including overwhelming the baser human elements, like jealously, hatred, greed, anger, boredom, frustrations, etc. It also hones the growth drivers, enthusiasm, excitement, high spiritedness, speed, achievement, success etc., channeling them to add value to organizational success.</p>
                                  </li>
                              </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Sahayaata : a window to a spirited living:
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <li><p>Wherever we are presently and whatever conditions we operate in, however trying the circumstances, whichever options we choose, Sahaayata serves as a guiding light that helps us to discover the joy of being where we are, driving that inner transformation personally, making that latitudinal shift to experience growth and inner fulfillment, experiencing the tremendous sense of gratitude to life and its opportunities thrown at us and finally having that personal satisfaction of making a difference and adding value to our surroundings, our environment, our people. Finally, its about leaving the world with our signature contribution.</p>
</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex flex-column mt-5 '>
            <p className='text-center'>Welcome aboard Sahaayata </p>
            <p className='text-center fst-italic'>“Were you looking for us, we are here for you !”</p>
        </div>
        <div className='d-flex  justify-content-end gap-3 mt-4'>
       <button className='btn border-0 personal_button mt-4 '>
            <Link to="/courses/corporate-course" className="btn btn-default border-0">
                Personal Counselling and Guidance
            </Link>
        </button>
        <button className='btn border-0 personal_button mt-4 '>
            <Link to="/photo-gallery/corporate-and-intelligentia" className="btn btn-default border-0">
               Gallery
            </Link>
        </button>
        <button className='btn border-0 btn-danger  mt-4 '>
            <Link to="/course-bookings" className="btn btn-default text-white border-0">
               Book A Course Now
            </Link>
        </button>

       </div>


        
        <div className='pt-5'>
          <SocialMedia />
        </div>
        
    </div>
  
</div>
  )
}

export default Corporates
