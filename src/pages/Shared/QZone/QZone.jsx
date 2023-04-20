import React from "react";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
  return (
    <div style={{ backgroundColor: "#ebebeb" }} className="my-5  p-4">
      <h3 className="fw-bold mb-4">Q-Zone</h3>
      <div className="d-flex flex-column gap-5">
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" />
        <img src={qZone3} alt="qZone3" />
      </div>
    </div>
  );
};

export default QZone;
