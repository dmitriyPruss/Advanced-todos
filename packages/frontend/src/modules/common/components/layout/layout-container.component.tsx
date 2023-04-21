import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { FLEXBOX, MEASURES, MARGINS, SPACES } from '../../../theme';

export const LayoutContainer = styled(Box)(({ theme }) => ({
  width: MEASURES.fullWidth,
  height: MEASURES.height100vh,
  margin: MARGINS.marginCentering,
  [theme.breakpoints.up('mobile')]: {
    padding: SPACES.zero,
    minWidth: MEASURES.width320px
  },
  [theme.breakpoints.up('tablet')]: {
    display: FLEXBOX.flex,
    flexDirection: FLEXBOX.flexDirectionColumn,
    justifyContent: FLEXBOX.justifyContentSpaceEvenly,
    padding: theme.spacing(1)
  },
  [theme.breakpoints.up('desktop')]: {
    display: FLEXBOX.flex,
    flexDirection: FLEXBOX.flexDirectionColumn,
    justifyContent: FLEXBOX.justifyContentSpaceEvenly,
    padding: theme.spacing(2)
  }
}));
