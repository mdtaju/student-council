import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import appStoreImage from "../../assets/footer/Apple store.png";
import playstore from "../../assets/footer/Google play store.png";
import group from "../../assets/footer/Join-Facebook-Group.webp";
import Logo from "../../assets/footer/footerLogo.png";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  const quickLinks = [
    { to: "/", name: "Home" },
    { to: "/search_and_apply", name: "Search And Apply" },
    { to: "/contact", name: "Contact" },
    // { to: "/events/educationExpo", name: "Events" },
    // { to: "/whyUs", name: "Why Us" },
    // { to: "/blog", name: "Blog " },
    // { to: "/news", name: "News" },
    // { to: "/student-form", name: "Visit Student Form" },
  ];
  const services = [
    { name: "Costs of Studying in UK", to: "/" },
    { name: "Student Jobs in UK", to: "/" },
    { name: "Guide to Student Life in UK", to: "/" },
    { name: "Student Jobs in UK", to: "/" },
  ];
  return (
    <footer>
      <div className="bg-secondary">
        <div className=" pb-4 px-2 lg:px-6 xl:px-16 py-8">
          <div
            className="grid md:grid-cols-2 xl:grid-cols-10 lg:gap-10 py-10 mx-4"
            // className="mid-container footer-custom-size-media-query  flex flex-wrap  md:justify-evenly gap-5 pt-[50px] m-2"
          >
            {/* {/ ----------------------------about footer info-------------- /} */}
            <div className="xl:col-span-4">
              <Link to={"/"}>
                <img src={Logo} alt="footer logo" className="w-56" />
              </Link>
              <p className="text-white text-justify py-8 w-10/12 ">
                {footer[0]?.aboutCompany}
              </p>
            </div>
            {/* {/ ------------------------------quick links------------------ /} */}
            <div className=" w-full xl:col-span-2">
              <h2 className="text-md md:text-[22px] font-bold text-white ">
                Quick Links
              </h2>
              <div>
                <ul className="grid gap-2 text-sm md:text-md mt-5 md:mt-0">
                  {quickLinks.map((link, index) => (
                    <li key={index + 1}>
                      <Link
                        to={link.to}
                        className=" text-white hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* {/ --------------------------services-------------------- /} */}
            <div className="xl:col-span-2 mt-5 md:mt-0">
              <h2 className="text-md md:text-[22px] font-bold text-white ">
                Popular Articles
              </h2>
              <div>
                <ul className="grid gap-2 text-sm md:text-md mt-5">
                  {services.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className=" text-white hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* {/ ---------------contact info----------------- /} */}
            <div className="xl:col-span-2 mt-5 md:mt-0">
              <h2 className="text-md md:text-[22px] text-start  font-bold text-white  ">
                Contact Info
              </h2>
              <div>
                <ul className="grid gap-2 text-sm md:text-md mt-5">
                  <li className="">
                    <p className="text-white font-semibold pb-1">
                      Address: Shah Niketon (5th Floor), GEC Circle, Chittagong
                    </p>
                    {/* <Icon
                                            icon="material-symbols:location-on-outline"
                                            className="lg:-mt-2 w-8 md:w-10  h-7 md:h-10 lg:w-12 lg:h-12 contact-icon text-white  "
                                        /> */}
                    <p className=" text-white  ">{footer[0]?.address}</p>
                  </li>
                  <li className="">
                    {/* <Icon
                                            icon="carbon:phone"
                                            className="w-5 md:w-8 h-5 md:h-8   text-white  "
                                        /> */}
                    <p className="text-white font-semibold pb-1">
                      Phone: 8801978-881097
                    </p>
                    <p className=" text-white  cursor-pointer">
                      {footer[0]?.phone}
                    </p>
                  </li>
                  <li className="">
                    {/* <Icon
                                            icon="ic:outline-email"
                                            className="w-5 md:w-8 h-5 md:h-8   text-white  "
                                        /> */}
                    <p className="text-white font-semibold pb-1">
                      Email: ceostudentcouncil@gmail.com
                    </p>
                    <p className=" text-white cursor-pointer">
                      {footer[0]?.email}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {/ ---------------------------------------------------social and app--------------------------------- /} */}
          <div className="bg-secondary block md:flex px-2 md:px-16 lg:px-6  items-center justify-between pb-5 pt-4">
            <div className="flex items-center gap-3 md:justify-start justify-center mb-5 md:mb-0 footer-social-icon">
              <Link to={footer[0]?.facebookPageURL}>
                <Icon
                  icon="ri:facebook-fill"
                  className="rounded-full w-[40px] h-[40px] p-2 bg-white  text-secondary hover:text-primary"
                />
              </Link>
              <Link to={footer[0]?.twitterURL}>
                <Icon
                  icon="mdi:twitter"
                  className="rounded-full w-[40px] h-[40px] p-2 bg-white  text-secondary hover:text-primary"
                />
              </Link>
              <Link to={footer[0]?.instagramURL}>
                <Icon
                  icon="ph:instagram-logo"
                  className="rounded-full w-[40px] h-[40px] p-2 bg-white  text-secondary hover:text-primary"
                />
              </Link>
              <Link to={footer[0]?.youtubeURL}>
                <Icon
                  icon="ri:youtube-fill"
                  className="rounded-full w-[40px] h-[40px] p-2 bg-white  text-secondary hover:text-primary"
                />
              </Link>
            </div>
            <div className="flex gap-3 justify-center items-center ">
              <Link to={footer[0]?.facebookGroupURL} className="max-w-[50%] ">
                <img
                  src={group}
                  className="w-full h-[55px] hover:shadow-lg rounded-lg"
                  alt="facebook group"
                />
              </Link>
              <Link to="/" className="max-w-[50%] ">
                <img
                  src={playstore}
                  className="w-full hover:shadow-lg"
                  alt="playstore"
                />
              </Link>
              <Link to="/" className="max-w-[50%] ">
                <img
                  src={appStoreImage}
                  className="w-full hover:shadow-lg"
                  alt="appstore"
                />
              </Link>
            </div>
          </div>

          <br />
          <hr className=" border-white mx-2 md:mx-16 lg:mx-6 " />
        </div>
      </div>

      {/* {/ bottom footer /} */}

      <div className="bg-secondary ">
        <p className="text-white text-center py-4 text-sm  mid-container">
          © {new Date().getFullYear()} {footer[0]?.copyrightContent}. All right
          reserve
          {/* <a
            href="https://miskaturs-portfolio.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="italic cursive">
            
          </a> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
