export type TypeSocratAbout = {
  id: number;
  title: string;
  text: string;
};

export type TypeSocratQuestion = {
  id: number;
  title: string;
  text: string | [string, string, string, string, string];
};
