import React from "react";
import styled from "styled-components";

const Button = styled.button<{ primary?: boolean }>`
   cursor: pointer;
   background: transparent;
   font-size: 16px;
   border-radius: 3px;
   color: ${(props) => (props.primary ? "violet" : "palevioletred")};
   border: ${(props) =>
      props.primary ? "2px sold violet" : "2px solid palevioletred"};
   margin: 0 1em;
   padding: 0.25em 1em;
   transition: 0.5s all ease-out;
   &:hover {
      background-color: ${(props) => (props.primary ? "violet" : "palevioletred")};
      color: white;
   }
`;

const CustomButton = styled(Button)<{ primary?: boolean }>`
   font-size: 32px;
`;

export const StyleComponentTest = (props: any) => {
   return (
      <div>
         <Button>Button!</Button>
         <Button primary>Primary Button!</Button>
         <CustomButton>Custom Button!</CustomButton>
      </div>
   );
};
