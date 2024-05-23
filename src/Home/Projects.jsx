import React from 'react';
import image from '../Assets/Home/Tribals.png'
import SocialMedia from '../Social Media/SocialMedia'
function Projects() {
  return (
    <div className='container my-5'>
        <iframe src="//www.youtube.com/embed/auDx75oliOI" className="w-100" style={{ height: '500px' }}></iframe>
        <h4 className='my-3'>Sahaayata Projects for the Needy</h4>
        <img src={image}></img>
        <h5 className='mt-4'>Sahaayata – Social Model</h5>
        <p className='association mt-2'>Association and social engagement with needy people is one of the many ways in which you, as a help provider can involve yourself – through Sahaayata</p>
        <h5 className='mt-4'>Defining the Needy</h5>
        <p className='association mt-2'>One, who has a personal need to fulfill which could be due to failing or deteriorating health, isolation in an old age home, physical challenges, unsound mentally, the hungry, poor, jobless migrant populations leading a nomadic life, street kids, menial workers, daily wage labourers, orphans in dire need of a home, education and a dignified life, destitute girls, women, children and taking it a bit ahead, even prisoners and many others. These are categories of a cross section of our own society who are, what we call, under privileged and less fortunate living a hard life.</p>
        <p className='association mt-2'>On the other hand, we also have a set of people who are well to do, but lonely as they live away from their children who may have crossed the shores for greener pastures, who are well off but lead a sick, abandoned life as loners. Single parents are another category who have lost purpose and the will to live and are not having a friend circle and depend on caregivers for company.</p>
        <p className='association mt-2'>There are innumerable ways in which you could engage with all such people in your own way – using your resources, talent and ideas.</p>
        <h5 className='mt-4'>How to involve</h5>
        <p className='association mt-2'>If you find an ingenuous way to reach out to any of the societal sections suggested above, but find yourself alone – as you need resources and people to help you reach out – or you are in a different location from where you want to reach out and organize an event or construct a facility and you need a team – Sahaayata could pitch in – providing the hands, the expertise, the infrastructure and when required even the funds if found inadequate to fulfill your need.</p>
        <h5 className='mt-4'>What is the unique benefit </h5>
        <p className='association mt-2'>When you associate with Sahaayata, it uses its database of networks in various locations and also its team of registered Sahaayaks, to conduct and organize the event you have designed or planned. Apart from organizing the physical event and enabling its execution – Sahaayata also shares with the participants, the spiritual wisdom to fulfill at the physical level and elevate at the soul level. It is physically reaching out and also giving spiritual experience earning the blessings of a lifetime.</p>
        <h5 className='mt-4'>How does the Sahaayata model work </h5>
        <p className='association mt-2'>We often feel deeply moved and inspired many a time in life, when we experience and witness events that leave a deep mark on our consciousness. We feel the compelling urge to be of help and do something, but helplessly do not know what to do.</p>
        <p className='association mt-2'>We either feel this is beyond me; I cannot do this myself, or maybe it is those - "why does not someone should do something" moments. Here, Sahaayata can help you translate this into a reality at the end of your level of exasperation. This is where Sahaayata can be contacted and you could share your ideas and understand the logistics of organizing the event you seek to provide, either by being there personally or even remotely through Sahaayaks and the network of Sahaayata. This can be monitored physically, periodically and even remotely.</p>
        <h5 className='mt-4'>To translate your compassion into action and a reality</h5>
        <a href='#' className='btn btn-outline-secondary text-black'>Register</a><br/>
        <a href='../privacy folder/project.pdf' className='btn btn-danger text-white my-2'>Download Statement of Expenditure Form</a>
        <SocialMedia/>
    </div>
  );
}

export default Projects;
