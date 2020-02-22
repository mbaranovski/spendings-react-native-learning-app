import styled from "styled-components";
import { animated } from "react-spring";

import { Text } from "../shared/Text";

export const ContentExpenseCard = animated(styled.View<{
  headerOpened: boolean;
  isLast: boolean;
  isFirst: boolean;
}>`
  z-index: 2;
  padding: 8px 14px;
  background-color: white;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.13);
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ isFirst }) => (isFirst ? "50px" : "0px")};
  margin-bottom: ${({ isLast }) => (isLast ? "10px" : "20px")};
`);

export const ContentExpenseCardDetails = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentExpenseCardTotal = styled(Text)`
  font-size: 22px;
  font-family: open-sans-bold;
  text-align: right;
`;

export const ContentExpenseCardCount = styled(Text)`
  font-family: open-sans-semi-bold;
  color: #ababab;
  font-size: 15px;
`;

export const ContentExpenseCardIcon = styled.View`
  flex: 1;
  text-align: center;
  /*border-right-width: 1px;*/
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.08);

  position: relative;
`;

export const CategoryText = styled.Text`
  font-family: open-sans-light;   
`

export const NameText = styled.Text`
  font-family: open-sans-light;  
  font-size: 18px; 

`

export const CardDetailsLeft = styled.View`
 flex: 1;
`;

export const CardDetailsRight = styled.View`
    width: 110;
    justify-content: center;
    
`
