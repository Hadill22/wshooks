import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
//import Card from "react-bootstrap/Card";
import "./style.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <>
        <Card
          style={{ width: "18rem", margin: "10px", padding: "0px", border: "1px solid #ccc",
            height: "63vh",
            marginInline: "30px",
            marginTop: "40px",
          }}
          className="movie-card"
        >
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>
              <Link to={`/movie-details/${movie.id}`}>{movie.title}</Link>
            </Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>
              <ReactStars
                count={5}
                value={movie.rating}
                // onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </Card.Text>
            {/* <Button variant="dark" onClick={() => showMovieDetails(movie.id)}>
              trailer
            </Button> */}
            {/*<Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default MovieCard;
