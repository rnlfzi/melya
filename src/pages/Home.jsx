import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { BsFillCursorFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";
import Bg from "../components/Bg";

const Home = () => {
  return (
    <Container className="p-3">
      <Row
        style={{
          position: "relative",
          display: "grid",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Col className="d-grid gap-3">
          <Card className="bg-transparent border-0" id="blur">
            <Card.Img src="/images/avatar.jpg" className="rounded-circle p-5" />
            <Card.Header className="text-center text-white fw-bold fs-3 border-0 shadow">
              Melya Ayu Mahasindi
            </Card.Header>
            <Card.Body className="text-center text-white">
              <Card.Title>Semprotulations!!!</Card.Title>
              <Card.Text>
                Selamat yak, goodjob untuk hari ini.
                <br />
                tetep semangat, <strong>KEEP ON WALKING.</strong>
                <br />
                <span className=" fs-6">Kamis, 9/3 23</span>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0 d-grid justify-content-center bg-transparent">
              <Button
                disabled
                className="d-flex justify-content-center align-items-center gap-2 rounded-pill"
              >
                <BsFillCursorFill /> {""} Lanjut
              </Button>
            </Card.Footer>
          </Card>
          <Card className="bg-transparent border-0 p-3" id="blur">
            <audio src="/images/musix.mp3" autoPlay />
            <div className="d-flex">
              <img src="/images/gambar.jpeg" alt="gambar" height={150} />
              <div className="d-grid mx-3 my-2 align-items-center w-100">
                <div>
                  <h4 className="text-white">it's a beautiful day</h4>
                  <p className="text-white">evan mchugh</p>
                </div>
                <div className="d-flex gap-2 justify-content-center">
                  <Button
                    disabled
                    className=" d-flex align-items-center bg-transparent border-0"
                  >
                    <IoPlaySkipBack />
                  </Button>
                  <Button
                    disabled
                    className=" d-flex align-items-center bg-transparent border-0"
                  >
                    <FaPlay />
                  </Button>
                  <Button
                    disabled
                    className=" d-flex align-items-center bg-transparent border-0"
                  >
                    <IoPlaySkipForward />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Bg />
    </Container>
  );
};

export default Home;
