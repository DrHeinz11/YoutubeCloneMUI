import "./App.css";
import Routes from "./routes/Routes";
import NavigationLayout from "./templates/NavigationLayout";

function App() {
  return (
    // <Container
    //   variant={"overlay"}
    //   backgroundColor={"#ccc"}
    //   as="main"
    //   minH={"100vh"}
    //   maxW={"1550px"}
    //   px={0}
    //   margin={'0 auto !important'}
    //   position={"relative"}
    // >
    <NavigationLayout>
      <Routes />
    </NavigationLayout>
    // </Container>
  );
}

export default App;
