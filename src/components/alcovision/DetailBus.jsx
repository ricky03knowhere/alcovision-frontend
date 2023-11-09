import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CameraContainer from './CameraContainer';
import { contextConsumer } from 'context/AlcovisionContext';

const DetailBus = () => {
  const { id } = useParams('id');

  const { handleFullScreen } = contextConsumer();

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
            <CameraContainer
              id={id}
              isScale={true}
              style={{ transform: 'scale(.6)', maxHeight: '10em' }}
            />
            <div
              className="pb-3 me-2"
              style={{ position: 'absolute', bottom: '0', right: '1em' }}
            >
              <a
                href="#!"
                class="btn btn-info btn-sm me-2"
                onClick={() => handleFullScreen()}
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
