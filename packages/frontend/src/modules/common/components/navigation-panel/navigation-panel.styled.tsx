import { Box, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';
import { BORDERS, FLEXBOX, MEASURES, PADDINGS } from '../../../theme';

export const StyledNavigationPanelContainer = styled(Box)(({ theme }) => ({
  display: FLEXBOX.flex,
  alignItems: FLEXBOX.alignItemsCenter,
  justifyContent: FLEXBOX.justifyContentSpaceBetween,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  // @ts-ignore
  boxShadow: theme.shadows[7]
}));

export const StyledButtonGroupContainer = styled(Box)(({ theme }) => ({
  display: FLEXBOX.flex,
  alignItems: FLEXBOX.alignItemsCenter,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[900]
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50]
}));

export const StyledSearchBox = styled(Box)(() => ({
  padding: PADDINGS.p2px4px,
  display: FLEXBOX.flex,
  alignItems: FLEXBOX.alignItemsCenter,
  width: MEASURES.width320px,
  border: BORDERS.solidGrey1px
}));

export const StyledSearchAndButtonBox = styled(Box)(() => ({
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly
}));
