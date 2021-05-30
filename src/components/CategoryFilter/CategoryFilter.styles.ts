import styled, { css } from 'styled-components';
import brand from '../../helpers/brand';
import { Device, from, until } from '../../helpers/media';

const FiltersContainer = styled.div`
  display: flex;
  padding: 30px;

  @media ${until(Device.Tablet)} {
    flex-direction: column;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border: none;
  background-color: ${brand.white};
  border: 1px solid ${brand.gunMetal};
  border-radius: 5px 5px 0 0;
  font-size: 14px;
  color: ${brand.gunMetal};
  position: relative;
  z-index: 2;
  cursor: pointer;
  margin-right: 0;
  margin-bottom: 10px;

  @media ${from(Device.Tablet)} {
    max-width: 300px;
    margin-right: 20px;
    margin-bottom: 0px;
    width: 100%;
  }
`;

const ActiveSelect = styled.div``;

const SelectDropdown = styled.div<{ activeState: boolean }>`
  display: none;
  background-color: ${brand.white};
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

const ClearFilters = styled.button`
  position: relative;
  outline: none;
  border: none;
  padding: 10px 20px;
  background-color: ${brand.mossGreen};
  color: ${brand.white};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    height: 100%;
    background-color: ${brand.gunMetal};
    width: 0;
    transition: width 0.5s ease;
  }
`;

const ClearFilterButtonText = styled.div`
  position: relative;
  z-index: 1;
`;

export const CategoryFilterStyles = {
  FiltersContainer,
  SelectContainer,
  SelectDropdown,
  SelectItem,
  ActiveSelect,
  ClearFilters,
  ClearFilterButtonText,
};
