import { getSlideCount } from "helpers/getSlideCount";

describe("getSlideCount", () => {
  it("when isAboveLg is true should return 3", () => {
    expect(getSlideCount(false, true)).toBe(3);
  });
  it("when isAboveMd is true should return 2", () => {
    expect(getSlideCount(true, false)).toBe(2);
  });
  it("when both of arguments are false should return 1", () => {
    expect(getSlideCount(false, false)).toBe(1);
  });
  it("when both of arguments are true should return 3", () => {
    expect(getSlideCount(true, true)).toBe(3);
  });
});
