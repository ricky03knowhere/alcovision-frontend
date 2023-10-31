import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CameraCard } from './Card';

const cardStyle = {
  height: '110vh'
};

const handleOnload = () => {
  const container = document.getElementById('fullscreen');
  if (container.requestFullscreen) {
    container
      .requestFullscreen()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // setContainerSize(val => {
    //   return { height: container.offsetHeight, width: container.offsetWidth };
    // });
  } else if (container.webkitRequestFullscreen) {
    /* Safari */
    container.webkitRequestFullscreen();
  } else if (container.msRequestFullscreen) {
    /* IE11 */
    container.msRequestFullscreen();
  }
};

const cameraCount = 4;
export const FullScreenCard = ({ id }) => {
  const [container, setContainer] = useState(document.body);
  // useEffect(() => {
  // },[]);
  return (
    <div className="card my-3" style={cardStyle}>
      <div className="card-body">
        <div
          class="row justify-content-center"
          id="fullscreen"
          onLoad={handleOnload}
        >
          {[...Array(cameraCount)].map((el, i) => (
            <div class="col-md-6">
              <CameraCard key={i} id={i + 1} busId={id} isFullScreen={true} />
            </div>
          ))}
        </div>
        <div className="justify-content-end mt-3 d-flex">
          <a
            href={'#!'}
            class="btn btn-success btn-sm"
            onClick={() => window.history.back()}
          >
            <FontAwesomeIcon icon={'arrow-left'} className="me-2" /> Back
          </a>
        </div>
      </div>
    </div>
  );
};

const FullScreen = () => {
  const { busId } = useParams();
  return <FullScreenCard id={busId} fullScreen={true} />;
};

export default FullScreen;
