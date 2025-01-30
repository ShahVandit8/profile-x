export const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  };
  