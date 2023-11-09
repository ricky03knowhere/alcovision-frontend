import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contextConsumer } from 'context/AlcovisionContext';
import CameraContainer from './CameraContainer';

const cardButton = isFullScreen => {
  const buttonScale = isFullScreen ? 0.7 : 0.9;
  return { transform: `scale(${buttonScale})` };
};

function Card({ id }) {
  const { isFullScreen, handleFullScreen } = contextConsumer();

  return (
    <div className="card my-3">
      <h5 className="card-header">Bus 0{id}</h5>
      <div className="card-body">
        <CameraContainer id={id} isScale={false} />
        <div className="justify-content-end mt-3 d-flex">
          <a
            class="btn btn-info btn-sm me-1"
            style={cardButton(isFullScreen)}
            onClick={() => {
              handleFullScreen(id);
            }}
          >
            <FontAwesomeIcon icon={'external-link-alt'} className=" me-2" />
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

export default Card;
