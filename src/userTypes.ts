export type User = {
  name: string;
  username: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  country: string;
}

export type UserInputData = {
  document_id: string;
  data: User;
}