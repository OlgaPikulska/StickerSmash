import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Sticker Smash", headerLeft: () => <></> }}
      />
      <Tabs.Screen name="about" options={{ headerTitle: "About" }} />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
