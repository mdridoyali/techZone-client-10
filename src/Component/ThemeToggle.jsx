
import  { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light'); 

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark'); 
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
 
  useEffect(() => {
    if (storedTheme) {
      document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
      document.body.classList.add(storedTheme);
    }
  }, [storedTheme, theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <img className="w-8 mr-5" src={'https://i.ibb.co/qrHcLPN/sunny-day.png'} alt="Light Mode" />
      ) : (
        <img className="w-8 mr-5" src={'https://i.ibb.co/R9GwpJs/night-mode.png'} alt="Dark Mode" />
      )}
    </button>
  );
};

export default ThemeToggle;






