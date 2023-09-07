import styled from "styled-components";

type ContainerTypes = {
  $mb?: number;
  $mt?: number;
  $ml?: number;
  $mr?: number;
  $mall?: number;
  $pb?: number;
  $pt?: number;
  $pl?: number;
  $pr?: number;
  $pall?: number;
};

// prettier-ignore
export const Container = styled.div.attrs<ContainerTypes>(
  ({ $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall }) => ({ $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, })
)`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
  ${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
  ${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
  ${({ $mall }) => $mall && `margin: ${$mall}px;`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb}px;`}
  ${({ $pt }) => $pt && `padding-top: ${$pt}px;`}
  ${({ $pl }) => $pl && `padding-left: ${$pl}px;`}
  ${({ $pr }) => $pr && `padding-right: ${$pr}px;`}
  ${({ $pall }) => $pall && `padding: ${$pall}px;`}
`;

type FlexProps = {
  $align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: number;
  $width?: string;
  $mb?: number;
  $mt?: number;
  $ml?: number;
  $mr?: number;
  $mall?: number;
  $pb?: number;
  $pt?: number;
  $pl?: number;
  $pr?: number;
  $pall?: number;
};

// prettier-ignore
export const Flex = styled.div.attrs<FlexProps>(
  ({
    $align = "center", $justify = "center", $direction = "row", $width, $gap = 0, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $wrap,
  }) => ({
    $align, $justify, $direction, $width, $gap, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $wrap,
  })
)`
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-direction: ${({ $direction }) => $direction};
  ${({ $width }) => $width && `width: ${$width};`}
  gap: ${({ $gap }) => $gap}px;
  ${({ $wrap }) => $wrap && `flex-wrap: ${$wrap};`}
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
  ${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
  ${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
  ${({ $mall }) => $mall && `margin: ${$mall}px;`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb}px;`}
  ${({ $pt }) => $pt && `padding-top: ${$pt}px;`}
  ${({ $pl }) => $pl && `padding-left: ${$pl}px;`}
  ${({ $pr }) => $pr && `padding-right: ${$pr}px;`}
  ${({ $pall }) => $pall && `padding: ${$pall}px;`}
`;

type BackgroundProps = {
  $color?: string;
};

export const Background = styled.div.attrs<BackgroundProps>(
  ({ $color = "#ffffff" }) => ({
    $color,
  })
)`
  background-color: ${({ $color }) => $color};
`;