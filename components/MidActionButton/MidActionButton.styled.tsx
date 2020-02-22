import {Text} from "../shared/Text";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const TouchableFilter = styled.TouchableOpacity`
  flex: 1;
   border-radius: 22px;
  height: 100%;
`

export const ContentFilter = styled.View<{bgColor: string}>`
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({bgColor}) => bgColor};
  position: absolute;
  top: 0;
  width: 90%;
  z-index: 2;
  transform: translateY(-24px);
  
  border-radius: 22px;
  
  
`;

export const ContentFilterText = styled(Text)<{headerOpened: boolean}>`
  font-family: "open-sans-semi-bold";
  padding: 16px;
  color: #284970;
  font-weight: bold;
  
  ${({headerOpened}) => headerOpened ? "text-align: center" : ""}
`;

export const ExploreIcon = styled(MaterialCommunityIcons)`
    position: absolute;
    right: 26px;
    transform: translateY(1px);
`
