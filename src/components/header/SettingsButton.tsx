import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

function SettingsButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus-visible:ring-0 border-none shadow-none cursor-pointer"
        >
          <Icon name="gear" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col items-center gap-1 w-56 mt-dropdown py-3 px-4 bg-surface-light-primary border-none rounded-small shadow-panel">
        <DropdownMenuGroup>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SettingsButton;
