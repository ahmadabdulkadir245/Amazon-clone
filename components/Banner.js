import {carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Banner({props}) {
  return (
      <div className='relative'>
          <div className='absolute w-full th-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
          <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={ false }
              interval={5000}
          >
              <div>
                  <img src="/clem-onojeghuo" loading='lazy' alt="" />
              </div>
              <div>
                  <img src="/mariya-georgieva" loading='lazy' alt="" />
              </div>
              <div>
                  <img src="/studio-3" loading='lazy' alt="" />
              </div>
          </Carousel>
    </div>
  )
}


export default Banner 