import styled from "styled-components";

type TypographyProps = {
  $color?: string;
  $align?: "left" | "center" | "right";
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
const H1 = styled.h1.attrs<TypographyProps>( ({ $color = "#000000", $align = "center", $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall,
  }) => ({ $color, $align, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall })
)`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${({ $color }) => $color};
  text-align: ${({ $align }) => $align};
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

// prettier-ignore
const H2 = styled.h2.attrs<TypographyProps>( ({ $color = "#000000", $align = "center", $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall,
  }) => ({ $color, $align, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall })
)`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${({ $color }) => $color};
  text-align: ${({ $align }) => $align};
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

// prettier-ignore
const H3 = styled.h3.attrs<TypographyProps>( ({ $color = "#000000", $align = "center", $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall,
  }) => ({ $color, $align, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall })
)`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${({ $color }) => $color};
  text-align: ${({ $align }) => $align};
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

export { H1, H2, H3 };
