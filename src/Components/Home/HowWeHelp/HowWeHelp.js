import React, { useState } from "react";

const HowWeHelp = () => {
  const [features, setFeatures] = useState([]);

  // useEffect(() => {
  //     GET('whyUs', setFeatures)
  // }, [])

  return (
    <div className="p-4 sm:p-6 md:p-12 grid md:grid-cols-2 items-center gap-4 justify-between">
      <div className="w-full sm:w-[400px] md:w-[600px] bg-secondary bg-opacity-90 rounded-xl p-4 text-white h-full">
        <h1 className="text-2xl">Message From Chief Executive</h1>
        <br />
        <p className="text-sm">
          Study Abroad & Global Career- The most important journey in your life.
          You may challenges, you may fail sometimes. But don't loose your
          confidence and keep trusting in your potentiality. Go ahead and don't
          look back. I promise success will come to you for sure. Because
          success always comes to confident, honest & hardworking soul.
          Prominent Consultant is a successful organization has been service
          since 2006. Be with Prominent Consultant & Be successful. Best Wishes
          Chief Executive Best Wishes
        </p>
      </div>
      <div className="border-4 border-secondary w-full sm:w-fit h-fit rounded-md">
        <iframe
          // width="560"
          // height="315"
          className="w-full h-auto sm:w-[560px] sm:h-[315px]"
          src="https://www.youtube.com/embed/R0Jxd2GqNAA?si=goRE7UjS9XVVQR7X"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default HowWeHelp;
