import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const ThemeProvider = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default ThemeProvider;
