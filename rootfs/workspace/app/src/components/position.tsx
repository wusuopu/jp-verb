import styled from 'styled-components';
import { space, color, position, background } from 'styled-system';
import { SpaceProps, PositionProps, ColorProps, BackgroundProps } from 'styled-system';

export type Props = SpaceProps & ColorProps & PositionProps & BackgroundProps;
export const Position = styled.div<Props>`
  ${space};
  ${color};
  ${position};
  ${background};
`;
Position.displayName = 'Position'

export const Relative = styled(Position).attrs({
  position: 'relative'
})<Props>``;
Relative.displayName = 'Relative'

export const Absolute = styled(Position).attrs({
  position: 'absolute'
})<Props>``;
Absolute.displayName = 'Absolute'

export const Fixed = styled(Position).attrs({
  position: 'fixed'
})<Props>``;
Fixed.displayName = 'Fixed'

export const Sticky = styled(Position).attrs({
  position: 'sticky'
})<Props>``;
Sticky.displayName = 'Sticky'

export default Position
