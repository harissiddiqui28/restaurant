import Beverger from "./(components)/Bevergers";
import Breads from "./(components)/Breads";
import Burgers from "./(components)/Burgers";
// import Carousell from "./(components)/Carousal";
import Chicken from "./(components)/Chicken";
import Coumbo from "./(components)/Coumbo";
import Deal from "./(components)/Deal";
import Family from "./(components)/Family";
import Footer from "./(components)/Footer";
import Fries from "./(components)/Fries";
import Carousel from "./(components)/Hero";
import Menu from "./(components)/Menu";
import New from "./(components)/New";
import Nuggut from "./(components)/Nugguts";

export default function Home() {
    return (
    <>

         <Carousel/> 
         <Menu/>
         {/* <Carousell/> */}
         <New/>
         <Deal/>
         <Fries/>
         <Breads/>
         <Burgers/>
         <Coumbo/>
         <Family/>
         <Chicken/>
         <Nuggut/>
         <Beverger/>
         <Footer/>
    </>
      
     
    )
  }