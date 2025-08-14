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

function addLegalMoves(pos, queue) {
  if (checkRow(pos, -2) && checkCollumn(pos, -1)) {
    queue.enqueue([pos[0] - 2, pos[1] - 1]);
  }
  if (checkRow(pos, -1) && checkCollumn(pos, -2)) {
    queue.enqueue([pos[0] - 1, pos[1] - 2]);
  }
  if (checkRow(pos, -2) && checkCollumn(pos, +1)) {
    queue.enqueue([pos[0] - 2, pos[1] + 1]);
  }
  if (checkRow(pos, -1) && checkCollumn(pos, +2)) {
    queue.enqueue([pos[0] - 1, pos[1] + 2]);
  }
  if (checkRow(pos, +2) && checkCollumn(pos, -1)) {
    queue.enqueue([pos[0] + 2, pos[1] - 1]);
  }
  if (checkRow(pos, +1) && checkCollumn(pos, -2)) {
    queue.enqueue([pos[0] + 1, pos[1] - 2]);
  }
  if (checkRow(pos, +2) && checkCollumn(pos, +1)) {
    queue.enqueue([pos[0] + 2, pos[1] + 1]);
  }
  if (checkRow(pos, +1) && checkCollumn(pos, +2)) {
    queue.enqueue([pos[0] + 1, pos[1] + 2]);
  }
}

// [row, collumn] vertices

function knightMoves(start, end) {}
