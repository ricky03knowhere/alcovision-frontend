import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cctvImage from 'assets/img/cctv.avif';

let cameraTitle = {
  background:
    'linear-gradient(90deg, rgba(255,255,255,0.65) 60%, rgba(0,0,0,0) 100%)',
  padding: '3px 1em',
  fontSize: '.8rem',
  color: 'black',
  display: 'block'
};

let alertCard = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  background: '#f006',
  textAlign: 'center',
  padding: '2em'
};

const getScale = isFullScreen => {
  return { transform: isFullScreen ? 'scale(1.4)' : 'scale(1.8)' };
};

const getTitleScale = isFullScreen => {
  if (isFullScreen) {
    return { transform: 'scale(1.4)', marginLeft: '1em', marginBottom: '.4em' };
  } else {
    return { transform: 'scale(1.8)', marginLeft: '3em', marginBottom: '.8em' };
  }
};

const getFullScreen = {
  card: { height: '50vh', borderRadius: 0 },
  alert: { transform: 'scale(1.5)' }
};

const alertStyle = {
  color: '#ff3',
  textShadow:
    '.7px .7px 0 #000,-.7px .7px 0 #000,-.7px -.7px 0 #000,.7px -.7px 0 #000'
};

const cardButton = isFullScreen => {
  const buttonScale = isFullScreen ? 0.7 : 0.9;
  return { transform: `scale(${buttonScale})` };
};

const CameraCard = ({ id: cameraId, isScale, isFullScreen, busId }) => {
  return (
    <div
      className={`card bg-dark text-white overflow-hidden ${
        !isFullScreen ? 'mb-3' : null
      }`}
      data-bs-theme="light"
      style={isFullScreen ? getFullScreen.card : null}
    >
      <div className="card-img-top">
        <img className="img-fluid" src={cctvImage} alt="Card image" />
      </div>
      <div className="card-img-overlay d-flex align-items-end p-0">
        <div>
          <span
            style={
              isScale
                ? {
                    ...cameraTitle,
                    ...getTitleScale(isFullScreen)
                  }
                : isFullScreen
                ? { ...cameraTitle, ...getTitleScale(isFullScreen) }
                : { ...cameraTitle }
            }
          >
            Camera #0{cameraId}
          </span>
        </div>
      </div>
      {cameraId === 1 ? (
        <div
          className="alert-card align-items-center justify-content-center d-flex"
          style={
            isScale
              ? { ...alertCard, ...getScale(isFullScreen) }
              : isFullScreen
              ? { ...alertCard, ...getFullScreen.alert }
              : { ...alertCard }
          }
        >
          <div>
            <FontAwesomeIcon
              icon={'exclamation-triangle'}
              className="fa-3x mb-3"
              style={alertStyle}
            />
            <h6 style={alertStyle}>Drowness Detected</h6>
            <a
              href={`/alert-detail/${busId}/${cameraId}`}
              class="btn btn-warning btn-sm"
              style={cardButton(isFullScreen)}
            >
              <FontAwesomeIcon icon={'info-circle'} className="me-2" /> Detail
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CameraCard;
