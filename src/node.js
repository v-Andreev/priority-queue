class Node {
	constructor(data, priority) {
		this.data = data;
        this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		
		if(this.left == null){
			this.left = node;
			this.left.parent = this;
			//this.parent = this.left.parent;
		} else if (this.right ==null){
			this.right = node;
			this.right.parent = this;
		}	
	
	}

	removeChild(node) {
		if(this.left == node){
			this.left = null;			
		} else if (this.right == node){
			this.right = null;			
		}
			
	}

	remove() {
		if(!(this.parent == null)){
		
		}
	}

	swapWithParent() {
		var p = this.parent; 
		if (p == null) return; // если родителя вообще нет то сразу конец 

		if (this.left != null) this.left.parent = p; // если левый сын не нул, то тогда его родитель станет отец зиса 
		if (this.right != null) this.right.parent = p; // также для правого 

		var that = this; 
		that.parent = p.parent; // temp, его отец уже будет отец его отца 

		if (that.parent != null) // и если он не нул 
		{ 
			p == p.parent.left ? p.parent.left = that : p.parent.right = that; // то тогда нужной (левой или правой) ссылке присваем значение не p (он ведь щас отец p), а that 
		} 
		
		var r = that.right; 
		var l = that.left; 

		if (this == p.left) // если зис - левый сын p 
		{ 
			that.left = p; // то левый зета будет p 
			that.right = p.right; // а правый - правый сын p 
		if (that.right != null) that.right.parent = that; // и если этот правый сын не нул, тогда нужно поменять ссылку его отца с р на зет 
		} 
		else // также для правого 
		{ 
			that.left = p.left; 
		if (that.left != null) that.left.parent = that; 
			that.right = p; 
		} 

		p.parent = that; // меняем отца р на зет 
		  
		p.left = this.left; // меняем детей р (дети уже ссылаются на родителя 4-5 стр) на детей зиса 
		p.right = this.right;	
			
		p.left = l; 
		p.right = r;
	}
}

module.exports = Node;
