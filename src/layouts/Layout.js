import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import AuthSimpleLayout from './AuthSimpleLayout';
import is from 'is_js';
import MainLayout from './MainLayout';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
// import SettingsPanel from 'components/settings-panel/SettingsPanel';

import ErrorLayout from './ErrorLayout';
// import Landing from 'components/pages/landing/Landing';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton } from 'components/common/Toast';

import Error404 from 'components/errors/Error404';
import Error500 from 'components/errors/Error500';

// import SimpleLogin from 'components/authentication/simple/Login';
// import SimpleLogout from 'components/authentication/simple/Logout';
// import SimpleRegistration from 'components/authentication/simple/Registration';
// import SimpleForgetPassword from 'components/authentication/simple/ForgetPassword';
// import SimplePasswordReset from 'components/authentication/simple/PasswordReset';
// import SimpleConfirmMail from 'components/authentication/simple/ConfirmMail';
// import SimpleLockScreen from 'components/authentication/simple/LockScreen';

// import CardLogin from 'components/authentication/card/Login';
// import Logout from 'components/authentication/card/Logout';
// import CardRegistration from 'components/authentication/card/Registration';
// import CardForgetPassword from 'components/authentication/card/ForgetPassword';
// import CardConfirmMail from 'components/authentication/card/ConfirmMail';
// import CardPasswordReset from 'components/authentication/card/PasswordReset';
// import CardLockScreen from 'components/authentication/card/LockScreen';

// import SplitLogin from 'components/authentication/split/Login';
// import SplitLogout from 'components/authentication/split/Logout';
// import SplitRegistration from 'components/authentication/split/Registration';
import Dashboard from 'components/dashboards/default';
import AppContext from 'context/Context';
import LivePage from 'components/alcovision/LivePage';
import DetailBus from 'components/alcovision/DetailBus';
import AlertDetail from 'components/alcovision/AlertDetail';
import BusList from 'components/alcovision/BusList';
import BusDetail from 'components/alcovision/BusDetail';
// import CameraModal from 'components/alcovision/CameraStream';
import CameraStream from 'components/alcovision/CameraStream';
// import FullScreen from 'components/alcovision/FullScreen';

import socketIO from 'socket.io-client';


const socket = socketIO.connect('http://localhost:5000');
 socket.on("connect", () => {
      console.log("succesfully connected with scoket io server");
  });
const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  useContext(AppContext);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Routes>
        {/* <Route path="landing" element={<Landing />} /> */}
        <Route element={<ErrorLayout />}>
          <Route path="errors/404" element={<Error404 />} />
          <Route path="errors/500" element={<Error500 />} />
        </Route>
        {/*- ------------- Authentication ---------------------------  */}

        {/*- ------------- simple ---------------------------  */}
        {/* <Route element={<AuthSimpleLayout />}>
          <Route path="authentication/simple/login" element={<SimpleLogin />} />
          <Route
            path="authentication/simple/register"
            element={<SimpleRegistration />}
          />
          <Route
            path="authentication/simple/logout"
            element={<SimpleLogout />}
          />
          <Route
            path="authentication/simple/forgot-password"
            element={<SimpleForgetPassword />}
          />
          <Route
            path="authentication/simple/reset-password"
            element={<SimplePasswordReset />}
          />
          <Route
            path="authentication/simple/confirm-mail"
            element={<SimpleConfirmMail />}
          />
          <Route
            path="authentication/simple/lock-screen"
            element={<SimpleLockScreen />}
          />
        </Route> */}

        {/*- ------------- Card ---------------------------  */}
        {/* <Route path="authentication/card/login" element={<CardLogin />} />
        <Route
          path="authentication/card/register"
          element={<CardRegistration />}
        />
        <Route path="authentication/card/logout" element={<Logout />} />
        <Route
          path="authentication/card/forgot-password"
          element={<CardForgetPassword />}
        />
        <Route
          path="authentication/card/reset-password"
          element={<CardPasswordReset />}
        />
        <Route
          path="authentication/card/confirm-mail"
          element={<CardConfirmMail />}
        />
        <Route
          path="authentication/card/lock-screen"
          element={<CardLockScreen />}
        /> */}

        {/*- ------------- Split ---------------------------  */}

        {/* <Route path="authentication/split/login" element={<SplitLogin />} />
        <Route path="authentication/split/logout" element={<SplitLogout />} />
        <Route
          path="authentication/split/register"
          element={<SplitRegistration />}
        /> */}

        {/* //--- MainLayout Starts  */}
        <Route element={<MainLayout />}>
          {/*- ------------- Alcovision ---------------------------  */}
          <Route path="/" element={<Dashboard />} />
          <Route path="bus-list" element={<BusList />} />
          <Route path="bus-detail-info/:id" element={<BusDetail socket={socket}/>} />
          <Route path="camera-stream/" element={<CameraStream />} />
          <Route path="live-camera" element={<LivePage />} />
          <Route path="bus-detail/:id" element={<DetailBus/>} />
          <Route
            path="alert-detail/:busId/:cameraId"
            element={<AlertDetail />}
          />
        </Route>
        {/* <Route path="full-screen/:busId/" element={<FullScreen />} /> */}
        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
      {/* <SettingsToggle /> */}
      {/* <SettingsPanel /> */}
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.TOP_LEFT}
      />
    </>
  );
};

export default Layout;
