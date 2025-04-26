type DropdownContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'ul' | 'div';
};

function DropdownContainer({
  children,
  className,
  as = 'div',
}: DropdownContainerProps) {
  const Component = as;

  return (
    <Component
      className={`absolute top-full mt-2 w-fit flex flex-col bg-surface-light-primary border border-zinc-100 rounded-small shadow-panel z-50 overflow-hidden ${className}`}
    >
      {children}
    </Component>
  );
}

export default DropdownContainer;
