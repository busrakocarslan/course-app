import { Row, Col, Image } from "react-bootstrap";
import { courseData } from "../helpers/data";
import Container from "react-bootstrap/Container";
import AddModal from "./AddModal";
import { useState } from "react";

const Teachers = ({ kursList, setKursList }) => {
  const [showModal, setShow] = useState(false);
  const [teacName, setteacName] = useState("");
  const [androl, setAndrol] = useState("");
  const [time, setTime] = useState("");
  // console.log(courseData);
  const addKurs = (yenikurs) => {
    setKursList([...kursList,yenikurs]);
  };

  return (
    <Container>
      <h4>EĞİTMENLERİMİZ</h4>
      <Row>
        {courseData.map(
          ({
            img,
            instructor,
            id,
            courseName,
            department,
            duration,
            studentsEnrolled,
          }) => (
            <Col xs={6} sm={4} lg={3} key={id}>
              <Image
                className="img-thumbnail teacher-img h-80"
                src={img}
                alt={instructor}
                type="button"
                onClick={() => {
                  setShow(true);
                  setteacName(instructor);
                  setAndrol(studentsEnrolled);
                  setTime(duration);
                }}
              />
              <h5>{instructor}</h5>
              <p>{department}</p>
            </Col>
          )
        )}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        teacName={teacName}
        androl={androl}
        time={time}
        addKurs={addKurs}
      />
    </Container>
  );
};

export default Teachers;

//! teacName i nasıl addModal'da kullandım?
//*1- öncelikle bu sayfada usestate tanımladım
//*2- onclick eventinin içine setTeacname i belirttim(bu olmadan olmuyor!)
//*3- en anltta addmodal a prop ile teacname i gönderdim
//*4- AddModal.jsx de teachname i önce karşıladım
//*5- sonrada AddModal da kullanacağım yere yazdım.
