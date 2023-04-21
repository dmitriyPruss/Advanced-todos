import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES, MARGINS, COLORS, SPACES } from '../../theme';

export const LoginBoxContainer = styled(Box)(() => ({
  height: MEASURES.height90percents,
  width: MEASURES.width320px,
  margin: MARGINS.marginCentering,
  p: SPACES.m,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  alignItems: FLEXBOX.alignItemsCenter,
  bgcolor: COLORS.lightblueGray
}));

export const StyledLoginAvatar = styled(Avatar)(() => ({
  margin: SPACES.m,
  backgroundColor: COLORS.blue
}));

export const StyledInputContainer = styled(Box)(() => ({
  width: MEASURES.width320px,
  height: MEASURES.height130px,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter
}));
