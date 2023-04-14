import "./App.css";
import Navigation from "./components/Navigation";
import { routes } from "./routes";
import { RoutesRenderer } from "./routing/RoutesRenderer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <RoutesRenderer routes={routes} />
      {/* <MobileFooter className="mobile-footer-container" /> */}
    </div>
  );
}

export default App;
