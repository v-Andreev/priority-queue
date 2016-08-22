const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.count = 0;
    }

    push(data, priority) {

        var n = new Node(data, priority);
        this.parentNodes.push(n);
        this.insertNode(n);
        this.shiftNodeUp(n);
        this.count++;

    }

    pop() {
        this.count--;

    }

    detachRoot() {
        this.root = null;
    }

    restoreRootFromLastInsertedNode(detached) {

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

    clear() {
        this.count = 0;
        this.root = null;
        this.parentNodes = [];
    }

    insertNode(node) {
        if (this.isEmpty) {
            this.root = node;
        } else {}

    }

    shiftNodeUp(node) {
        if (node.parent == null) {
            this.root = node;
        }
        while ((node.parent != null) && (node.priority > node.parent.priority)) {

            node.swapWithParent();
            this.shiftNodeUp(node);
        }

    }

    shiftNodeDown(node) {

    }

}

module.exports = MaxHeap;