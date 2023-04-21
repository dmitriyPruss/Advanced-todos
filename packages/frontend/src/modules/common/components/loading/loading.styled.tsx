import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, FONTS, MARGINS } from '../../../theme';

export const StyledLoadingBox = styled(Box)(() => ({
  margin: MARGINS.marginCentering,
  color: COLORS.scarlet,
  fontWeight: FONTS.WEIGHTS.bold,
  fontSize: FONTS.SIZES.l
}));
