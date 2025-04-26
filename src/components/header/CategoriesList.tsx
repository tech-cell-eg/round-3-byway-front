import DropdownContainer from '../CommonComponents/DropdownContainer';
import CategoryItem from './CategoryItem';

function CategoriesList() {
  return (
    <DropdownContainer as="ul" className="start-[12%] min-w-44">
      {Array.from({ length: 6 }).map((_, index) => (
        <CategoryItem key={index} index={index} />
      ))}
    </DropdownContainer>
  );
}

export default CategoriesList;
