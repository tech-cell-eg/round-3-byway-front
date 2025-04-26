import * as Switch from '@radix-ui/react-switch';

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <div className="flex">
      <Switch.Root
        checked={checked}
        onCheckedChange={onChange}
        className="relative w-10 h-6 bg-gray-300 data-[state=checked]:bg-accent-secondary rounded-full transition-colors cursor-pointer"
        aria-label="Toggle switch"
      >
        <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow-sm transition-transform translate-x-1 data-[state=checked]:translate-x-5" />
      </Switch.Root>
    </div>
  );
}

export default ToggleSwitch;
