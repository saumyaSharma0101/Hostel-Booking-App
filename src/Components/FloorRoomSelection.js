import { Dropdown, Modal } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function FloorRoomSelection(props) {
  const { user } = props;
  const floors = [
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor",
  ];

  const roomNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedfloor, setselectedfloor] = useState("1st Floor");
  const [selectedRoom, setselectedRoom] = useState();
  const [userExist, setuserExist] = useState(true);
  const [ModalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="floorRoom">
        <b>Choose a Floor</b>
        <Dropdown>
          <Dropdown.Toggle>{selectedfloor}</Dropdown.Toggle>

          <Dropdown.Menu>
            {floors.map((floor, index) => (
              <Dropdown.Item onClick={() => setselectedfloor(floor)}>
                {floor}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className="btnbox">
          {roomNo.map((room, index) => (
            <button
              onClick={() => {
                localStorage.setItem("RN", room);
                setselectedRoom(room);
                console.log(user, userExist);
                localStorage.setItem(user, userExist);
              }}
            >
              {room}
            </button>
          ))}
        </div>
        {selectedRoom && (
          <button
            onClick={() => setModalShow(true)}
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "150px",
              height: "40px",
              borderRadius: "30px",
            }}
          >
            Book Room
          </button>
        )}
      </div>
      <Modal
        show={ModalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your room has been booked successfully.</h4>
          <p>
            Your room details are as follows:
            <div>Hostel No. {localStorage.getItem("HN")}</div>
            <div>Room No.{selectedRoom}</div>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FloorRoomSelection;
