import React from "react";
import Layouts from "../Components/Layouts";
import Navbar from "../Components/Navbar";
import { Row, Col,  Card, CardText, CardBody,
    CardTitle, Button
   } from 'reactstrap';


export default function Todo() {
  return (
    <div className="container">
      <Layouts title="Todo List" />
      <Navbar />
        <div className="d-flex mt-10 text-center">
      <Col>
      <Row>
        <Col>
        <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Winton Task</u></CardTitle>
          <CardText>
              <li>Belajar PHP 7</li>
              <li>Membuat Login save Database</li>
              <li>Membuat Register save Database</li>
              <li>Integrasi Register dan Login ke SB-Admin</li>

              <p>--- Jika Sudah ---</p>
              <li>Boleh Langsung Ke Laravel</li>
              

              <p className="mt-5 text-muted">Set Scheduled : 5 Juni </p>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        <Col>
        <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Diyas Task</u></CardTitle>
          <CardText>
                <li>Lanjut Mockup UX</li>
                <li>Lanjut Chat, Add Class</li>
                <li>Abis Mockup bikin UI</li>
                <p className="mt-3">----Revisi----</p>
                <li>Profile Jangan kayak Facebook</li>
                <li>Saran Warna lebih bagus ? Tetap hitam tapi yang lain</li> 
        

              <p className="mt-5 text-muted">Set Scheduled : 8 Juni </p>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        <Col>
        <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Lutfi Task</u></CardTitle>
          <CardText>
            <li>Bikin Profile Setting</li>
            <li>Rapihin UI</li>
            <li>Parsing POST Request Login [Kalo Api dah jadi yang Login]</li>


            <p className="mt-5 text-muted">Set Scheduled : 8 Juni </p>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        <Col>
        <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Mada Task</u></CardTitle>
          <CardText>
            <li>Bikin Profile User</li>
            <li>Rapihin UI</li>


            <p className="mt-5 text-muted">Set Scheduled : 8 Juni </p>
          </CardText>
        </CardBody>
      </Card>
        </Col>
      </Row>

      <Row className="mt-20 justify-center text-center">
      <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Raihan Task</u></CardTitle>
          <CardText>
            <li>Belajar Laravel 8</li>
            <li>Coba Bikin API Register atau Login dulu</li>
            <li>Jangan Lupa bikin Endpoint</li>



            <p className="mt-5 text-muted">Set Scheduled : 8 Juni </p>
          </CardText>
        </CardBody>
      </Card>
      <Col className="d-flex justify-end text-center">
      <Card>
        <CardBody>
          <CardTitle tag="h5"><u>Dio Task</u></CardTitle>
          <CardText>
            <li>Bantu Diyas Bikin Mockup</li>
            <li>Rapihin UI Design di Flutter nya</li>
            <li>Belajar Laravel 8 + Integrasi API</li>



            <p className="mt-5 text-muted">Set Scheduled : 8 Juni </p>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
      
      </Col>
      </div>
      </div>
  );
}
