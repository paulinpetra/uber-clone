import { Tabs } from "expo-router";

const RootTabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="rides" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default RootTabsLayout;
