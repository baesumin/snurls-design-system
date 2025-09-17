import { Flex, Text } from "@snurls/react";

function App() {
  return (
    <>
      <Text variant="display1">안녕</Text>
      {/* <Text variant="body1">안녕</Text> */}
      {/* <span>안녕</span> */}
      {/* <Spacing /> */}
      {/* <Text variant="body1">안녕</Text> */}
      <Flex padding={20} backgroundColor={"pink"}>
        안녕
      </Flex>
    </>
  );
}

export default App;
