import { Illustration } from "./data";

export const getRandomImages = (
  pool: Illustration[],
  count: number,
): Illustration[] => {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
