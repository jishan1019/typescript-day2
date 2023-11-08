{
  // generic Type
  // generic type bolte bujhai nejar moto type declear kore Reuse korake

  // Array k new vabe likha jai num[] ata caraw jemon Array<number>

  type GenericArray<param> = Array<param>;

  const role: number[] = [1, 2, 3, 4, 5];
  const role1: GenericArray<number> = [1, 2, 3, 4, 5];

  const mentors: string[] = ["abul", "babul"];
  const mentors1: GenericArray<string> = ["abul", "babul"];

  //
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Korim",
      age: 22,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const man: GenericTuple<string, string> = ["mr.x", "mr.y"];
}
