import React, { useRef, useState } from "react";
import {
  AddNewPlusIcon,
  Container,
  Content,
  ContentExpenseCardContainer,
  Head,
  TotalMonthHead,
  TotalValueCurrencyHead,
  TotalValueHead,
  TouchableScroll
} from "./Intro.styled";
import { useTransition } from "@react-spring/core";
import { ExpenseCard } from "../../components/ExpenseCard/ExpenseCard";
import {
    Animated, Button,
    Dimensions, Platform,
    ScrollView,
    TouchableOpacity, View
} from "react-native";
import { MockedCards } from "./mock";
import { MidActionButton } from "../../components/MidActionButton/MidActionButton";
import { ExploreIcon } from "../../components/MidActionButton/MidActionButton.styled";
import {NavigationContainerProps} from "react-navigation";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const MOBILE_TOP_BAR_HEIGHT = Platform.select({ios: 20, android: 0});

interface IIntro {}

const WINDOW_HEIGHT = Dimensions.get("window").height;

const AnimatedHead = Animated.createAnimatedComponent(Head);
const AnimatedContent = Animated.createAnimatedComponent(Content);
const AnimatedContentExpenseCardContainer = Animated.createAnimatedComponent(
  ContentExpenseCardContainer
);

const moveAnimation = (target: Animated.Value, toValue: number) =>
  Animated.spring(target, {
    toValue
    //duration: 2000
  });

export const Intro2: React.FC<IIntro & NavigationContainerProps> = ({navigation}) => {
  const [expensesData] = useState(MockedCards);
  const [desc, setdesc] = useState(false);
  const [animatedY] = useState(new Animated.Value(3));
  const contentScrollRef = useRef<ScrollView>();
  const [headerOpened, setheaderOpened] = useState(false);

  const expenses = useTransition(
    expensesData.sort((a, b) => (desc ? a.total - b.total : b.total - a.total)),
    item => `${item.icon}-${String(item.total)}`,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      trail: 200 / expensesData.length
    }
  );

  const toggleContent = () => {
    moveAnimation(animatedY, headerOpened ? 3 : 1).start();
    setheaderOpened(p => !p);
  };

  return (
    <Container>
      <AnimatedHead
        style={{
          flex: animatedY.interpolate({
            inputRange: [1, 3],
            outputRange: [3, 1]
          })
        }}
        colors={["#4F548B", "#2B4971"]}
      >
          <AddNewPlusIcon top={MOBILE_TOP_BAR_HEIGHT + 30} onPress={() => navigation?.navigate('AddNewExpense')}>
          <MaterialCommunityIcons  name={"plus"} size={36} color={"white"} />
          </AddNewPlusIcon>
        <TouchableOpacity onPress={toggleContent}>
          <TotalValueHead>
            <TotalValueCurrencyHead>$</TotalValueCurrencyHead>1029.37
          </TotalValueHead>
        </TouchableOpacity>
        <TotalMonthHead>NOVEMBER TOTAL</TotalMonthHead>
      </AnimatedHead>
      <AnimatedContent
        style={{
          flex: animatedY.interpolate({
            inputRange: [1, 3],
            outputRange: [1, 3]
          })
        }}
      >
        {headerOpened && (
          <TouchableScroll
            onPressIn={() => {
              if (headerOpened) toggleContent();
            }}
          />
        )}
        <MidActionButton
          headerOpened={headerOpened}
          animatedY={animatedY}
          onPress={() => setdesc(prev => !prev)}
        />

        <AnimatedContentExpenseCardContainer
          scrollEnabled={!headerOpened}
          ref={contentScrollRef}
        >
          {expenses.map(
            (
              { item: { icon, total, transactionsCount, name, category }, props, key },
              index
            ) => (
              <ExpenseCard
                  name={name}
                  category={category}
                headerOpened={headerOpened}
                animationStyle={props}
                isFirst={index === 0}
                isLast={MockedCards.length - 1 === index}
                key={`expense-card-${index}`}
                icon={icon}
                total={total}
                transactionsCount={transactionsCount}
              />
            )
          )}
        </AnimatedContentExpenseCardContainer>
      </AnimatedContent>
    </Container>
  );
};

Intro2.navigationOptions = {
    header: null
}
