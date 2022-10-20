import healthSort from '../health';

test('healthSort', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const dataSort = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(healthSort(data)).toEqual(dataSort);
});
test('healthSort1', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const dataSort = [
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
  ];

  expect(healthSort(data)).not.toBe(dataSort);
});