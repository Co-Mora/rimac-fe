export interface IUser {
  name: string;
  lastName: string;
  birthDay: Date;
}

export interface IUserForm {
  documentId: string;
  cellphone: string;
  acceptTerm: string;
  acceptCommunication: string;
}

export interface IPlanData {
  name: string;
  price: number;
  description: Array<string>[];
  age: number;
}
