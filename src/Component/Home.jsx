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
       <h2 className="text-center mt-10 text-5xl font-semibold" >Our Products</h2>
       <p className="border-dashed border border-lime-400 text-center w-52 mx-auto mt-5" ></p>
      <div className=" w-11/12 mx-auto my-16 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {datas.map((data, idx) => (
          <div className="bg-slate-200 rounded-md" key={idx}>
            <img className="w-full h-52 rounded-t-md " src={data.image} />
            <div className="flex items-center justify-between p-3">
            <h2 className="font-semibold  bg-slate-300  hover:bg-slate-200 w-20 px-2 py-1 rounded-full " >{data.name}</h2>
            <Link to={`/products/${data.brand_name}`} className="bg-slate-300  hover:bg-slate-200 p-2 rounded-full "><FaLongArrowAltRight/></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
