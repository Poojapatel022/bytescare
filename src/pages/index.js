import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductAndServices from '@/components/ProductAndServices/index';
import CardsGrid from '@/components/cards/cards';
import SliderSection from '@/components/slider/index';
import Slider from "react-slick";
import Link from 'next/link';


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <img src="/rightarrow2.svg"
        className={className}
        style={{ ...style, width: "20px", height: "20px", top: '100%', marginLeft: '42rem', zIndex: 100, display: "flex", flexDirection: 'row', color: 'white !important', fontSize: '200px', borderRadius: '2rem' }}
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
      style={{ ...style, width: "20px", height: "20px", top: '100%', marginRight: '42rem', display: "flex", flexDirection: 'row', color: 'white !important', fontSize: '200px', borderRadius: '2rem' }}
      onClick={onClick}
    />
  );
}


export default function Home() {

  const firstRowData = [
    {
      id: "1",
      image: "/fastandeconomical.svg",
      heading: "Fast & Economical",
      description: "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    },
    {
      id: "2",
      image: "/robustandaccurate.svg",
      heading: "Robust & Accurate",
      description: "Verify infringements to ensure they are not from your official channel partners.  ",
    }
  ]
  const secondRowData = [
    {
      id: "3",
      image: "/scalable.svg",
      heading: "Scalable",
      description: "Regardless of the type, length or number of your content, our technology is designed to handle it.",
    },
    {
      id: "4",
      image: "/transparent.svg",
      heading: "Transparent",
      description: "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    },
    {
      id: "5",
      image: "/enforcementandinvestigations.svg",
      heading: "Enforcement & Investigation",
      description: "Our automated crawlers and deep learning solutions are quicker and cheaper.",
    }
  ]

  const productServices = [
    {
      id: '1',
      heading: 'Pre-Piracy Solutions',
      description: 'It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. PrePiracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.',
      image: '/PrePiracySolutions.svg',
      headingId: 'heading1',
      collapseId: 'collapse1',
    },
    {
      id: '2',
      heading: 'Post-Piracy Solutions',
      description: 'It is a post leakage phase that comes into play after publishing content on the web. Post-Piracy Solutions scrutinize website/content for piracy issues after the content has been published. It monitors for content leakage and also backstops the content owners by retrieving their original content from authorized websites. Post-piracy solutions include web monitoring, e-commerce scanning, article protection, P2P monitoring, original text & image identifier, and password leakage identification.',
      image: '/PrePiracySolutions.svg',
      headingId: 'heading2',
      collapseId: 'collapse2',
    },
    {
      id: '3',
      heading: 'Brand & Reputation Management',
      description: 'Brand & Reputation Management is another service offered by us to succor our customers to protect their brands from infringements & cataloging various products to maintain your brand reputation.',
      image: '/PrePiracySolutions.svg',
      headingId: 'heading3',
      collapseId: 'collapse3',
    },
  ]

  const clientsfirstrow = [
    {
      id: "1",
      image: "/scalable.svg",
      heading: "Market Intelligence",
      description: "It helps clients Gain valuable insights into the potential market by removing copies and links to your original content. There is a provision for tracking the entire workflow of the service.",
    },
    {
      id: "2",
      image: "/transparent.svg",
      heading: " Improve Your ROI",
      description: "Our anti-piracy solutions are designed in a way to succor clients in improving their ROI without affecting the revenue.",
    }
  ]

  const clientsecondrow = [
    {
      id: "3",
      image: "/enforcementandinvestigations.svg",
      heading: "Reach out to Potential Customers",
      description: "We design products that help brands & companies to serve additional products & services to their potential as well as existing customers thereby increasing your revenue.",
    },
    {
      id: "4",
      image: "/enforcementandinvestigations.svg",
      heading: "Profitability",
      description: "Our efficient & cost-effective services reduce the cost associated with technical & legal operations enhancing their sales & scaling customer engagement.",
    },
    {
      id: "5",
      image: "/enforcementandinvestigations.svg",
      heading: "Improve your Website Ranking",
      description: "Combating the piracy damage to the content restricts the presence of duplicate copies of the original content on the web henceforth improving your website ranking for the search engines.",
    },
  ]

  const platforms = [
    {
      id: '1',
      icon: '/Search Engines.svg',
      title: 'MarketPlaces',
    },
    {
      id: '2',
      icon: '/SocialMedia.svg',
      title: 'Social Media',
    },
    {
      id: '3',
      icon: '/Websites.svg',
      title: 'Websites',
    },
    {
      id: '4',
      icon: '/Domains.svg',
      title: 'Domains',
    },
    {
      id: '5',
      icon: '/SearchEngines.svg',
      title: 'Search Engines',
    },
    {
      id: '6',
      icon: '/Mobile-Apps.svg',
      title: 'Mobile Apps',
    },
    {
      id: '7',
      icon: '/VideoPlatforms.svg',
      title: 'Video Platforms',
    },
    {
      id: '8',
      icon: '/Cyberlockers.svg',
      title: 'Cyberlockers',
    },
  ]
  const sliderData = [
    {
      id: '1',
      desc: '',
      image: '/womenattendent.svg',
    },
    {
      id: '2',
      desc: '',
      image: '/womenattendent.svg',
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
      }
    },
      {
        breakpoint: 480,
        settings: {
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        {/* hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heading}>Let’s Fight <span style={{ color: '#ffa300;' }}>Piracy</span> Together with our Anti Piracy Protection Services!</h1>
          <div class="container mt-4">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <Image src="/Hero image.svg" width="493" height="348" />
              </div>
              <div className="col-lg-6 col-md-12">
                <p style={{ fontSize: '16px', alignItems: 'justify', color: '#535353', fontFamily: 'poppins', lineHeight: '24px' }}>  The advancement towards technology & world wide web has shown an
                  exponential increase in attracting a large number of population to the digital
                  platforms of health, education, entertainment, and many more.</p>

                <p style={{ fontSize: '16px', alignItems: 'justify', color: '#535353', fontFamily: 'poppins', lineHeight: '24px' }}>Content digitization increases the risk of infringements. There are a number of
                  services & solutions available all over the globe to protect your content from
                  Copyright infringement which makes it a difficult task to choose among the best
                  available services.</p>

                <p style={{ fontSize: '16px', alignItems: 'justify', color: '#535353', fontFamily: 'poppins', lineHeight: '24px' }}>“Voila! BytesCare at Your Doorstep.”</p>

                <p style={{ fontSize: '16px', alignItems: 'justify', color: '#535353', fontFamily: 'poppins', lineHeight: '24px' }}> BytesCare, a content piracy solutions company stands at your doorstep to
                  protect your content from infringements, pre/post piracy damage, and also
                  protect & maintain your brand’s reputation.</p>
              </div>
            </div>
            <div className={styles.clients}>
              <h2 class="my-5 pt-5">Trusted by 100+ Clients</h2>
              <div class="row justify-content-around mx-auto gy-4">
                <div class="col-lg-2 col-md-4 col-sm-6 ">
                  <Image src="/client3.svg" width={135} height={40} alt="client" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <Image src="/client6.svg" width={135} height={40} alt="client" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <Image src="/Client5.svg" width={135} height={40} alt="client" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <Image src="/Client4.svg" width={135} height={40} alt="client" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <Image src="/client2.svg" width={135} height={40} alt="client" />
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <Image src="/client1.svg" width={135} height={40} alt="client" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* industry we server */}
        <div className={styles.industries}>
          <h2 className={styles.industryHeading}>Industies We Serve</h2>
          <Slider  {...settings}>
            {sliderData.map((item) => {
              return (
                <>
                  <div class="row my-5">
                    <div class="col-lg-6">
                    <p className={styles.subTitle}>E-Learning</p>
                      <p style={{ color: 'white', lineHeight:'32px'}}>
                        With the advancement of the digital world, E-learning is the new normal,
                        and books on laptop is of utmost demand. This may attract the pirates to
                        download & publish your original content on unauthorized platforms. But
                        Bytescare is at your doorstep to protect your content from infringements.
                        The tools & technologies used by us prevent the pirates from illegally
                        downloading the content and publishing it on unauthorized platforms.

                        Thereby, hindering content piracy, financial loss and protecting brand
                        reputation, thus uplifting the E-learning culture.

                        E-learning content includes:
                        <ul>
                          <li> Audio & Video Tutorials</li>
                          <li> Study Materials including text and images</li>
                          <li>Quiz & Mocks</li>
                        </ul>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <Image src={item.image}  width="700" height="390" class="d-block" alt="..."  />
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </div >

        {/* content security why bytescare section */}
        < div class="my-5 pt-5 text-center" >
          <div class="container">
            <h2 style={{ fontSize: '20px', fontWeight: 400, lineHeight: '25px' }}>Why BYTESCARE?</h2>
            <h2 style={{ fontSize: "40px", lineHeight: '51px' }}>The right choice to increase your <span style={{ color: "#FFA300" }}>contents security.</span></h2>
            <div className={styles.descriptionText}>
              <p>Bytescare provides a variety of fast, economical, robust, accurate, scalable, and
                transparent AI/ML empowered solutions that assist our customers in protecting
                their content from any copyright infringement and also from any pre/post piracy
                damages. Our smart solutions differentiate us from the other competitors in the
                Market.</p>
              <p>
                We anticipate our customers to easily protect their content and brands from any
                damage and thefts with our user-friendly, reliable, and 24*7 available products
                and services including Pre-Piracy Solutions, Post-Piracy Solutions, and Brand &
                Reputation Management tools.
              </p>
            </div>
            <CardsGrid firstRowData={firstRowData} secondRowData={secondRowData} />
          </div>

        </div >

        {/* product and services section */}
        < div className={styles.productAndServices} >
          <h2 className={styles.mainHeading}>Product & Services</h2>
          <ProductAndServices productServices={productServices} />
        </div >

        {/* client Satisfaction section  */}
        < div className={styles.clientSection} >
          <div class="container text-center">
            <h2 className={styles.headingNormal}><span className={styles.highlightedText}>USPs</span> & <span className={styles.highlightedText}>Client</span> Satisfaction</h2>
            <CardsGrid firstRowData={clientsfirstrow} secondRowData={clientsecondrow} />
          </div>
        </div >

        {/* our Platfrom section */}
        < div class="container text-center mb-5" >
          <h2 className={styles.headingNormal}><span className={styles.highlightedText}>Platform</span> We Serve</h2>
          <div class="row mt-5 mx-auto gy-4">
            {platforms.map((item) => {
              return (
                <div class="col-lg-1 col-md-4 col-sm-6 mx-auto">
                  <div class="card" style={{ width: '155px', borderRadius: '8px', boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                    <div class="card-body text-center mx-auto">
                      <Image src={item.icon} alt="platform" width={38} height={32} />
                      <h3 class="mt-2 fs-6 fw-normal">{item.title}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div >

        {/* our Testimoinals */}
        < div class="container text-center mb-5" >
          <h2 className={styles.headingNormal}>Testimonials</h2>
          <div class="my-5">
            <SliderSection />
          </div>
        </div >

        {/* contect for demo section */}
        < div className={styles.DemoSection} >
          <div class="container mt-5 py-5">
            <p style={{ color: '#fff' }}>Convinced? Confused? Have Ideas?</p>
            <h2 style={{ fontWeight: 700, fontSize: '40px', color: '#333' }}>Let’s talk how Bytescare can help you and your business.</h2>
            <div className={styles.demoButton}><Link href="" class="btn text-decoration-none px-4 py-2" style={{ color: '#ffa300', background: '#fff', fontWeight: 400, fontSize: ' 1rem' }}>Request a Demo</Link></div>
          </div>
        </div >

      </div >
      <Footer />
    </>
  )
}
