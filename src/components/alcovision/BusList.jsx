import React, { useEffect, useState } from 'react';
import corner from 'assets/img/corner-4.png';
import WeeklySales from 'components/dashboards/default/WeeklySales';
import TotalOrder from 'components/dashboards/default/TotalOrder';
import { Row, Col } from 'react-bootstrap';
import {
  marketShare,
  totalOrder,
  weeklySalesData,
  weather,
} from 'data/dashboard/default';
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
    <>
      <div className="row">
        <div className="col-12">
          <h3>Ringkasan</h3>
          <h6 className='text-info'>Penumpang dan Laporan</h6>
        </div>
      </div>
      <Row className="g-3 mb-3">
        <Col md={6}>
          <WeeklySales data={weeklySalesData} />
        </Col>
        <Col md={6}>
          <TotalOrder />
        </Col>
      </Row>
      <div className="row pt-4">
        <div className="col-12">
          <h3>Daftar Bus</h3>
          <h6 className='text-info'>Aktif saat ini</h6>
        </div>
      </div>
      <div className="row mt-2">
        {buses.map((bus, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-3">
              <div
                className="bg-holder d-none d-lg-block bg-card"
                style={{ backgroundImage: `url(${corner})` }}
              ></div>
              <div className="card-body position-relative">
                <div className="row">
                  <div className="col-lg-8">
                    <h3 className="text-capitalize">Bus {bus.bus_name}</h3>
                    <p className="mt-2">{bus.bus_route}</p>
                    <a
                      className="btn btn-link ps-0 btn-sm"
                      href={`/bus-detail-info/${bus.bus_id}`}
                      // target="_blank"
                    >
                      Detail Informasi
                      <span className="fas fa-chevron-right ms-1 fs--2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusList;
