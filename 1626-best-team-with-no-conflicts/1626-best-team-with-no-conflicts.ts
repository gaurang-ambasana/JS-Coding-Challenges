function bestTeamScore(scores: number[], ages: number[]): number {
  const pairs = ages
    .map((age, i) => [age, scores[i]])
    .sort(([a1, s1], [a2, s2]) => a1 - a2 || s1 - s2);

  let maxScores = pairs.map(({ 1: score }) => score);

  for (let i = 0, n = pairs.length; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const score1 = pairs[i][1],
        score2 = pairs[j][1],
        maxScore1 = maxScores[i],
        maxScore2 = maxScores[j];

      if (score1 >= score2 && maxScore1 < maxScore2 + score1)
        maxScores[i] = maxScore2 + score1;
    }
  }

  return Math.max.apply(null, maxScores);
}
