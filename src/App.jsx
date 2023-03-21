import { Container} from "@mui/material";
import NavListDrawer from "./components/navbar/NavListDrawer";
import Product from "./components/Product";
import VikoCard from "./components/VikoCard";
import Navbar from "./components/navbar/Navbar";
import MiniDrawer from "./components/navbar/VariantDrawer";
import Home from "./pages/dashboard/dashboard";

export default function App(){

  return(

      <>

      <MiniDrawer/>

        <Container >

          <Home/>
      
         </Container>
      </>
          
  );
}