import React, { useEffect, useState } from 'react';
import corner from 'assets/img/corner-4.png' 
const BusList = () => {
  const [buses, setBuses] = useState([]);

  const serverURL = 'http://127.0.0.1:5000/api/v1/';

  useEffect(() => {
    fetch(serverURL + 'buses')
      .then(async data => {
        const getData = await data.json();
        setBuses(getData.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="row mt-2">
      {buses.map((bus, i) => (
        <div className="col-md-6" key={i}>
          <div className="card mb-3">
            <div
              className="bg-holder d-none d-lg-block bg-card"
              style={{ backgroundImage: `url(${corner})` }}
            ></div>
            <div className="card-body position-relative">
              <div className="row">
                <div className="col-lg-8">
                  <h3 className="text-capitalize">Bus {bus.bus_name}</h3>
                  <p className="mt-2">{bus.information}</p>
                  <a
                    className="btn btn-link ps-0 btn-sm"
                    href={`/bus-detail-info/${bus.bus_id}`}
                    // target="_blank"
                  >
                    Detail Bus
                    <span className="fas fa-chevron-right ms-1 fs--2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusList;
