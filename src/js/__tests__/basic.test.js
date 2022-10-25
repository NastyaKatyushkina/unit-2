import heroesSort from '../app';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortedHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const result = heroesSort(heroes);

test('toEqual', () => {
  expect(result).toEqual(sortedHeroes);
});

test('toBe', () => {
  expect(JSON.stringify(result)).toBe(JSON.stringify(sortedHeroes));
});

test('not.toBe', () => {
  expect(result).not.toBe(sortedHeroes);
});
