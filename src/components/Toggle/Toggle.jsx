import React, { useContext } from 'react';
import { ThemeContext } from '../../Context';
import moon from '../../img/moon.png';
import sun from '../../img/sun.png';
import '../Toggle/Toggle.css';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="t">
      <img src={sun} alt="sun" className="t-icon" />
      <img src={moon} alt="moon" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  );
};

export default Toggle;
