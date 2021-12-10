export default function getRandom<Type>(items: Type[], nb: number): Type[] {
  const randomItems = items.sort(() => {
    return Math.random() - 0.5;
  });

  const randomItem = randomItems.splice(0, nb);

  return randomItem;
}
