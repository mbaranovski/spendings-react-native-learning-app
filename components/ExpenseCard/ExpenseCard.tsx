import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {
    CardDetailsLeft, CardDetailsRight,
    CategoryText,
    ContentExpenseCard,
    ContentExpenseCardCount,
    ContentExpenseCardDetails,
    ContentExpenseCardIcon,
    ContentExpenseCardTotal, ExpenseCardIndent, NameText
} from "./ExpenseCard.styled";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export interface IExpenseCard {
    isLast?: boolean;
    icon: string;
    iconColor?: string;
    total: number;
    currency?: string;
    transactionsCount: number;
    isFirst?: boolean;
    animationStyle?: any;
    headerOpened?: boolean;
    name?: string;
    category: string;
}

export const ExpenseCard: React.FC<IExpenseCard> = ({ category, name, headerOpened, animationStyle, isFirst, isLast, icon, iconColor = "#2B4971", currency = "$", total, transactionsCount }) => {

  return(
      <ContentExpenseCard headerOpened={headerOpened} style={animationStyle} isFirst={isFirst} isLast={isLast}>
          <ContentExpenseCardIcon>
              <MaterialCommunityIcons name={icon} size={46} color={iconColor} />
          </ContentExpenseCardIcon>
          <ContentExpenseCardDetails>
              <CardDetailsLeft>
                  <NameText numberOfLines={1}>{name}</NameText>
                  <CategoryText>{category}</CategoryText>
              </CardDetailsLeft>
              <CardDetailsRight>
                  <ContentExpenseCardTotal>{currency}{total.toFixed(2)}</ContentExpenseCardTotal>
                  {/*<ContentExpenseCardCount>{transactionsCount} Transactions</ContentExpenseCardCount>*/}
              </CardDetailsRight>
          </ContentExpenseCardDetails>
      </ContentExpenseCard>
  )
}
