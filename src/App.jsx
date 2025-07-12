import { useForm } from "@mantine/form";
import {
  Center,
  TextInput,
  Button,
  Paper,
  Title,
  Text,
  Stack,
  Box,
} from "@mantine/core";

function App() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <Center style={{ height: "100vh" }}>
      <Box
        p="xl"
        style={{
          backgroundColor: "#202f3eff",
          borderRadius: "8px",
          width: 400,
        }}
      >
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <form onSubmit={form.onSubmit(console.log)}>
            <Stack gap={20}>
              <Title align="center" order={2}>
                Welcome to Chit Chat
              </Title>
              <Text align="center" size="sm" maw={500} mx="auto">
                By continuing, you agree to our terms and privacy policy.
              </Text>
              <TextInput
                label="Name"
                placeholder="Name"
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
              <TextInput
                mt="sm"
                label="Username"
                placeholder="Username"
                key={form.key("username")}
                {...form.getInputProps("username")}
              />
              <Button fullWidth type="submit" mt="sm">
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Center>
  );
}
export default App;
