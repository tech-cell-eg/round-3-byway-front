import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function SettingsPanel() {
  return (
    <section
      aria-label="User settings"
      className="absolute top-full mt-2 end-[14%] text-content-dark flex flex-col items-center gap-3 py-3 px-6 bg-surface-light-primary border-border-light rounded-small shadow-panel z-50 overflow-hidden"
    >
      <ThemeToggle />

      <hr className="w-full border-border-light" />

      <LanguageToggle />
    </section>
  );
}

export default SettingsPanel;
