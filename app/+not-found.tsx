import { View, Text } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Oops! Not Found",
          headerStyle: {
            backgroundColor: "#25292e",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Page not found</Text>

        <Link href="/" style={styles.button}>
          <Text style={styles.buttonText}>Go back to Home Screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    backgroundColor: "#25292e",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 72,
    fontWeight: "bold" as const,
    color: "#ffff",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
};
