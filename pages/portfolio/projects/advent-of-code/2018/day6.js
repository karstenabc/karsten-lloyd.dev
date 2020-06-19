const input = [[252, 125], [128, 333], [89, 324], [141, 171], [266, 338], [117, 175], [160, 236], [234, 202], [165, 192], [204, 232], [83, 192], [229, 178], [333, 57], [70, 243], [108, 350], [161, 63], [213, 277], [87, 299], [163, 68], [135, 312], [290, 87], [73, 246], [283, 146], [80, 357], [66, 312], [159, 214], [221, 158], [175, 54], [298, 342], [348, 162], [249, 90], [189, 322], [311, 181], [194, 244], [53, 295], [80, 301], [262, 332], [268, 180], [139, 287], [115, 53], [163, 146], [220, 268], [79, 85], [95, 112], [349, 296], [179, 274], [113, 132], [158, 264], [316, 175], [268, 215]];
// const input = [[1, 1], [1, 6], [8, 3], [3, 4], [5, 5], [8, 9]];

// Get grid finite size
let minX = input[0][0];
let maxX = input[0][0];
let minY = input[0][1];
let maxY = input[0][1];

for (let i = 1; i < input.length; i++) {
  if (input[i][0] < minX) {
    minX = input[i][0];
  }
  if (input[i][0] > maxX) {
    maxX = input[i][0];
  }
  if (input[i][1] < minY) {
    minY = input[i][1];
  }
  if (input[i][1] > maxY) {
    maxY = input[i][1];
  }
}
const width = maxX - minX;
const height = maxY - minY;

// Create grid (by rows)
let grid = [];
for (let y = 0; y <= height; y++) {
  let row = [];
  for (let x = 0; x <= width; x++) {
    row.push('.');
  }
  grid.push(row);
}

// Insert numbered points into grid
for (let i = 0; i < input.length; i++) {
  grid[input[i][1] - minY][input[i][0] - minX] = (i + 1);
}


// PART ONE
// Return character to represent closest point at given position
function closestPoint(x, y) {
  let minDistance = Math.abs(x - input[0][0]) + Math.abs(y - input[0][1]);
  let closest = 1;
  for (let i = 1; i < input.length; i++) {
    let distance = Math.abs(x - input[i][0]) + Math.abs(y - input[i][1]);
    if (distance !== 0) {
      if (distance < minDistance) {
        minDistance = distance;
        closest = (i + 1);
      } else if(distance === minDistance) {
        closest = '.';
      }
    }
  }
  return closest;
}

// // Calculate closest points
// for (let y = 0; y <= height; y++) {
//   for (let x = 0; x <= width; x++) {
//     if (grid[y][x] === '.') {
//       grid[y][x] = closestPoint(x + minX, y + minY);
//     }
//   }
// }


function getCloseCount(point) {
  // If at edges of grid (infinite)
  for (let y = 0; y <= height; y++) {
    if (grid[y][0] === point || grid[y][grid[y].length - 1] === point) {
      return 0;
    }
  }
  for (let x = 0; x <= width; x++) {
    if (grid[0][x] === point || grid[height][x] === point) {
      return 0;
    }
  }
  // Else calculate occurrences
  let count = 0;
  for (let y = 0; y <= height; y++) {
    for (let x = 0; x <= width; x++) {
      if (grid[y][x] === point) {
        count += 1;
      }
    }
  }
  return count;
}

// let maxCloseCount = 0;
// for (let i = 0; i < input.length; i++) {
//   let count = getCloseCount((i + 1));
//   if (count > maxCloseCount) {
//     maxCloseCount = count;
//   }
// }

// const part1 = maxCloseCount;


// PART TWO
function getTotalDistance(x, y) {
  let distance = 0;
  for (let i = 0; i < input.length; i++) {
    distance += Math.abs(x - input[i][0]) + Math.abs(y - input[i][1]);
  }
  return distance;
}


// Calculate closest points
let safePoints = 0;
for (let y = 0; y <= height; y++) {
  for (let x = 0; x <= width; x++) {
    if (getTotalDistance(x, y) < 10000) {
      safePoints += 1;
    }
  }
}

console.log(safePoints);