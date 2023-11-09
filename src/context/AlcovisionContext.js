import { createContext, useContext, useRef, useState } from 'react';

export const AlcovisionContext = createContext();

export const contextConsumer = () => {
  return useContext(AlcovisionContext);
};

export const ContextProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const wrapper = useRef('');

  const handleFullScreen = id => {
    // console.log(wrapper.current);
    const container = wrapper.current;
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      /* Safari */
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      /* IE11 */
      container.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const handleClose = () => {
    setIsFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  return (
    <AlcovisionContext.Provider
      value={{ isFullScreen, handleFullScreen, handleClose, wrapper }}
      children={children}
    />
  );
};
export default ContextProvider;
