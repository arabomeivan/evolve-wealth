"use client";

import Image from "next/image";
import heroo_img from "../assets/heroo_img.png";
import chart_1 from "../assets/chart_1.png";
import chart_2 from "../assets/chart_2.png";
import active_1 from "../assets/active_1.png";
import active_2 from "../assets/active_2.png";
import active_3 from "../assets/active_3.png";
import active_4 from "../assets/active_4.png";
import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";
import img_5 from "../assets/img_5.png";
import eclipse from "../assets/eclipse.png";
import man from "../assets/man.png";
import img_6 from "../assets/img_6.png";
import vector_1 from "../assets/vector_1.png";
import vector_2 from "../assets/vector_2.png";
import { useRouter } from "next/navigation";
import vector_4 from "../assets/vector_4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  const router = useRouter();
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   let scrollInterval;

  //   const scrollRight = () => {
  //     if (container) {
  //       container.scrollLeft += 1; // Adjust the scroll speed as needed
  //       if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
  //         container.scrollLeft = 0; // Reset to the beginning if reached the end
  //       }
  //     }
  //   };

  //   // Start automatic scrolling after 2 seconds and repeat every 50 milliseconds
  //   setTimeout(() => {
  //     scrollInterval = setInterval(scrollRight, 50); // Adjust the interval as needed
  //   }, 2000);

  //   return () => {
  //     clearInterval(scrollInterval); // Cleanup interval on component unmount
  //   };
  // }, []);

  interface prices {
    plan_name: string;
    price: string;
    profit_title: string;
    profit: string;
    contract_life: string;
    referral_bonus: string;
  }

  let pricing: prices[] = [
    {
      plan_name: "A Day  Plan",
      price: "$50 - 100",
      profit_title: "Daily Profit",
      profit: "5%",
      contract_life: "24hrs",
      referral_bonus: "10%",
    },
    {
      plan_name: "A week Plan",
      price: "$350 - 5000",
      profit_title: "Weekly Profit",
      profit: "10%",
      contract_life: "7 Days",
      referral_bonus: "10%",
    },
    {
      plan_name: "1 Month Plan",
      price: "$5,500 - 50,000",
      profit_title: "Monthly Profit",
      profit: "15%",
      contract_life: "30 Days",
      referral_bonus: "10%",
    },
  ];

  return (
    <div className="container pt-40 pb-5">
      {/* First Section */}
      <div className=" grid md:grid-cols-2 space-y-10 md:space-y-0">
        <div className="box_1">
          <h2 className="pb-20 md:text-7xl font-extrabold">
            Get Rich in <span className="text-primary">Trading</span>{" "}
            <span className="text-primary">Claim</span> Your Spot Now
          </h2>

          <p className="text-grey pb-5">
            Discover How to Make a Fortune in Trading with Our Exclusive
            Education Program!
          </p>

          <div className="flex space-x-2">
            <button
             onClick={() => router.push("/signup")}
              className="middle none center shadow-md self-center rounded-lg py-2 px-6  base-btn  text-white"
              data-ripple-light="true"
            >
              Get Started
            </button>

            <button
              className="middle none center shadow-md self-center rounded-lg py-2 px-8 bg-white  text-primary"
              data-ripple-light="true"
            >
              Profit Calculator
            </button>
          </div>
        </div>

        <div className="box_2">
          <Image
            alt="not loading"
            src={heroo_img}
            width={500}
            height={500}
            className="block mx-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-7 py-10 mb-10 bg-cover bg-no-repeat second-section">
        <p className="text-[#A8A5CA] text-center pb-20">
          Get YOUR SPOT NOW AND START Investing LIKE A PRO
        </p>

        <div className="grid md:grid-cols-2">
          <div className="box_1">
            <p className="text-center pb-5">
              <span className="text-primary">Without</span> Crypto
            </p>

            <Image
              alt="no loading"
              width={500}
              height={500}
              src={chart_2}
              className="block mx-auto"
            />
          </div>

          <div className="pb-20 box_2">
            <p className="text-center pb-5">
              <span className="text-primary">With</span> Crypto
            </p>

            <Image
              alt="no loading"
              width={500}
              height={500}
              src={chart_1}
              className="block mx-auto"
            />
          </div>
        </div>

        <div className=" block md:flex space-y-5 md:space-x-2 md:space-y-0 box_3">
          <Image alt="no loading" width={500} height={500} src={active_1} />
          <Image alt="no loading" width={500} height={500} src={active_2} />
          <Image alt="no loading" width={500} height={500} src={active_3} />
          <Image alt="no loading" width={500} height={500} src={active_4} />
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-cover bg-no-repeat py-36 pb-10 third-section">
        <div className="mb-20 text-center md:w-[872px] mx-auto">
          <p className="font-bold text-white md:text-5xl">
            Why Our Investment Program is the Fastest Way to Wealth
          </p>
        </div>
        <div className="grid md:grid-cols-3 space-x-2 space-y-10 md:space-y-0 p-5">
          <div className="text-center">
            <div className="mb-32">
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_1}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">
                Expert Traders as Your Coaches{" "}
              </p>
              <p className="text-white">
                Briefly introduce the expert traders and their track record of
                success.{" "}
              </p>
            </div>

            <div>
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_2}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">Low starting point </p>
              <p className="text-white">
                Only 250 usd to start trading and earning money.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-32">
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_3}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">Proven Strategies</p>
              <p className="text-white">
                Emphasise the proven strategies taught in the program.
              </p>
            </div>

            <div>
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_4}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">
                Assistant with ricking regulated and safe trading platform.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-20">
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_5}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">Signals</p>
              <p className="text-white">
                Crypto trading expert coaches will provide you with dedicated
                signals to catch all the “inside information” based on
                fundamentals analysis and financial forecasts.
              </p>
            </div>

            <div>
              <Image
                alt="no loading"
                width={50}
                height={50}
                src={img_6}
                className="mb-5 block mx-auto"
              />
              <p className="text-white font-bold mb-2">Guaranteed Results</p>
              <p className="text-white font-bold mb-2">
                Offer a money-back guarantee for the program.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}

      <div className="text-4xl text-primary font-bold my-10">Meet our Team</div>
      <div className="py-10 carousel flex">

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="grid md:grid-cols-2">
          <div className="flex">
            <div className=" self-center md:self-auto space-y-5 md:space-y-0">
              <Image
                src={eclipse}
                width={261}
                height={261}
                alt="not loading"
                className=" absolute eclipse mt-[10px] md:mt-[234px]"
              />
              <Image
                src={man}
                width={500}
                height={500}
                alt="not loading"
                className=" rounded-sm"
              />
            </div>
          </div>

          <div className="text-justify flex">
            <div className="self-center">
              <p className="text-primary font-bold md:text-xl">Joseph Larry</p>
              <p className="text-grey mb-10 md:text-xl">
                CEO Evolve Wealth Group
              </p>

              <p className="text-purple font-bold">
                CEO of Evolve Ventures, a leading firm in the crypto investment
                space. Joseph leads a team of experts in navigating the dynamic
                world of cryptocurrency investments. With a deep understanding
                of blockchain technology and market trends, he strategically
                manages digital asset portfolios, ensuring optimal returns for
                clients.
              </p>
            </div>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="grid md:grid-cols-2">
          <div className="flex">
            <div className=" self-center md:self-auto space-y-5 md:space-y-0">
              <Image
                src={eclipse}
                width={261}
                height={261}
                alt="not loading"
                className=" absolute eclipse mt-[10px] md:mt-[234px]"
              />
              <Image
                src={man}
                width={500}
                height={500}
                alt="not loading"
                className=" rounded-sm"
              />
            </div>
          </div>

          <div className="text-justify flex">
            <div className="self-center">
              <p className="text-primary font-bold md:text-xl">Joseph Larry</p>
              <p className="text-grey mb-10 md:text-xl">
                CEO Evolve Wealth Group
              </p>

              <p className="text-purple font-bold">
                CEO of Evolve Ventures, a leading firm in the crypto investment
                space. Joseph leads a team of experts in navigating the dynamic
                world of cryptocurrency investments. With a deep understanding
                of blockchain technology and market trends, he strategically
                manages digital asset portfolios, ensuring optimal returns for
                clients.
              </p>
            </div>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="grid md:grid-cols-2">
          <div className="flex">
            <div className=" self-center md:self-auto space-y-5 md:space-y-0">
              <Image
                src={eclipse}
                width={261}
                height={261}
                alt="not loading"
                className=" absolute eclipse mt-[10px] md:mt-[234px]"
              />
              <Image
                src={man}
                width={500}
                height={500}
                alt="not loading"
                className=" rounded-sm"
              />
            </div>
          </div>

          <div className="text-justify flex">
            <div className="self-center">
              <p className="text-primary font-bold md:text-xl">Joseph Larry</p>
              <p className="text-grey mb-10 md:text-xl">
                CEO Evolve Wealth Group
              </p>

              <p className="text-purple font-bold">
                CEO of Evolve Ventures, a leading firm in the crypto investment
                space. Joseph leads a team of experts in navigating the dynamic
                world of cryptocurrency investments. With a deep understanding
                of blockchain technology and market trends, he strategically
                manages digital asset portfolios, ensuring optimal returns for
                clients.
              </p>
            </div>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="grid md:grid-cols-2">
          <div className="flex">
            <div className=" self-center md:self-auto space-y-5 md:space-y-0">
              <Image
                src={eclipse}
                width={261}
                height={261}
                alt="not loading"
                className=" absolute eclipse mt-[10px] md:mt-[234px]"
              />
              <Image
                src={man}
                width={500}
                height={500}
                alt="not loading"
                className=" rounded-sm"
              />
            </div>
          </div>

          <div className="text-justify flex">
            <div className="self-center">
              <p className="text-primary font-bold md:text-xl">Joseph Larry</p>
              <p className="text-grey mb-10 md:text-xl">
                CEO Evolve Wealth Group
              </p>

              <p className="text-purple font-bold">
                CEO of Evolve Ventures, a leading firm in the crypto investment
                space. Joseph leads a team of experts in navigating the dynamic
                world of cryptocurrency investments. With a deep understanding
                of blockchain technology and market trends, he strategically
                manages digital asset portfolios, ensuring optimal returns for
                clients.
              </p>
            </div>
          </div>
        </div></SwiperSlide>
      ...
    </Swiper>

        
        
      </div>

      {/* Fifth Section */}
      <div className="py-10">
        <p className="text-primary md:text-4xl ml-10 font-bold mb-8">
          Offers and Plans
        </p>

        <div className="block md:flex md:space-x-8 space-y-5 md:space-y-0 justify-center">
          {pricing.map((pricing, index) => (
            <div
              key={index}
              className="card text-center md:text-justify p-6 bg-[#B1E9FA] shadow-xl max-w-[333px] rounded-md"
            >
              <p className="font-bold mb-3">{pricing.plan_name}</p>

              <div className="bg-white rounded-sm max-w-[202px] block mx-auto font-bold mb-2">
                {pricing.price}
              </div>

              <p className="font-bold mb-5">
                <span className="text-white">{pricing.profit_title}</span>:{" "}
                {pricing.profit}
              </p>
              <p className="font-bold mb-5">
                <span className="text-white">Contract Life</span>:{" "}
                {pricing.contract_life}
              </p>
              <p className="font-bold mb-5">
                <span className="text-white">Referral Bonus</span>:{" "}
                {pricing.referral_bonus}
              </p>

              <button
                className="middle none center shadow-md self-center rounded-lg py-2 px-6  bg-black text-white"
                data-ripple-light="true"
              >
                Invest
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sixth Section */}
      <div className="py-10">
        <Image
          src={vector_1}
          width={46}
          height={46}
          alt="not loading"
          className=" absolute hidden md:block md:mt-[290px] md:ml-[-10px]"
        />
        <Image
          src={vector_2}
          width={46}
          height={46}
          alt="not loading"
          className=" absolute hidden md:block md:mt-[320px] md:ml-[70rem]"
        />
        <Image
          src={vector_4}
          width={46}
          height={46}
          alt="not loading"
          className=" absolute hidden md:block md:mt-[500px] md:ml-[1rem]"
        />
        <div className="grid md:grid-cols-2 md:space-x-5 space-y-5 md:space-y-0">
          <div className="box_1">
            <p className="md:text-4xl font-bold mb-10">
              Find Out <span className="text-primary">How Much Money</span>
              You Could Be Making
            </p>

            <p className="text-purple md:text-xl mb-5">
              See Your Potential Profits Instantly
            </p>

            <p className="text-grey">
              There are over 100,000 crypto millionaires out there, take your
              opportunity now to join them!
            </p>
          </div>
          <div className="box_2">
            <div className="rounded-[20px] text-center p-5 md:p-10 md:max-w[556px] shadow-lg">
              <p className="mb-10">
                <span className="text-purple font-bold max-w-[334px]">
                  Discover your potential income in the short term
                </span>
                <span className="text-primary">(max. 2 months)</span>
              </p>
              <div></div>
              <div className="flex justify-center">
                <form>
                  <div className="flex justify-between text-center text-primary mb-2">
                    <p className="text-[8px]">INITIAL INVESTMENT</p>
                    <p className="text-[8px]">POTENTIAL PROFITS</p>
                  </div>

                  <div className="md:flex space-y-5 md:space-y-0 justify-center mb-2">
                    <div className="input_1 p-2 flex space-x-1 opacity-50">
                      <span className=" font-bold text-white">USD</span>
                      <input
                        className=" appearance-none border rounded-full md:max-w-[191px] h-[23px] p-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="number"
                      />
                    </div>
                    <div className="input_2 p-2 space-x-1 opacity-50">
                      <span className=" font-bold text-white">USD</span>
                      <input
                        className=" input appearance-none bg-white border rounded-full max-w-[191px] h-[23px] p-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="number"
                      />
                    </div>
                  </div>

                  <button
                    className="middle none center shadow-md self-center rounded-lg py-2 px-6  base-btn  text-white"
                    data-ripple-light="true"
                    type="submit"
                  >
                    Calculate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div className="p-10 mb-10 bg-primary">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center mx-auto md:max-w-[438px] box_3">
            <p className="text-white font-bold text-5xl">
              Invest and start making money{" "}
              <span className="text-[#FA923C]">now!</span>
            </p>
          </div>

          <div className="flex justify-end">
            <form>
              <div className="mb-2">
                <input
                  className=" md:w-[403px] appearance-none contact_input p-2 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-2">
                <input
                  className=" md:w-[403px] appearance-none contact_input  p-2 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-2">
                <input
                  className=" md:w-[403px] appearance-none contact_input mb-2 p-2 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <button
                className="middle none center shadow-md self-center rounded-lg py-2 px-6 bg-[#FA923C]  text-white"
                data-ripple-light="true"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
