import {
  Home,
  CheckBoxOutlineBlank,
  CheckBox,
  Close,
  GitHub,
  Person,
  Code,
  PlayArrow,
  Undo,
  Apps,
  ArrowRightAlt,
} from "@mui/icons-material";
import { theme } from "@/themes";
import SvgIcon from "@mui/material/SvgIcon";
import styled from "styled-components";

export type ThemeColors = keyof typeof theme.colors;

interface IconWrapperProps {
  size: number;
  cursor?: string;
  color?: ThemeColors;
  backgroundColor?: string;
}

const IconWapper = styled.div<IconWrapperProps>`
    display: inline-block;
    font-size: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    heigth: ${({ size }) => size}px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    cursor ${({ cursor }) => cursor ?? "pointer"};
    color: ${({ theme, color }) => {
      if (color) {
        return theme.colors[color];
      }
      return theme.colors.icon;
    }};
    svg {
        display: block;
    }
`;

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  color?: ThemeColors;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

function withIconStyle(
  Icon: typeof SvgIcon
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, size = 32, ...rest } = props;
    const cursor = onClick ? "pointer" : "";
    return (
      <IconWapper cursor={cursor} size={size} {...rest}>
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </IconWapper>
    );
  };
  return IconWithStyle;
}

export const CloseIcon = withIconStyle(Close);

export const HomeIcon = withIconStyle(Home);

export const BackIcon = withIconStyle(Undo);

export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank);

export const CheckBoxIcon = withIconStyle(CheckBox);

export const PersonIcon = withIconStyle(Person);

export const GitHubIcon = withIconStyle(GitHub);

export const AppsIcon = withIconStyle(Apps);

export const CodeIcon = withIconStyle(Code);

export const PlayIcon = withIconStyle(PlayArrow);

export const ArrowRightIcon = withIconStyle(ArrowRightAlt);
