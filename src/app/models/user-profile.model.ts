export class UserProfile {
  id: bigint;
  name: string;
  prename: string;
  mail: string;
  age: number;
  portfolioId: bigint;


  constructor(id: bigint, name: string, prename: string, mail: string, age: number, portfolioId: bigint) {
    this.id = id;
    this.name = name;
    this.prename = prename;
    this.mail = mail;
    this.age = age;
    this.portfolioId = portfolioId;
  }
}
