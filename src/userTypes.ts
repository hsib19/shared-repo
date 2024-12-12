export type User = {
  name: string;
  username: string;
  email: string;
  gender: string;
  country: string;
}

export type UserInputData = {
  document_id: string;
  data: User;
}