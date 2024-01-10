import{
  chakra
} from "@chakra-ui/react"
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <chakra.div   >
      <Nav/>
       <Home/>
    </chakra.div>
  );
}

export default App;
