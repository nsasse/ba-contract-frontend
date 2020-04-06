export class UserProfile {
  name: string;
  prename: string;
  mail: string;
  age: number;


  constructor(name: string, prename: string, mail: string, age: number) {
    this.name = name;
    this.prename = prename;
    this.mail = mail;
    this.age = age;
  }
}
