import { Animated, View } from "react-native";
import {
    ContentFilter,
    ContentFilterText, ExploreIcon,
    TouchableFilter
} from "./MidActionButton.styled";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AnimatedContentFilter = Animated.createAnimatedComponent(ContentFilter);

export function MidActionButton(props: {
  headerOpened: boolean;
  animatedY: Animated.Value;
  onPress: () => void;
}) {
  const fadeInOutToggle = props.animatedY.interpolate({
    inputRange: [1, 3],
    outputRange: [0, 1]
  });

  const toggleBtnSize = props.animatedY.interpolate({
    inputRange: [1, 3],
    outputRange: ["40%", "90%"]
  });

  return (
    <AnimatedContentFilter
      style={{
        //opacity: fadeInOutToggle
        width: toggleBtnSize
      }}
      bgColor={props.headerOpened ? "#EFB9A7" : "white"}
    >
      <TouchableFilter activeOpacity={0.4} onPress={props.onPress}>
        {!props.headerOpened ? (
          <ContentFilterText
            headerOpened={props.headerOpened}

          >Filter By: Smallest to Largest</ContentFilterText>
        ) : (
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <ContentFilterText
                  headerOpened={props.headerOpened}

              >EXPLORE</ContentFilterText>
            <ExploreIcon
              name={"arrow-right"}
              size={16}
              color={"red"}
            />
          </View>
        )}
      </TouchableFilter>
    </AnimatedContentFilter>
  );
}
