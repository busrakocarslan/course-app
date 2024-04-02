import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ showModal, handleClose,teacName,androl,time,addKurs}) {
  //! Modalı resimlere tıklanıldğında açtırmak isteğidğim için show stateini resimlerin olduğu yerde manipüle edebilmem lazım. Eğer statei burada oluşturursam setShowu resimlerin olduğu üst componente gönderemem o nedenle Liting State Up yaparak show stateini resimlerin olduğu üst componente taşıdık.

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [stName,setstName]=useState("")
  const [date,setDate]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({stName,date,teacName,time});
    
    addKurs({
      id: new Date().getTime(),
      students: stName,
      day: date,
      consulted: false,
      instructor: teacName,

    })
    handleClose()
  }
  return (   
    <>
      <Modal show={showModal} onHide={handleClose} size="lg">
        {/* Hazır yapı kullanıyorsak proparti isimlerii değiştiremiyoruz(soltaraf) ama değelerini değiştirebiliriz{süslüiçi} */}
        <Modal.Header>
          <Modal.Title> <h3 className="text-danger">Eğitmen: {teacName}</h3><small>Kurs Süresi:{time}</small><br/> <small>Kayıtlı Öğrenci:{androl}</small></Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Öğrenci Adi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lütfen öğrenci ismini giriniz."
               onChange={(e)=>setstName(e.target.value)} value={stName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tercih Edilen Kurs Kayıt Tarihi</Form.Label>
              <Form.Control
                type="date"
                placeholder="Lütfen tercih ettiğiniz kurs tarihini giriniz"
              onChange={(e)=>setDate(e.target.value)} value={date}/>
            </Form.Group>
            <div className="text-center">
            <Button variant="success" type="submit" className="me-2">
              Kaydet
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Çıkış
            </Button>
            </div>
            
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;
