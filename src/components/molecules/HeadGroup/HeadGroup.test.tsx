import { setupMockServer } from "@/tests/jest";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./HeadGroup.stories";

const { Default } = composeStories(stories);

describe("src/components/molecules/HeadGroup/HeadGroup.test.tsx", () => {
  setupMockServer();
  test("エリア が title 由来のアクセシブルネームで識別できること", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner", { name: "タイトル" })).toBeInTheDocument();
  });
  test("[role=heading]を含むこと", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("heading")).toBeInTheDocument();
  });
  test("children を render できること", () => {
    const { getByText } = render(<Default>テキスト</Default>);
    expect(getByText("テキスト")).toBeInTheDocument();
  });
});
