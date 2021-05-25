import React, { FunctionComponent, useState } from 'react';
import { CategoryFilterStyles } from './CategoryFilter.styles';

interface CategoryProps {
  categories: string[];
  activeCategory?: string | null | undefined;
  setCategories: any;
}

const CategoryFilter: FunctionComponent<CategoryProps> = ({
  activeCategory,
  categories,
  setCategories,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleCategory = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.currentTarget === null) {
      return;
    }

    setCategories(e.currentTarget.dataset.value);
  };

  return (
    <CategoryFilterStyles.FiltersContainer>
      <CategoryFilterStyles.SelectContainer onClick={() => setActive(!active)}>
        <CategoryFilterStyles.ActiveSelect>
          {activeCategory ? activeCategory : 'Select a category'}
        </CategoryFilterStyles.ActiveSelect>
        <CategoryFilterStyles.SelectDropdown activeState={active}>
          {categories.map((category, index) => (
            <CategoryFilterStyles.SelectItem
              key={index}
              data-value={category}
              onClick={(e) => handleCategory(e)}
            >
              {category}
            </CategoryFilterStyles.SelectItem>
          ))}
        </CategoryFilterStyles.SelectDropdown>
      </CategoryFilterStyles.SelectContainer>
    </CategoryFilterStyles.FiltersContainer>
  );
};

export default CategoryFilter;
