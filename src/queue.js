const MaxHeap = require('./max-heap.js');

class PriorityQueue {
    constructor(maxSize = 30) {
        this.maxSize = maxSize;
        this.heap = new MaxHeap(this.maxSize);
        this.count = 0;
    }

    push(data, priority) {

        this.heap.push(data, priority);
        this.count++;

    }

    shift() {

        this.heap.pop();
        this.count--;

    }


    size() {
        return this.count;
    }

    isEmpty() {
        if (this.size() == 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = PriorityQueue;