import React from "react";
import { Background, Flex } from "../generic";
import { H1, H3 } from "../Typography";
import Image from "next/image";
import styled from "styled-components";
import { PrimaryBtn } from "../Buttons";

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnContainer = styled(Flex)`
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
`;

const MinHeight = styled.div`
  min-height: 280px;
`;

const BottomWrapper = styled.div`
  padding-top: 15px;
`;

const DiscAbs = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const DiscRelative = styled.div`
  position: relative;
  font-size: 20px;
  color: #ffffff;
`;

const Line = styled.div`
  background-color: #ffffffda;
  border-radius: 15px;
  width: calc(100% + 10px);
  height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
`;

const PackageItem = ({ data }) => {
  const {
    type,
    price,
    hasDiscount,
    discountPrice,
    description,
    features,
    Bottom,
  } = data;
  return (
    <Background
      $border="1px solid #dedede"
      $color="#fff"
      $pall={15}
      $radius={7}
      style={{
        maxWidth: "300px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        flex: 1,
      }}
    >
      {hasDiscount && (
        <DiscAbs>
          <DiscRelative>
            $ {price}
            <Line />
          </DiscRelative>
        </DiscAbs>
      )}

      <Background
        $color={hasDiscount ? "#642891" : "#ffffff"}
        style={{
          margin: "-15px",
          marginBottom: "0px",
          paddingTop: "15px",
          color: hasDiscount ? "#ffffff" : "#000000",
        }}
      >
        <MinHeight>
          <Flex $direction="column" $gap={20} $width="100%">
            <H3 $color={hasDiscount ? "#ffffff" : "#757575"} $align="center">
              {type}
            </H3>
            <H1 $color={hasDiscount ? "#ffffff" : "#000000"} $align="center">
              $ {hasDiscount ? discountPrice : price}
            </H1>
            <p
              style={{
                textAlign: "center",
                maxWidth: "220px",
              }}
            >
              {description}
            </p>
            <Flex
              $gap={10}
              $width="100%"
              $align="flex-start"
              $justify="space-evenly"
              $pb={15}
            >
              {features.map(({ Icon, title }, idx) => (
                <Flex
                  $direction="column"
                  $gap={10}
                  $align="center"
                  $width="70px"
                  key={idx}
                >
                  {typeof Icon === "string" ? (
                    <Image src={Icon} width={50} height={50} alt="image" />
                  ) : (
                    <IconWrapper>
                      <Icon />
                    </IconWrapper>
                  )}
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    {title}
                  </p>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </MinHeight>
      </Background>
      <BtnContainer>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </BtnContainer>
      <BottomWrapper>
        {typeof Bottom === "function" ? <Bottom /> : Bottom}
      </BottomWrapper>
    </Background>
  );
};

export default PackageItem;
