class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    if (this.queue.length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  front() {
    if (!this.isEmpty()) {
      return this.queue[0];
    } else {
      throw new Error("Queue is empty");
    }
  }

  size() {
    return this.queue.length;
  }
}

function checkRow(pos, change) {
  if (pos[0] + change >= 0 && pos[0] + change <= 7) {
    return true;
  } else {
    return false;
  }
}

function checkCollumn(pos, change) {
  if (pos[1] + change >= 0 && pos[1] + change <= 7) {
    return true;
  } else {
    return false;
  }
}

function addLegalMoves(pos, queue, visited, cameFrom) {
  if (checkRow(pos, -2) && checkCollumn(pos, -1)) {
    if (!visited.has(`${pos[0] - 2}, ${pos[1] - 1}`)) {
      queue.enqueue([pos[0] - 2, pos[1] - 1]);
      visited.add(`${pos[0] - 2}, ${pos[1] - 1}`);
      cameFrom.set(`${pos[0] - 2}, ${pos[1] - 1}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, -1) && checkCollumn(pos, -2)) {
    if (!visited.has(`${pos[0] - 1}, ${pos[1] - 2}`)) {
      queue.enqueue([pos[0] - 1, pos[1] - 2]);
      visited.add(`${pos[0] - 1}, ${pos[1] - 2}`);
      cameFrom.set(`${pos[0] - 1}, ${pos[1] - 2}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, -2) && checkCollumn(pos, +1)) {
    if (!visited.has(`${pos[0] - 2}, ${pos[1] + 1}`)) {
      queue.enqueue([pos[0] - 2, pos[1] + 1]);
      visited.add(`${pos[0] - 2}, ${pos[1] + 1}`);
      cameFrom.set(`${pos[0] - 2}, ${pos[1] + 1}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, -1) && checkCollumn(pos, +2)) {
    if (!visited.has(`${pos[0] - 1}, ${pos[1] + 2}`)) {
      queue.enqueue([pos[0] - 1, pos[1] + 2]);
      visited.add(`${pos[0] - 1}, ${pos[1] + 2}`);
      cameFrom.set(`${pos[0] - 1}, ${pos[1] + 2}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, +2) && checkCollumn(pos, -1)) {
    if (!visited.has(`${pos[0] + 2}, ${pos[1] - 1}`)) {
      queue.enqueue([pos[0] + 2, pos[1] - 1]);
      visited.add(`${pos[0] + 2}, ${pos[1] - 1}`);
      cameFrom.set(`${pos[0] + 2}, ${pos[1] - 1}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, +1) && checkCollumn(pos, -2)) {
    if (!visited.has(`${pos[0] + 1}, ${pos[1] - 2}`)) {
      queue.enqueue([pos[0] + 1, pos[1] - 2]);
      visited.add(`${pos[0] + 1}, ${pos[1] - 2}`);
      cameFrom.set(`${pos[0] + 1}, ${pos[1] - 2}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, +2) && checkCollumn(pos, +1)) {
    if (!visited.has(`${pos[0] + 2}, ${pos[1] + 1}`)) {
      queue.enqueue([pos[0] + 2, pos[1] + 1]);
      visited.add(`${pos[0] + 2}, ${pos[1] + 1}`);
      cameFrom.set(`${pos[0] + 2}, ${pos[1] + 1}`, `${pos[0]}, ${pos[1]}`);
    }
  }
  if (checkRow(pos, +1) && checkCollumn(pos, +2)) {
    if (!visited.has(`${pos[0] + 1}, ${pos[1] + 2}`)) {
      queue.enqueue([pos[0] + 1, pos[1] + 2]);
      visited.add(`${pos[0] + 1}, ${pos[1] + 2}`);
      cameFrom.set(`${pos[0] + 1}, ${pos[1] + 2}`, `${pos[0]}, ${pos[1]}`);
    }
  }
}

function logPath(endPos, startPos, cameFrom) {
  let fromPos = `${endPos[0]}, ${endPos[1]}`;
  let moves = 0;
  const pathArray = [];
  pathArray.push(fromPos);
  while (fromPos !== `${startPos[0]}, ${startPos[1]}`) {
    fromPos = cameFrom.get(fromPos);
    pathArray.push(fromPos);
    moves++;
  }
  pathArray.reverse();
  console.log(`You made it in ${moves} moves. Here's your path: `);
  pathArray.forEach((pathStop) => {
    console.log(`[${pathStop}]`);
  });
}

// [row, collumn] vertices

function equalToEnd(pos, end) {
  if (pos[0] === end[0] && pos[1] === end[1]) {
    return true;
  } else {
    return false;
  }
}

function knightMoves(start, end) {
  const queue = new Queue();
  const visited = new Set();
  const cameFrom = new Map();

  queue.enqueue(start);
  visited.add(`${start[0]}, ${start[1]}`);
  let pos;
  while (queue.size() > 0) {
    pos = queue.dequeue();

    if (equalToEnd(pos, end)) {
      logPath(pos, start, cameFrom);
      return;
    }

    addLegalMoves(pos, queue, visited, cameFrom);
  }
}

knightMoves([7, 5], [2, 7]);
