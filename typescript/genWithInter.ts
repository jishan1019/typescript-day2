{
  // generic with interfface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };

    smartWatch: T;
  }

  interface PDevDetails {
    brand: string;
    model: string;
    releaseYear: number;
  }

  const PoorDeveloper: Developer<PDevDetails> = {
    name: "Jishan",
    computer: {
      brand: "Sumsundle",
      model: "XXDD",
      releaseYear: 2023,
    },

    smartWatch: {
      brand: "Oppo",
      model: "DDDDS",
      releaseYear: 2001,
    },
  };
}
