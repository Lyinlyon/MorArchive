import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AppShell } from '@mantine/core';
import { theme } from './theme.tsx';
import { Center } from '@mantine/core';

function App() {
return(
<MantineProvider theme={theme} defaultColorScheme='dark'>
<AppShell

  padding="md"
  header={{ height: 60 }}
  >
  <AppShell.Header>
  <Center>
    Hello, Appshell
  </Center>
  </AppShell.Header>
</AppShell>
</MantineProvider>
// need to use a data list of card objects in the appshell section, and make it scrollable

)
  
}

export default App
