import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, FLEXBOX, FONTS, MARGINS, MEASURES } from '../../theme';

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  margin: MARGINS.marginCentering,
  width: MEASURES.width99percents,
  height: MEASURES.fullHeight,
  backgroundColor: COLORS.darkgreen,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  // @ts-ignore
  boxShadow: theme.shadows[7]
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: MEASURES.width90percents,
  backgroundColor: COLORS.lightgrey3,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceBetween,
  alignItems: FLEXBOX.alignItemsCenter,
  color: COLORS.darkgrey,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));

export const StyledDescriptionBox = styled(Box)(({ theme }) => ({
  width: MEASURES.width90percents,
  height: MEASURES.height200px,
  backgroundColor: COLORS.lightgrey2,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  color: COLORS.darkgrey,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontStyle: FONTS.STYLES.italic,
  color: theme.palette.grey[400],
  fontWeight: FONTS.WEIGHTS.bold,
  // @ts-ignore
  fontSize: theme.typography.h4.fontSize
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: FONTS.SIZES.l
}));

export const StyledButtonText = styled(Typography)(() => ({
  marginLeft: MARGINS.margin4px,
  fontWeight: FONTS.WEIGHTS.bold
}));
