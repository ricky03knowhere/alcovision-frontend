import { contextConsumer } from 'context/AlcovisionContext';
import CameraCard from './CameraCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cameraCount = 4;

const cardFull = {
  background: '#affa',
  textAlign: 'center'
};

const btnClose = {
  position: 'absolute',
  width: '3em',
  height: '3em',
  zIndex: '999',
  transform: 'translateX(-50%) scale(.7)',
  marginLeft: '98%',
  marginTop: '.4em',
  borderRadius: '100%',
  opacity: '.6',
  background: '#333'
};

const CameraContainer = ({ id, style, isScale }) => {
  const { isFullScreen, handleClose, wrapper } = contextConsumer();

  return (
    <div
      class="row"
      id={'fullscreen' + id}
      ref={wrapper}
      style={isFullScreen ? cardFull : isScale ? style : null}
    >
      <div
        className={isFullScreen ? 'd-block' : 'd-none'}
        style={btnClose}
        onClick={() => handleClose()}
      >
        <FontAwesomeIcon
          icon={'times'}
          className="me-2"
          style={{ fontSize: '1.5rem', marginTop: '.5em', color: 'white' }}
        />
      </div>
      {[...Array(cameraCount)].map((el, i) => (
        <div class={`col-md-6 ${isFullScreen ? 'p-0' : ''}`}>
          <CameraCard
            key={i}
            id={i + 1}
            busId={id}
            isFullScreen={isFullScreen}
            isScale={isScale}
          />
        </div>
      ))}
    </div>
  );
};

export default CameraContainer;
