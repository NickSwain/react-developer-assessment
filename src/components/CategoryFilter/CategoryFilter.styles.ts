import styled, { css } from 'styled-components';
import brand from '../../helpers/brand';

const FiltersContainer = styled.div`
  padding: 30px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: 300px;
  padding: 0 20px;
  width: 100%;
  border: none;
  background-color: ${brand.white};
  border: 1px solid ${brand.gunMetal};
  border-radius: 5px 5px 0 0;
  font-size: 14px;
  color: ${brand.gunMetal};
  position: relative;
  z-index: 2;
  cursor: pointer;
`;

const ActiveSelect = styled.div``;

const SelectDropdown = styled.div<{ activeState: boolean }>`
  display: none;
  background-color: ${brand.mintCream};
  border: 1px solid ${brand.gunMetal};
  border-radius: 0 0 15px 15px;
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  z-index: 2;
  max-height: 200px;
  overflow-y: auto;

  ${({ activeState }) =>
    activeState
      ? css`
          display: block;
        `
      : null}
`;

const SelectItem = styled.div`
  color: ${brand.black};
  position: relative;
  padding: 10px 20px 9px;
`;

export const CategoryFilterStyles = {
  FiltersContainer,
  SelectContainer,
  SelectDropdown,
  SelectItem,
  ActiveSelect,
};
