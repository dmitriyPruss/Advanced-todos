import { Box, Card, CardContent, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES, MARGINS, SPACES } from '../../theme';

export const StyledMyProfileContainer = styled(Box)(() => ({
  width: MEASURES.fullWidth,
  height: MEASURES.height100vh,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter,
  alignItems: FLEXBOX.alignItemsCenter
}));

export const StyledCard = styled(Card)(() => ({
  width: MEASURES.width90percents,
  height: MEASURES.height90percents,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter
}));

export const StyledCardContent = styled(CardContent)(() => ({
  width: MEASURES.width90percents,
  height: MEASURES.height90percents,
  margin: MARGINS.marginCentering
}));

export const StyledPaper = styled(Paper)(() => ({
  height: MEASURES.fullHeight,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentCenter,
  alignItems: FLEXBOX.alignItemsCenter
}));

export const StyledFormContainer = styled('form')(() => ({
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter,
  height: MEASURES.height90percents,
  width: MEASURES.width80percents,
  marginTop: SPACES.m
}));

export const StyledCardActions = styled('form')(() => ({
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter
}));

export const StyledInputContainer = styled(Box)(() => ({
  width: MEASURES.width320px,
  height: MEASURES.height130px,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter
}));

export const StyledButtonGroup = styled(Box)(() => ({
  width: MEASURES.width80percents,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceEvenly,
  alignItems: FLEXBOX.alignItemsCenter
}));
