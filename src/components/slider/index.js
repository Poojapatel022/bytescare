import React from 'react';
import Head from 'next/head';
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <img src="/rightarrow2.svg"
        className={className}
        style={{ ...style, width:"30px", height: "30px",top:'110%', textAlign:'center', marginRight:'38rem' , zIndex: 100, display: "flex", flexDirection: 'row', color: 'white !important', fontSize: '200px', borderRadius: '2rem' }}
        onClick={onClick}
      />
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="/leftarrow2.svg"
      className={className}
      style={{ ...style, width:"30px", height: "30px", top:'110%', marginLeft:'38rem' , display: "flex",flexDirection: 'row',  color: 'white !important', fontSize: '200px', borderRadius: '2rem' }}
      onClick={onClick}
    />
  );
}

export default function SliderView() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    autoPlay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow:  <SampleNextArrow />,
    nextArrow:<SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          dots:true,
          autoPlay:true,
          speed:500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots:true,
          autoPlay:true,
          speed:500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:true,
          autoPlay:true,
          speed:500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonialInfo = [
    {
      id: '1',
      name: 'Ajay Karakoti',
      description: 'They have an exceptional understanding of Piracy & Cyber Investigations. They save costs in technical & legal operations',
      profileImg: '/ajay.svg',
      company: 'tc1.svg',
    },
    {
      id: '2',
      name: 'Sanjay Sindhwani',
      description: 'Bytescare offers solutions to detect and control the piracy of your content from fraudulent websites and content pirates. Bytescare solutions are like watchmen of Digital News Publishers and we highly recommend their services',
      profileImg: '/SanjaySindhwani.svg',
      company: 'tc2.svg',
    },
    {
      id: '3',
      name: 'Bhavook Khanna',
      description: '“We have found the entire Bytescare team to be technically competent, enthusiastic, professional, easy to work with, and can clearly understand our business requirements and help us in the best possible manner.”',
      profileImg: '/bhavook.svg',
      company: '/tc3.svg',
    },
    {
      id: '4',
      name: 'BK',
      description: '“We have found the entire Bytescare team to be technically competent, enthusiastic, professional, easy to work with, and can clearly understand our business requirements and help us in the best possible manner.”',
      profileImg: '/bhavook.svg',
      company: '/tc3.svg',
    },
    {
      id: '5',
      name: ' Khanna',
      description: '“We have found the entire Bytescare team to be technically competent, enthusiastic, professional, easy to work with, and can clearly understand our business requirements and help us in the best possible manner.”',
      profileImg: '/bhavook.svg',
      company: '/tc3.svg',
    },
    {
      id: '6',
      name: 'Bhavook',
      description: '“We have found the entire Bytescare team to be technically competent, enthusiastic, professional, easy to work with, and can clearly understand our business requirements and help us in the best possible manner.”',
      profileImg: '/bhavook.svg',
      company: '/tc3.svg',
    },
  ]

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div>
        <Slider {...settings}>
          {testimonialInfo.map((item) => {
            return (
              <div class="row mt-4" key={item.id}>
                <div class="col mt-5">
                  <div class="card" style={{ background: '#FFFFFF', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
                    <Image src={item.profileImg} alt="testimonials" width={100} height={100} class="rounded-pill" style={{marginTop:'-3rem', marginInline:'auto', zIndex:2}} />
                    <div class="card-body">
                      <Image src={item.company} alt="company" width={100} height={100} class="mx-auto" />
                      <p class="">{item.description}</p>
                      <p class="" style={{ color: '#FFA300' }}>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  );


}



