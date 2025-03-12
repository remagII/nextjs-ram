import Hero from "./components/hero";
import Navbar from "./components/navbar";
import './styles.css';
import './tabletQuery.css';


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <>
      <div className="container">

      <Navbar/>
      <Hero/>
      </div>
      </>

    </div>
  );
}
