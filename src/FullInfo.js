import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:5083/api/Pump/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
            <Card.Img variant="top" src={'http://localhost:5083/api/Pump/imgs/'+item.id } />
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>Nominal Pressure:</strong> {item.nominalPressure}
              </Card.Text>
              <Card.Text>
                <strong>Max Pressure:</strong> {item.maxPressure}
              </Card.Text>
              <Card.Text>
                <strong>Is Charging Pump:</strong> {item.isChargingPump ? 'Yes' : 'No'}
              </Card.Text>
              <Card.Text>
                <strong>Volume:</strong> {item.volume}
              </Card.Text>
              <Card.Text>
                <strong>Regulator:</strong> {item.regulator}
              </Card.Text>
              <Card.Text>
                <strong>Rotation:</strong> {item.rotation ? 'Right' : 'Left'}
              </Card.Text>
              <Card.Text>
                <strong>Shaft Type:</strong> {item.shaftType}
              </Card.Text>
              <Card.Text>
                <strong>Flange Type:</strong> {item.flangeType}
              </Card.Text>
              <Card.Text>
              <strong>Details:</strong> {item.details}
              </Card.Text>
              <Card.Text>
                <strong>Flange Type:</strong> {item.connectionType}
              </Card.Text>
              <Card.Text>
              <strong>Details:</strong> {item.throughShaft}
              </Card.Text>
              </Card.Body>
              </Card>
              </Col>    
              </Row>
              </Container>  
);};
export default ItemDetails;