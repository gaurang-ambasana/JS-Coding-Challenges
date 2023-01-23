function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1;

  const map = new Map<number, Set<number>>();

  for (let i = 1; i <= n; i++) map.set(i, new Set());

  for (let i = 0, n = trust.length; i < n; i++)
    map.get(trust[i][0]).add(trust[i][1]);

  let judge = -1;

  for (const [person, trust] of map) if (trust.size === 0) judge = person;

  map.delete(judge);

  for (const { 1: trust } of map) if (!trust.has(judge)) return -1;

  return judge;
}
