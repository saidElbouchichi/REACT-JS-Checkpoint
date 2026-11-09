import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';

// Données des 3 cartes : on les décrit dans un tableau puis on les affiche avec map()
const courses = [
  {
    title: 'ES6',
    text: 'Fonctions fléchées, destructuring, spread et modules : les bases du JavaScript moderne.',
    variant: 'primary',
  },
  {
    title: 'React JS',
    text: "Construire des interfaces avec des composants réutilisables et le DOM virtuel.",
    variant: 'success',
  },
  {
    title: 'React Bootstrap',
    text: 'Des composants Bootstrap prêts à l’emploi, écrits comme des composants React.',
    variant: 'warning',
  },
];

function App() {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand href="#home">GOMYCODE</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#courses">Cours</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* En-tête */}
        <header className="bg-light py-5 mb-4 text-center">
          <Container>
            <h1 className="display-5 fw-bold">Mon premier projet React</h1>
            <p className="lead text-muted">
              Une page construite avec React et react-bootstrap : une barre de navigation, un en-tête et 3 cartes.
            </p>
          </Container>
        </header>

        {/* 3 cartes */}
        <Container id="courses" className="mb-5">
          <Row className="g-4">
            {courses.map((course) => (
              <Col key={course.title} xs={12} md={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{course.text}</Card.Text>
                    <Button variant={course.variant}>En savoir plus</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
