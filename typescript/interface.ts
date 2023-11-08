{
  // akane main holo role or interface use korte pari.
  // ata only obj er khetre

  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "Jishan Hossain",
  };

  // add new property
  type userWithRoles = User1 & { role: string }; //2ta property er sathe aro akta add kora

  const user2: userWithRoles = {
    name: "Jishan Hossain",
    age: 21,
    role: "admin",
  };

  // Interface
  interface User3 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User3 {
    role: string;
  }

  const user3: User3 = {
    name: "Jishan Hossain",
    age: 21,
  };

  // interface use array

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll1 = [1, 2, 3];

  // interface use function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
