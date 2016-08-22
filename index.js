const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const Queue = require('./src/queue');

let h;
 h = new MaxHeap();

	h.root = new Node(0, 10);
			h.root.appendChild(new Node(1, 5));
			h.root.appendChild(new Node(2, 7));
			h.root.left.appendChild(new Node(3, 20));

console.log(h.shiftNodeUp(h.root.left.left));

console.log(h.root);


window.h = h;