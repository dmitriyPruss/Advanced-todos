import React, { FC, useCallback, useState } from 'react';
import { Button, ToggleButton, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { INavigationPanelComponent } from '../../types';
import { COLORS, FLEXBOX, FONTS, MEASURES, SPACES } from '../../../theme';
import {
  StyledNavigationPanelContainer,
  StyledButtonGroupContainer,
  StyledToggleButtonGroup,
  StyledSearchBox,
  StyledSearchAndButtonBox
} from './navigation-panel.styled';

export const NavigationPanelComponent: FC<INavigationPanelComponent> = ({
  addEntityHandler,
  isDesktop,
  isMobile,
  navigationPanelButtons,
  searchHandler,
  searchField,
  setNavigationValue
}: INavigationPanelComponent) => {
  const [alignment, setAlignment] = useState(navigationPanelButtons[0]);

  const handleChange = useCallback((event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  }, []);

  const applyNavigateButtonValue = (buttonValue: string) => {
    setNavigationValue(buttonValue);
  };

  return (
    <StyledNavigationPanelContainer
      height={isMobile ? MEASURES.height350px : MEASURES.height170px}
      flexDirection={isDesktop ? FLEXBOX.flexDirectionRow : FLEXBOX.flexDirectionColumn}
    >
      <StyledButtonGroupContainer
        width={isMobile ? MEASURES.width316px : MEASURES.width340px}
        height={isMobile ? MEASURES.height200px : MEASURES.height72px}
      >
        <StyledToggleButtonGroup
          color="standard"
          orientation={isMobile ? 'vertical' : 'horizontal'}
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            '& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected': {
              bgcolor: COLORS.scarlet,
              color: COLORS.white,
              fontWeight: FONTS.WEIGHTS.bold
            }
          }}
        >
          {navigationPanelButtons.map((button) => (
            <ToggleButton
              key={button}
              value={button}
              sx={{ width: isMobile ? MEASURES.width310px : MEASURES.widthAuto }}
              onClick={() => {
                applyNavigateButtonValue(button);
              }}
            >
              {button}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </StyledButtonGroupContainer>
      <StyledSearchAndButtonBox
        flexDirection={isMobile ? FLEXBOX.flexDirectionColumn : FLEXBOX.flexDirectionRow}
        width={isDesktop ? MEASURES.width550px : MEASURES.widthAuto}
      >
        <StyledSearchBox mb={isMobile ? SPACES.s : SPACES.zero}>
          <InputBase
            sx={{ flex: FLEXBOX.flexOne }}
            inputRef={searchField}
            placeholder="Search..."
          />
          <IconButton
            type="submit"
            sx={{ p: FONTS.SIZES.s }}
            aria-label="search"
            onClick={searchHandler}
          >
            <SearchIcon />
          </IconButton>
        </StyledSearchBox>
        <Button variant="contained" onClick={addEntityHandler}>
          Add
        </Button>
      </StyledSearchAndButtonBox>
    </StyledNavigationPanelContainer>
  );
};
