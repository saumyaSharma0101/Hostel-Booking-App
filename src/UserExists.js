function UserExists(props) {
  const { user } = props;

  return (
    <div className="userExist">
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        <b>Welcome {user}</b>
      </h3>
      <h5 style={{ marginTop: "20px" }}>
        <b>You have already booked a room.</b>
      </h5>
      <h3 style={{ marginTop: "20px" }}>
        <b>Your room details are as follows:</b>
      </h3>
      <h5 style={{ marginTop: "20px" }}>
        <b>Hostel No. {localStorage.getItem("HN")}</b>
      </h5>
      <h5 style={{ marginTop: "20px" }}>
        <b>Room No. {localStorage.getItem("RN")}</b>
      </h5>
    </div>
  );
}

export default UserExists;
