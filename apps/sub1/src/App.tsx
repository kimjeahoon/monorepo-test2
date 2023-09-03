/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Select } from "@step/common-test";

function App() {
  return (
    <>
      <div css={testCss}>sub module 1123123</div>
      <div css={selectWrapper}>
        <Select />
      </div>
    </>
  );
}

const testCss = css`
  color: tomato;
`;

const selectWrapper = css`
  height: 500px;
`;

export default App;
