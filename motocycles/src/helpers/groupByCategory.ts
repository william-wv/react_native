export type Motorcycle = {
  id:       string;
  brand:    string;
  model:    string;
  year:     number;
  category: string;
};

export type MotorcycleSection = {
  title: string;
  data:  Motorcycle[];
};

export function groupByCategory(motorcycles: Motorcycle[]): MotorcycleSection[] {
  const map = motorcycles.reduce<Record<string, Motorcycle[]>>((acc, moto) => {
    if (!acc[moto.category]) acc[moto.category] = [];
    acc[moto.category].push(moto);
    return acc;
  }, {});

  return Object.entries(map)
    .map(([title, data]) => ({ title, data }))
    .sort((a, b) => a.title.localeCompare(b.title));
}
