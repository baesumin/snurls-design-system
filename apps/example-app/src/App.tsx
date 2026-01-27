import { useState } from "react";
import { Flex, Input, Text } from "@snurls/react";

function App() {
  const [inputValue, setInputValue] = useState("");

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

      {/* 기본 Input */}
      <Input
        value={inputValue}
        onChange={(val) => setInputValue(val)}
        placeholder="기본 입력창"
      />

      <button onClick={() => setInputValue("버튼으로 변경된 값")}>
        Input 값 변경하기
      </button>

      <p>현재 state 값: {inputValue}</p>
    </>
  );
}

export default App;
