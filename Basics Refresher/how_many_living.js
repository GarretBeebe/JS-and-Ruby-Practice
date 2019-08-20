lifeSpans = [
  [1928, 1973],
  [1860, 1910],
  [1955, 2020],
  [1935, 2000]
]

function createHistogram(lifeSpans) {
  let histogram = {};
  for (i = 0; i < lifeSpans.length; i++) {
    for (j = lifeSpans[i][0]; j< lifeSpans[i][1]; j++) {
      if (j in histogram) {
        histogram[j] = histogram[j] + 1;
      }
      else {
        histogram[j] = 1;
      }
    }
  }
  return histogram;
}

function findMaxYears(histogram){
  let maxYears = [];
  let finalMax = 0;

  for (key in histogram) {
    if (histogram[key] >= finalMax) {
        finalMax = histogram[key]
    }
  }

  for (key in histogram) {
    if (histogram[key] == finalMax) {
        maxYears.push(key);
    }
  }
  return maxYears;
}

var histogram = createHistogram(lifeSpans);
var maxYears = findMaxYears(histogram);
console.log(maxYears);

