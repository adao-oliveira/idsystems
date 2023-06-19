// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
// import required modules
import { Pagination } from "swiper";

import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        601: { slidesPerView: 2 },
        1025: { slidesPerView: 3 }
      }}
      modules={[Pagination, Autoplay]}
      autoplay={true}
      className="mySwiper"
    >
      <div className="portfolio__projects" data-aos="fade-in">
        {
          projects.map(project => (
            <SwiperSlide className="swiper-projects" key={project.id}>
              <Project key={project.id} project={project} />
            </SwiperSlide>
          ))
        }
      </div>
    </Swiper>
  )
}

export default Projects