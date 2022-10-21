const getPixels = () => {
    const screenHeight = window.innerHeight;
    return (screenHeight / 100) * percentage;
  };
  
  elem.style.minHeight = `${getPixels}px`;