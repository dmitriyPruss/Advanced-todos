import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, SPACES } from '../../theme';

export const StyledHeaderContainer = styled(Box)(() => ({
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentSpaceBetween,
  padding: SPACES.s
}));
