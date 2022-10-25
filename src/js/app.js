export default function heroesSort(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
