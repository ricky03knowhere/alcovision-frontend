import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CameraCard } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cameraCount = 4;

const AlertDetail = () => {
  const { busId, cameraId } = useParams();

  let busData = {
    vehicleId: 'D 24332 ER',
    driverName: 'ujang nurjaman',
    telephone: '+62584852039823'
  };
  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <div className="card my-3 p-3">
          <h5 className="card-header">Detail - Bus 0{busId}</h5>
          <div className="card-body">
            <div className="details">
              <h6>Vehicle &emsp; &emsp; &emsp;: {busData['vehicleId']}</h6>
              <h6>Driver Name &emsp;: {busData['driverName']}</h6>
              <h6>Telephone &emsp;&emsp;: {busData['telephone']}</h6>
            </div>
            <div className="card text-white bg-warning mt-5 text-center mx-5 py-3">
              <div className="card-body">
                <p className="card-text">
                  <FontAwesomeIcon
                    icon={'exclamation-triangle'}
                    className="fa-2x me-3"
                  />
                  <b>Camera #0{cameraId} :</b> Driver is detected to be sleepy,
                  please replace him or rest for a while.
                </p>
                {/* <div className="justify-content-end d-flex">
                  <a
                    href="#!"
                    className="btn btn-success btn-sm"
                    style={cardButton}
                    onClick={() => window.history.back()}
                  >
                    <FontAwesomeIcon icon={'arrow-left'} className="me-2" />
                    Back
                  </a>
                </div> */}
              </div>
            </div>
            <div className="justify-content-end d-flex mt-5 me-5">
              <a
                href="#!"
                className="btn btn-success btn-sm"
                onClick={() => window.history.back()}
              >
                <FontAwesomeIcon icon={'arrow-left'} className="me-2" /> Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDetail;
