import { useRoute } from "./router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const routing = useRoute(null); // useRoute({})
  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
