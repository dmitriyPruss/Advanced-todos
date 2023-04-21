type TextAlignType = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
type OverflowWrapType = 'normal' | 'break-word' | 'anywhere';

interface IText {
  textAlignCenter: TextAlignType;
  overflowWrapBreakWord: OverflowWrapType;
}

export const TEXT: IText = {
  textAlignCenter: 'center',
  overflowWrapBreakWord: 'break-word'
};
