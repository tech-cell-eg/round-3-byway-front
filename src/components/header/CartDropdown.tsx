import DropdownContainer from '../CommonComponents/DropdownContainer';
import Icon from '../Icon';
import CartList from './CartList';
import GoToButton from './GoToButton';

function CartDropdown() {
  return (
    <DropdownContainer as="section" className="end-[7%]">
      <CartList />

      <div className="group border-t border-white">
        <GoToButton
          to="/"
          value="Go To Cart"
          className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary duration-short"
        >
          <Icon
            name="arrow-right"
            className="group-hover:animate-horizontal-move"
          />
        </GoToButton>
      </div>
    </DropdownContainer>
  );
}

export default CartDropdown;
