import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Destination = () => {
  return (
    <div className="desti">
      <span className="title">DESTINATION</span>
      <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
          />
          <Card.Body>
            <Card.Title>Bali</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://prod2.bravebooking.net/clients/SV76920/media/photos/sejour/529/h_Zanzibar__Dubaei.jpg"
          />
          <Card.Body>
            <Card.Title>Zanzibar</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://cdn.dealeusedevoyages.com/sites/default/files/article/hotelborabora.jpeg"
          />
          <Card.Body>
            <Card.Title>Bora Bora</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://static.nationalgeographic.fr/files/styles/image_3200/public/huts-maldives-blue-water.ngsversion.1468523860914.adapt_.1900.1.jpg?w=1900&h=1310"
          />
          <Card.Body>
            <Card.Title>Maldives</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Destination;
