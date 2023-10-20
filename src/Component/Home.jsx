/* eslint-disable react/no-unescaped-entities */
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <img
        className="h-[100vh] w-full"
        src={
          "https://i.ibb.co/f01q37N/domenico-loia-Eh-Tc-C9s-YXsw-unsplash.jpg"
        }
      />
      <h2 className="text-center mt-10 text-5xl font-semibold">Our Products</h2>
      <p className="border-dashed border border-lime-400 text-center w-52 mx-auto mt-5"></p>
      <div className=" w-11/12 mx-auto my-16 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {datas.map((data, idx) => (
          <div className="bg-slate-200 rounded-md" key={idx}>
            <img className="w-full h-52 rounded-t-md " src={data.image} />
            <div className="flex items-center justify-between p-3">
              <h2 className="font-semibold  bg-slate-300  hover:bg-slate-200 w-20 px-2 py-1 rounded-full ">
                {data.name}
              </h2>
              <Link
                to={`/products/${data.brand_name}`}
                className="bg-slate-300  hover:bg-slate-200 p-2 rounded-full "
              >
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-100">
        <h2 className="text-center bg-slate-100 text-4xl font-semibold pt-10">
          Our Featured Brands
        </h2>
        <p className="border-dashed bg-slate-200 border border-lime-400 text-center w-72 mx-auto mt-5"></p>
        <h2 className="text-center bg-slate-100 pt-5 text-5xl font-semibold ">
          Walton
        </h2>
        <p className="border-dashed bg-slate-200 border border-lime-400 text-center w-28 mx-auto mt-5 mb-5"></p>

        <div className="hero  bg-slate-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-10/12 md:w-1/2  lg:text-left">
              <h1 className="text-5xl font-semibold">
                Discover Innovation with Walton
              </h1>
              <p className="py-6">
                Walton is a pioneering tech brand known for its commitment to
                innovation and quality. With a rich history of bringing
                cutting-edge technology to your everyday life, Walton offers a
                wide range of electronics and appliances designed to make your
                life smarter, more convenient, and enjoyable. From sleek
                smartphones to high-performance home appliances, Walton
                continues to lead the way in technology and design, providing
                products that meet your modern needs and aspirations.
              </p>
            </div>
            <div className="card flex-shrink-0 w-10/12 lg:w-1/2 max-w-sm lg:mr-10 shadow-2xl bg-base-100">
              <img
                src={"https://i.ibb.co/Jt2hwVK/walton-picture.jpg"}
                className="card-body"
              />
            </div>
          </div>
        </div>

        <h2 className="text-center bg-slate-100 text-5xl font-semibold pt-10 pb-7">
          Super Star
        </h2>
        <p className="border-dashed bg-slate-200 border border-lime-400 text-center w-36 mx-auto mb-10"></p>

        <div className="hero  bg-slate-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-10/12  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <img
                src={"https://i.ibb.co/7byWJqg/download.jpg"}
                className="card-body"
              />
            </div>
            <div className="text-center w-10/12 md:w-1/2 lg:text-left lg:mr-10">
              <h1 className="text-5xl font-bold">
                Elevate Your Journey with Super Star
              </h1>
              <p className="py-6">
                Super Star is your go-to brand for mobility solutions that
                redefine your travel experience. With a focus on performance,
                durability, and style, Super Star offers a diverse range of
                motorcycles and scooters that promise an exhilarating and
                reliable ride. Whether you are commuting through the city
                streets or embarking on adventures, Super Star is your trusted
                companion on the road. Explore the world of Super Star and
                embark on journeys filled with power and freedom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto mb-14">
        <h2 className="text-center mt-10 text-5xl font-semibold">
          Get 20% discount on shopping above 2000$
        </h2>
        <p className="border-dashed bg-slate-200 border border-lime-400 text-center w-9/12 mt-7 mx-auto mb-10"></p>
        <p>
          Unlock Fantastic Savings: Shop Now and Enjoy a 20% Discount on
          Purchases Over $2000! It is time to treat yourself or your loved ones
          to something special. At [Your Brand Name], we're thrilled to offer
          you an exclusive opportunity to save big on your shopping. When you
          spend $2000 or more on our wide range of high-quality products, you'll
          automatically receive a generous 20% discount at checkout. Whether
          you're upgrading your tech gadgets, furnishing your home, or indulging
          in fashion and accessories, this limited-time offer is your chance to
          get more for less. Don't miss out on this amazing deal; explore our
          collection today and make the most of your shopping experience with
          us!
        </p>
        <img className="w-full h-[70vh] mt-5 rounded-tl-[340px] rounded-br-[350px]" src={"https://i.ibb.co/8mrpJPP/images.jpg"} />
      </div>
    </div>
  );
};

export default Home;
