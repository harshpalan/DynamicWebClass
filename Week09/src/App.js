import Link from "./components/Link";

export default function App() {
  return (
    <div>
      <div>
        <Link to="/button">Button</Link>
      </div>
      <div>
        <Link to="/accordion">Accordion</Link>
      </div>
      <Link to="/card">Card</Link>
    </div>
  );
}
