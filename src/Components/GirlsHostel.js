import { useHistory } from "react-router-dom";

function GirlsHostel() {
  const history = useHistory();
  const hostels = ["G1", "G2", "G3", "G4", "G5", "G6"];

  function saveRoomNo(index) {
    localStorage.setItem("HN", `G${index + 1}`);
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

export default GirlsHostel;
