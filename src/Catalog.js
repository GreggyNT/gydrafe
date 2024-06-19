import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5083/api/Pump/slim'); // replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col key={index} md={4} sm={6}>
            <Card>
              <Card.Img variant="top" src={'http://localhost:5083/api/Pump/imgs/'+index } />
              <Card.Body>
              <Link to = {'/items/'+item.id}>
                <Card.Title>{item.name}</Card.Title>
                </Link>
                <Card.Text>
                  Nominal Pressure: {item.nominalPressure}
                </Card.Text>
                <Card.Text>
                  Max Pressure: {item.maxPressure}
                </Card.Text>
                <Card.Text>
                  Volume: {item.volume}
                </Card.Text>
              </Card.Body>
            </Card>
           
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;