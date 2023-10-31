import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CameraCard } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cameraCount = 4;

const DetailBus = () => {
  // const [isDetail, setIsDetail] = useState(false);
  // const [cameraId, setCameraId] = useState('');
  const { id } = useParams('id');
  const [isFullScreen, setIsFullScreen] = useState(false);

  // const handleClick = id => {
  //   setIsDetail(true);
  //   setCameraId(id);
  // };

  let busData = {
    vehicleId: 'D 24332 ER',
    driverName: 'ujang nurjaman',
    telephone: '+62584852039823'
  };
  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <div className="card my-3 p-3">
          <h5 className="card-header">Detail - Bus 0{id}</h5>
          <div className="card-body" style={{ minHeight: '38em' }}>
            <div className="details">
              <h6>Vehicle &emsp; &emsp; &emsp;: {busData['vehicleId']}</h6>
              <h6>Driver Name &emsp;: {busData['driverName']}</h6>
              <h6>Telephone &emsp;&emsp;: {busData['telephone']}</h6>
            </div>
            <div
              class="row"
              style={{ transform: 'scale(.6)', maxHeight: '10em' }}
              id={'fullscreen' + id}
            >
              {[...Array(cameraCount)].map((el, i) => (
                <div class="col-md-6">
                  <CameraCard
                    id={i + 1}
                    isScale={true}
                    // handleClick={handleClick}
                    busId={id}
                  />
                </div>
              ))}
            </div>
            <div
              className="pb-3 me-2"
              style={{ position: 'absolute', bottom: '0', right: '1em' }}
            >
              <a
                href="#!"
                class="btn btn-info btn-sm me-2"
                // onClick={() => handleFullScreen(setIsFullScreen, id)}
              >
                <FontAwesomeIcon icon={'external-link-alt'} className="me-2" />{' '}
                Full Screen
              </a>
              <a href="/live-camera" class="btn btn-success btn-sm">
                <FontAwesomeIcon icon={'arrow-left'} className="me-2" /> Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBus;
