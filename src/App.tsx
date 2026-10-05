import "@mantine/core/styles.css";
import { TextInput,Card,Image, MantineProvider,DataList, AppShellNavbar, AppShellMain } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { theme } from "./theme.tsx";
import { Center } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell padding="md" header={{ height: 60 }}>
        <AppShell.Header>
          
          
          
           <Center>
          <TextInput
            placeholder="Search by name, author, or date."
            w={360}
            
           
          />
          </Center>
          
        </AppShell.Header>
        <AppShellMain>
          
          <DataList withDivider>
            <DataList.Item>
              <Card padding="sm" withBorder orientation="horizontal">
                <Card.Section>
                  PDF1
                </Card.Section>
              </Card>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>PDF2</DataList.ItemLabel>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>PDF3</DataList.ItemLabel>
            </DataList.Item>
          </DataList>
          
        </AppShellMain>
      </AppShell>
    </MantineProvider>
    // need to use a data list of card objects in the appshell section, and make it scrollable
  );
}

export default App;
