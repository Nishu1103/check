// Preloader.jsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6E9099;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 1s forwards;
  z-index: 10000;
`;

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // adjust as needed for load time
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <PreloaderContainer>
      <h1>Loading...</h1>
    </PreloaderContainer>
  ) : null;
};

export default Preloader;
