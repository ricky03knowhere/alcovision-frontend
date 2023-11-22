import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// const CameraModal = () => (
//   <>
//   <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">Launch demo modal</button>
// <div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content position-relative">
//       <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
//         <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body p-0">
//         <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
//           <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
//         </div>
//         <div class="p-4 pb-0">
//           <form>
//             <div class="mb-3">
//               <label class="col-form-label" for="recipient-name">Recipient:</label>
//               <input class="form-control" id="recipient-name" type="text" />
//             </div>
//             <div class="mb-3">
//               <label class="col-form-label" for="message-text">Message:</label>
//               <textarea class="form-control" id="message-text"></textarea>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div class="modal-footer">
//         <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
//         <button class="btn btn-primary" type="button">Understood </button>
//       </div>
//     </div>
//   </div>
// </div>
//   </>
// );

const BusDetail = () => {
  const [data, setData] = useState({ alerts: [], bus: [] });
  const { id } = useParams('id');

  const serverURL = 'http://127.0.0.1:5000/api/v1/';

  useEffect(() => {
    fetch(`${serverURL}alerts/${id}`)
      .then(async res => {
        const getData = await res.json();
        setData(getData.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="row mt-2 justify-content-center">
      <div className="col-md-10">
        <div className="card my-3 p-3">
          <h4 className="card-header text-capitalize">
            Bus {data.bus[0]?.bus_name}
          </h4>
          <div className="card-body" style={{ minHeight: '38em' }}>
            <div className="details">
              <h6>
                Status &emsp;:{' '}
                <span className="badge rounded-pill bg-success">
                  Berjalan <FontAwesomeIcon icon={'car-side'} />
                </span>
              </h6>
              <h6>Bus ID &emsp; : {data.bus[0]?.bus_id}</h6>
              <h6 className="text-capitalize">
                Rute &emsp;&emsp;: {data.bus[0]?.bus_route}
              </h6>
              <h6 className="text-capitalize">
                Info &emsp;&emsp; : {data.bus[0]?.information}
              </h6>
            </div>
            <a
              className="btn btn-info my-3"
              data-bs-toggle="modal"
              data-bs-target="#camera-modal"
              href='/camera-stream'
            >
              <FontAwesomeIcon icon={'camera'} className="me-2" /> Pantau Siaran
              Langsung
            </a>
            {/* <CameraModal /> */}

            <h5 className="mb-3 mt-5">Daftar Peringatan</h5>

            <div className="table-responsive scrollbar">
              <table className="table">
                <thead className="table-info">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">Kategory</th>
                    <th className="text-end" scope="col">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.alerts[0]?.id ? (
                    data.alerts?.map((alert, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          {new Date(alert.created_at).toLocaleDateString(
                            'gb-GB',
                            {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit'
                            }
                          )}
                        </td>
                        <td>{alert.category}</td>
                        <td className="text-end">
                          <div>
                            <button
                              className="btn btn-link p-0 me-3"
                              type="button"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="view"
                            >
                              <FontAwesomeIcon icon={'eye'} />
                            </button>
                            <button
                              className="btn btn-link p-0"
                              type="button"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={'edit'} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h6 className="m-3 text-center">
                      Bus ini belum memiliki peringatan
                    </h6>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
