import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, FLEXBOX, MARGINS, MEASURES } from '../../../theme';

export const StyledAuthorizationContainer = styled(Box)(() => ({
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  alignItems: FLEXBOX.alignItemsCenter,
  width: MEASURES.width90percents,
  height: MEASURES.height520px,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  margin: MARGINS.marginCentering,
  backgroundColor: COLORS.lightgrey2
}));
