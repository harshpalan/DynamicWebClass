import Card from "../components/Card";

export default function CardPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <Card.Header>
              <Card.Header.Title>Card Title</Card.Header.Title>
            </Card.Header>
            <Card.Body>This is the body</Card.Body>
            <Card.Footer>This is the footer</Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <Card.Header.Title>Card Title</Card.Header.Title>
            </Card.Header>
            <Card.Body>Card with body and header/title</Card.Body>
          </Card>

          <Card>
            <Card.Body>Card with body only</Card.Body>
          </Card>

          <Card>Card without body</Card>
        </div>
        <div className="gap-4 mt-10">
          <Card>
            <Card.Header>
              <Card.Header.Title>Card Title</Card.Header.Title>
            </Card.Header>
            <Card.Image
              src="https://images.unsplash.com/photo-1526638684360-95cdcee762ce"
              alt="random"
            />
            <Card.Body>This is the body</Card.Body>
            <Card.Footer>This is the footer</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
