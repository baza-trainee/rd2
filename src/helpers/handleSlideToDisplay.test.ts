import { handleSlideToDisplay } from "helpers/handleSlideToDisplay";

describe("handleSlideToDisplay", () => {
  it("when isXl is true should return 5.5", () => {
    expect(handleSlideToDisplay(false, false, true)).toBe(5.5);
  });
  it("when isMd is true should return 2.8", () => {
    expect(handleSlideToDisplay(false, true, false)).toBe(2.8);
  });
  it("when isSm is true should return 1.5", () => {
    expect(handleSlideToDisplay(true, false, false)).toBe(1.5);
  });
  it("when all of arguments are false should return 1.5", () => {
    expect(handleSlideToDisplay(false, false, false)).toBe(1.5);
  });
  it("when all of arguments are true should return 5.5", () => {
    expect(handleSlideToDisplay(true, true, true)).toBe(5.5);
  });
});
