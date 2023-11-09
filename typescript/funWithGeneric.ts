{
  // function with generic parameters

  //   const createArray: (param: string) => string[];

  const createArray1 = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGen = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray1("Bandwidth");
  const resGen = createArrayWithGen<string>("Bandwidth");
  const resGenObj = createArrayWithGen<object>({
    name: "Jishan",
    role: "bandwidth",
  });
}
