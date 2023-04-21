import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { BORDERS, MARGINS, OTHER_STYLES, POSITIONS } from '../../../theme';

export const StyledTodoFormContainer = styled(Box)(({ theme }) => ({
  border: BORDERS.solidGrey3px,
  margin: MARGINS.margin2px,
  borderRadius: theme.shape.borderRadius,
  boxSizing: OTHER_STYLES.boxSizingBorderBox,
  position: POSITIONS.relative
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: POSITIONS.absolute,
  top: POSITIONS.topZero,
  right: POSITIONS.rightOne
}));
