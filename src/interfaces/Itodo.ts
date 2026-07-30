export interface ToDo {
  id?: number;
  title: string;
  description: string;
  duedate:Date;
  status:string;
  personId: number;
}