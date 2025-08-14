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
