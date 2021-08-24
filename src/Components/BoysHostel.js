import { useHistory } from "react-router-dom";

function BoysHostel() {
  const history = useHistory();
  const hostels = ["B1", "B2", "B3", "B4", "B5", "B6"];

  function saveRoomNo(index) {
    //console.log(index);
    localStorage.setItem("HN", `B${index + 1}`);
    history.push({ pathname: "/slectroomandfloor" });
  }

  return (
    <>
      <div className="BG">
        <h2>Choose a Hostel</h2>
        <div>
          {hostels.map((hostel, index) => {
            return (
              <button
                style={{ borderRadius: "20%" }}
                onClick={() => saveRoomNo(index)}
              >
                {hostel}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BoysHostel;
