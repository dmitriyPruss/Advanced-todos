import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FLEXBOX, MEASURES, MARGINS } from '../../../theme';

export const StyledUpdateTodoFormContainer = styled(Box)(() => ({
  height: MEASURES.height250px,
  display: FLEXBOX.flex,
  flexDirection: FLEXBOX.flexDirectionColumn,
  justifyContent: FLEXBOX.justifyContentSpaceBetween,
  margin: MARGINS.margin4px
}));
