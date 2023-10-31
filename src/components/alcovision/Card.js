import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cctvImage from 'assets/img/cctv.avif';
import { useEffect } from 'react';
import { useState } from 'react';

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

const getScale = {
  transform: 'scale(1.8)'
  // paddingTop: '25%'
};

const getFullScreen = {
  card: { height: '50vh', borderRadius: 0 },
  title: { transform: 'scale(1.5)', margin: '0 1.8em .5em' },
  alert: { transform: 'scale(1.5)', transform: 'translateY(50%)' }
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

const CameraCard = ({
  id: cameraId,
  isScale,
  isFullScreen,
  busId,
  handleClick
}) => {
  // console.log(id);
  alertCard = isScale
    ? { ...alertCard, ...getScale }
    : // : isFullScreen
      // ? { ...alertCard, ...getFullScreen.alert }
      { ...alertCard };
  cameraTitle = isScale
    ? { ...cameraTitle, transform: 'scale(1.8)', marginLeft: '3em' }
    : isFullScreen
    ? { ...cameraTitle, ...getFullScreen.title }
    : { ...cameraTitle };
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
          <span style={cameraTitle}>Camera #0{cameraId}</span>
        </div>
      </div>
      {cameraId === 1 ? (
        <div
          className="alert-card align-items-center justify-content-center d-flex"
          style={alertCard}
        >
          <div
            style={
              isFullScreen
                ? { transform: 'scale(1.5)' }
                : { transform: 'translateY(10%)' }
            }
          >
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
              // onClick={() => handleClick(id)}
            >
              <FontAwesomeIcon icon={'info-circle'} className="me-2" /> Detail
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const cameraCount = 4;
// let cardStyle = {
//   height: '100vh',
//   display: 'block'
// };

const cardFull = {
  background: '#affa',
  textAlign: 'center'
  // justifyContent: 'center'
};

function Card({ id }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isClick, setIsClick] = useState(false);
  // const [containerSize, setContainerSize] = useState({ height: 0, width: 0 });

  const handleFullScreen = id => {
    const container = document.getElementById(`fullscreen${id}`);
    console.log(container);
    if (container.requestFullscreen) {
      container.requestFullscreen();
      // setContainerSize(val => {
      //   val = { height: container.offsetHeight, width: container.offsetWidth };
      //   return val;
      // });
    } else if (container.webkitRequestFullscreen) {
      /* Safari */
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      /* IE11 */
      container.msRequestFullscreen();
    }
    // checkFullScreen();
    // console.log(
    //   `screen W=> ${container.offsetWidth}, H => ${container.offsetHeight}`
    // );
    // console.log('Exit fullscree => ', container.exitFullscreen());
    // setIsClick(false);
    checkIsFull(id);
  };

  const checkIsFull = (id) => {
    const container = document.getElementById(`fullscreen${id}`);

    let test =
      container?.offsetWidth == window.innerWidth &&
      container?.offsetHeight == window.innerHeight;
    console.log('isFull => ', test);
    setIsFullScreen(true);
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Escape') {
        event.preventDefault();

        // 👇️ your logic here
        console.log('Escape clicked');
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    // <div className="card my-3" style={isFullScreen ? cardStyle : null}>
    <div className="card my-3">
      <h5 className="card-header">Bus 0{id}</h5>
      <div className="card-body">
        <div
          class="row"
          id={'fullscreen' + id}
          style={isFullScreen ? cardFull : null}
        >
          {[...Array(cameraCount)].map((el, i) => (
            <div class={`col-md-6 ${isFullScreen ? 'p-0' : ''}`}>
              <CameraCard
                key={i}
                id={i + 1}
                busId={id}
                isFullScreen={isFullScreen}
              />
            </div>
          ))}
        </div>
        <div className="justify-content-end mt-3 d-flex">
          <a
            // href={'/full-screen/' + id}
            class="btn btn-info btn-sm me-1"
            style={cardButton(isFullScreen)}
            onClick={() => {
              handleFullScreen(id);
            }}
          >
            <FontAwesomeIcon icon={'external-link-alt'} className=" me-2" />{' '}
            Full Screen
          </a>
          <a
            href={'/bus-detail/' + id}
            class="btn btn-success btn-sm"
            style={cardButton(isFullScreen)}
          >
            <FontAwesomeIcon icon={'info-circle'} className="me-2" /> Detail
          </a>
        </div>
      </div>
    </div>
  );
}

export { Card, CameraCard };
