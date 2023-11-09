{
  // Promise resolved

  const getTodo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = response.json();

    console.log(data);
  };

  getTodo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "somethisng";
      if (data) {
        resolve(data);
      } else {
        reject("Fail to load data");
      }
    });
  };

  const showData = async () => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };
}
