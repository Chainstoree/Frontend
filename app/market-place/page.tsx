import ExploreProduct from "../components/Explore";
import Services from "../components/Services";
import Navbar from "../components/Navbar";

const marketPlace = () => {
  return (
    <section>
      <Navbar/>
      <div className="w-full h-full pt-28 p-5">
        <ExploreProduct/>
        <Services/>
      </div>
    </section>
   
  )
}

export default marketPlace