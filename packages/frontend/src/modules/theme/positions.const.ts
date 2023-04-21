type PositionType = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

interface IPositions {
  relative: PositionType;
  absolute: PositionType;
  topZero: number;
  topTwelve: number;
  rightOne: number;
}

export const POSITIONS: IPositions = {
  relative: 'relative',
  absolute: 'absolute',
  topZero: 0,
  topTwelve: 12,
  rightOne: 1
};
