import { TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {
  BORDERS,
  COLORS,
  FLEXBOX,
  FONTS,
  MEASURES,
  OTHER_STYLES,
  POSITIONS,
  SPACES,
  TEXT
} from '../../../theme';

export const StyledDesktopTableContainer = styled(TableContainer)(() => ({
  height: MEASURES.height520px,
  border: BORDERS.doubleBlack3px
}));

export const StyledDesktopTableCell = styled(TableCell)(() => ({
  fontSize: FONTS.SIZES.m,
  fontWeight: FONTS.WEIGHTS.bold,
  borderRight: BORDERS.solidGrey1px,
  textAlign: TEXT.textAlignCenter
}));

export const StyledDesktopTableFooter = styled(TableFooter)(() => ({
  background: COLORS.darkgrey,
  fontWeight: FONTS.WEIGHTS.bold,
  fontSize: FONTS.SIZES.l,
  width: MEASURES.fullWidth,
  display: FLEXBOX.flex,
  justifyContent: FLEXBOX.justifyContentCenter,
  padding: SPACES.s
}));

export const StyledDesktopTableRow = styled(TableRow)(() => ({
  position: POSITIONS.relative,
  width: MEASURES.width340px
}));

export const StyledAutoStoriesIcon = styled(AutoStoriesIcon)(() => ({
  position: POSITIONS.absolute,
  width: MEASURES.width35px,
  height: MEASURES.height30px,
  color: COLORS.white,
  top: POSITIONS.topTwelve
}));

export const StyledTablePagination = styled(TablePagination)(() => ({
  '& .MuiTablePagination-displayedRows': {
    color: COLORS.white,
    fontWeight: FONTS.WEIGHTS.bold,
    fontSize: FONTS.SIZES.m,
    width: MEASURES.width90px
  },
  '& .MuiTablePagination-selectLabel': {
    display: OTHER_STYLES.displayNone
  },
  '& .MuiNativeSelect-select': {
    display: OTHER_STYLES.displayNone
  },
  '& .MuiTablePagination-select': {
    display: OTHER_STYLES.displayNone
  },
  '& .MuiToolbar-root': {
    padding: SPACES.zero
  },
  '& .MuiBox-root': {
    cursor: OTHER_STYLES.cursorPointer,
    '& .MuiButtonBase-root': {
      color: COLORS.white
    }
  }
}));
