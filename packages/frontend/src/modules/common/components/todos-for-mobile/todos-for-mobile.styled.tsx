import { List, Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES, MARGINS, COLORS, OTHER_STYLES } from '../../../theme';

export const StyledTodoMobileList = styled(List)(() => ({
  width: MEASURES.fullWidth,
  bgcolor: COLORS.white,
  height: MEASURES.height350px,
  overflow: OTHER_STYLES.overflowScroll
}));

export const StyledMobileListBox = styled(Box)(() => ({
  marginTop: MARGINS.margin30px,
  marginBottom: MARGINS.margin150px
}));

export const StyledTodoMobileListItemContainer = styled(Box)(({ theme }) => ({
  width: MEASURES.width400px,
  height: MEASURES.height130px,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter,
  backgroundColor: COLORS.lightgrey,
  margin: MARGINS.margin3px,
  marginTop: MARGINS.margin30px,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));

export const StyledTodoMobileActionsBox = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  display: FLEXBOX.flex,
  alignItems: FLEXBOX.alignItemsCenter
}));

export const StyledTodoMobileContentBox = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly
}));
