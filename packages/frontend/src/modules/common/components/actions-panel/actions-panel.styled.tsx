import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES } from '../../../theme';

export const StyledActionsPanelBox = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter
}));
