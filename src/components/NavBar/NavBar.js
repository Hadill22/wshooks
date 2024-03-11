import {
  Form,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./style.css";
import AddMovies from "../AddMovie/AddMovie";
const NavBar = ({
  setRatingChange,
  setSearchInput,
  ratingChange,
  handleShow,
  handleClose,
  show,
  setNewMovie,
  handleSave,
  newMovie,
}) => {
  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  //console.log(searchInput);
  return (
    <>
      <Navbar expand="lg" bg="dark" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/movie-details">Movie Details</Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Button variant="dark" onClick={handleShow}>
              Add New Movie
            </Button>

            <Form className="d-flex">
              <Form.Control
                onChange={handleChange}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <ReactStars
                count={5}
                value={ratingChange}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddMovies
        handleClose={handleClose}
        show={show}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
      />
    </>
  );
};

export default NavBar;
