import { useEffect, useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Icon from '../Icon';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = (checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', checked);
    localStorage.setItem('theme', theme);
    setIsDark(checked);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="flex items-center gap-3">
      <Icon name="sun" />
      <ToggleSwitch
        checked={isDark}
        onChange={toggleTheme}
        //   label={isDark ? 'Dark' : 'Light'}
      />
      <Icon name="moon" />
    </div>
  );
}

export default ThemeToggle;
