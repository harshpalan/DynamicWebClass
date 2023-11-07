import Link from './components/Link';
import CardPage from './pages/CardPage';

export default function App() {
  return (
    <div>
      <div>
      <Link to="/button">Button</Link>
      </div>
      <div>
      <Link to="/accordion">Accordion</Link>
      </div>
      <CardPage />
    </div>
  );
}