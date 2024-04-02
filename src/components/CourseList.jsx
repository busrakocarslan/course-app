import Container from "react-bootstrap/Container";
import { appointmentData } from "../helpers/data";
import { Row, Col } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
//? optional chaining operatörü
const CourseList = ({ kursList, setKursList }) => {
  const handleDelete=(id)=>{
    setKursList(kursList?.filter(app=>app.id !== id))
  }
  const handleToogle=(id)=>{
    setKursList(kursList?.map(app=>app.id==id? {...app,consulted:!app.consulted}:app))
    }


  return (
    <Container className=" listCon">
      <h3>Kaydolunan kurslar</h3>
      {kursList?.length ? (
        kursList.map(({ id, students, day, consulted, instructor }) => (
          <Row key={id} className="kursListe justify-content-between align-items-center mx-auto">
            <Col>
              <h4>{students}</h4>
            </Col>
            <Col>
              <h5>{instructor}</h5>
            </Col>

            <Col className="text-end">
            {consulted ? (
                <span className="text-success display-6 me-3">Kayıt Tamamlandı</span>
              ):(
              <TiTickOutline type="button" className="text-success display-6 me-3" onClick={()=>handleToogle(id)}/>)}
              <RiDeleteBin2Fill type="button" className="text-light display-6" onClick={()=>handleDelete(id)} />
            </Col>
          </Row>
        ))
      ) : (
        <p>Kurs Kaydı Bulunmamaktadır.</p>
      )}
    </Container>
  );
};

export default CourseList;
