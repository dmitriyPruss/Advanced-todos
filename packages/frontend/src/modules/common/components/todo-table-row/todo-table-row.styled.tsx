import { Box, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import { BORDERS, FLEXBOX, MEASURES, OTHER_STYLES, TEXT } from '../../../theme';

export const StyledTabletTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  cursor: OTHER_STYLES.cursorPointer,
  width: MEASURES.fullWidth
}));

export const StyledTabletTableCell = styled(TableCell)(() => ({
  width: MEASURES.width33percents,
  border: BORDERS.solidLightgrey1px
}));

export const StyledTabletActionsTableCell = styled(TableCell)(() => ({
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter,
  border: BORDERS.solidLightgrey1px,
  textAlign: TEXT.textAlignCenter
}));

export const StyledTabletTableCellBox = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  height: MEASURES.height38px,
  overflowWrap: TEXT.overflowWrapBreakWord
}));
