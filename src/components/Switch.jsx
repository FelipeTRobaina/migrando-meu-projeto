import moonIcon from '../assets/desktop-moon-stars.svg';
import sunIcon from '../assets/desktop-sun.svg';

// Recebemos a função toggleTheme e o estado isLightMode via props
function Switch({ toggleTheme, isLightMode }) {
  return (
    <div className="switch">
      <input 
        type="checkbox" 
        id="meu-switch" 
        className="switch-input"
        onChange={toggleTheme}
        checked={isLightMode}
      />
      <label htmlFor="meu-switch" className="switch-label">
        <span className="switch-circle">
          <img src={moonIcon} alt="Icone Lua" className="icon-moon" />
          <img src={sunIcon} alt="Icone Sol" className="icon-sun" />
        </span>
      </label>
    </div>
  );
}

export default Switch;