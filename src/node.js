class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {

        if (this.left == null) {
            this.left = node;
            this.left.parent = this;
        } else if (this.right == null) {
            this.right = node;
            this.right.parent = this;
        }

    }

    removeChild(node) {
        if (this.left == node) {
            this.left = null;
         node.parent = null;
        } else if (this.right == node) {
            this.right = null;
            node.parent = null;
        }

    }

    remove() {
        if (this.parent != null) {
          
        }
    }

    swapWithParent() {
        var p = this.parent;
        if (p == null) return;

        if (this.left != null) this.left.parent = p;
        if (this.right != null) this.right.parent = p;

        var that = this;
        that.parent = p.parent;

        if (that.parent != null) {
            p == p.parent.left ? p.parent.left = that : p.parent.right = that;
        }

        var r = that.right;
        var l = that.left;

        if (this == p.left) {
            that.left = p;
            that.right = p.right;

            if (that.right != null) that.right.parent = that;
        } else {
            that.left = p.left;
            if (that.left != null) that.left.parent = that;
            that.right = p;
        }

        p.parent = that;

        p.left = this.left;
        p.right = this.right;

        p.left = l;
        p.right = r;
    }
}

module.exports = Node;