import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import CounterPage from "./pages/CounterPage";
import ModalPage from "./pages/ModalPage";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4">
      <Menu />
      <div className="col-span-5">
        <Route path="/">
          <p>Home</p>
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={46} />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}
