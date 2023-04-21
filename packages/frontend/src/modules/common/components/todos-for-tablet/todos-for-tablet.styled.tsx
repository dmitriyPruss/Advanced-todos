import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES, MARGINS, COLORS } from '../../../theme';

export const StyledTodoTabletContainer = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  height: MEASURES.fullHeight,
  backgroundColor: COLORS.white,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter
}));

export const StyledTodoTabletItem = styled(Box)(({ theme }) => ({
  width: MEASURES.width80percents,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter,
  backgroundColor: COLORS.lightgrey,
  margin: MARGINS.margin3px,
  borderRadius: theme.shape.borderRadius,
  // @ts-ignore
  boxShadow: theme.shadows[7]
}));

export const StyledTodoTabletActionsBox = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter
}));
