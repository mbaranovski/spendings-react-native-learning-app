import styled from "styled-components";
import { animated } from "@react-spring/web";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "../../components/shared/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";


export const Container = animated(styled.View`
  flex: 1;
  display: flex;
  position: relative;
  background-color: #2b4971;
`);

export const Head = styled(LinearGradient)<{height: number}>`
  padding: 30px 0;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TotalValueHead = styled(Text)`
  font-size: 48px;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.4) 1px 1px 10px;
  font-family: "open-sans-bold";
  position: relative;
`;

export const TotalValueCurrencyHead = styled(TotalValueHead)`
  font-size: 36px;
`;

export const TotalMonthHead = styled(Text)`
  text-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px;
  padding: 10px;
  color: white;
  font-family: "open-sans-bold";
`;

export const Content = styled.View<{height: number}>`
  background-color: white;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.35);
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TouchableScroll = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
   border-radius: 22px;
  height: 100%;
  z-index: 2;
`

export const ContentExpenseCardContainer = styled.ScrollView`
  flex: 1;
  padding: 0 5%;
  width: 100%;
  flex-direction: column;
`;

export const ScrolledHead = styled.View`
 position: absolute;
 top: 0;
 left: 0;
 height: 100px;
 width: 100%;   
 background-color: red;
 z-index: 111;
`

export const AddNewPlusIcon = styled(TouchableOpacity)<{top: number}>`
    position: absolute;
    right: 25;
    top: ${({top}) => top};

`
