import React from 'react'
import Main from './Main'
import candle from '../Assets/Immediate/Prayer_candle.jpg'
function PrayerRequest() {
  return (
    <div className='container'>

    <Main title='Prayer Request' 
    imageUrl={candle}
    content="All of us go through various ups and downs in life. When we are happy, we do not feel the need for any Sahaayata (Help).  But in times of despair, we definitely require help. But more often than not, we tend to work on our own and try to solve our issues ourselves, which itself is the right way to do. But there are many situations in everyone's life when we try all our efforts and still fail to solve our issues. We might have tried taking the help of many and still our efforts go in vain.  It is in that situation that we take the help of the Lord or the Divine or the nature or the universe, in whatever way or form we percieve. Ultimately, it is that Supreme Divine who comes to our rescue for which we need to be helpless rather than being desperate. That dependance, dialogue or communication in the form of feelings, seeking, asking etc is what is called prayer."/>

<p>There are many times we are not even able to make that prayer due to our mental condition. Some of us do not even know how to pray.  We need some external help. It is at that time that Sahaayata will be of tremendous help. You could make a Prayer Request to us and we shall pray for you at the Sahaayata Prayer and Meditation Centre. The prayer shall be done by the senior faculty of Sahaayata along with the Sahaayaks and participants present. These prayers are done on all the days at the Centre. You may make a Prayer Request now. </p>
<a href='#'className='btn btn-secondary mb-5 mt-2 mx-auto'>Prayer Request</a>
</div>
  )
}

export default PrayerRequest