const CameraStream = () => (
  <>
    <div className="row mt-2 justify-content-center">
      <div className="col-md-10">
        <div className="card my-3 p-3">
          <video height="720" autoPlay loop controls>
            {/* Network / Wi-fi IP Address */}
            <source src="http://192.168.229.44:8080" /> 
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </>
);

export default CameraStream;
