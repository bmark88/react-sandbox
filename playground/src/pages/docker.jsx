import React, { useState } from 'react';

import Navbar from '../components/Docker/Navbar/navbar.component';
import IntroductionResources from '../components/Docker/IntroductionResources/introduction-resources.component';

const Docker = () => {
  // If user does not have a theme set, default to day theme
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'day'
  );

  return (
    <>
      <Navbar setTheme={setTheme} theme={theme} />
      <IntroductionResources theme={theme} />
    </>
  );
};

export default Docker;