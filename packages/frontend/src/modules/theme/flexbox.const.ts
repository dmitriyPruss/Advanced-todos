type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface IFlexbox {
  flexDirectionColumn: FlexDirectionType;
  flexDirectionRow: FlexDirectionType;
  flex: string;
  justifyContentSpaceEvenly: string;
  justifyContentSpaceBetween: string;
  justifyContentCenter: string;
  alignItemsCenter: string;
  flexOne: number;
  flexShrinkZero: number;
}

export const FLEXBOX: IFlexbox = {
  flex: 'flex',
  flexDirectionColumn: 'column',
  flexDirectionRow: 'row',
  justifyContentSpaceEvenly: 'space-evenly',
  justifyContentSpaceBetween: 'space-between',
  justifyContentCenter: 'center',
  alignItemsCenter: 'center',
  flexOne: 1,
  flexShrinkZero: 0
};
