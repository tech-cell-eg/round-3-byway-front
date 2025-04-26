type UserButtonProps = {
  handleMenuVisibility: () => void;
};

function UserButton({ handleMenuVisibility }: UserButtonProps) {
  const handleClick = () => {
    handleMenuVisibility();
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex justify-between items-ceter w-10 h-10 p-5 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-violet-600 to-90% rounded-circle cursor-pointer"
    ></button>
  );
}

export default UserButton;
