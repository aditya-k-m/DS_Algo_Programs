class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        if(this.root === null){
            this.root = new Node(value);
        }
         else{
             let currentNode = this.root;
             while((value < currentNode.value && currentNode.left !== null) || (value > currentNode.value && currentNode.right !== null)){
                 if (value < currentNode.value){
                     currentNode = currentNode.left;
                 }
                 else{
                     currentNode = currentNode.right;
                 }
             }
             if(value < currentNode.value){
                 currentNode.left = new Node(value);
             }
             else if(value > currentNode.value){
                 currentNode.right = new Node(value);
             }
             else{
                 return ("Value already exists");
             }
         }
    }
    lookup(value){
        let currentNode = this.root;
        while(currentNode){
            if (currentNode.value === value){
                break;
            }
            if (value < currentNode.value){
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value){
                currentNode = currentNode.right;
            }
        }
        if (currentNode){
            return true;
        }
        else{
            return false;
        }
    }
    lookupNode(value){
        let currentNode = this.root;
        let previousNode = null;
        while(currentNode){
            if (currentNode.value === value){
                break;
            }
            if (value < currentNode.value){
                previousNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value){
                previousNode = currentNode;
                currentNode = currentNode.right;
            }
        }
        if (currentNode){
            return [currentNode, previousNode];
        }
        else{
            return false;
        }  
    }
    // remove(value){
    //     let n = this.lookupNode(value)[0]; //n refers to the node to be deleted
    //     let parent = this.lookupNode(value)[1]; //the parent of n
    //     if (n.left && n.right){
    //         if (parent.left.value === n.value){
    //             if (n.left < parent.right){
    //                 let temp = n.right;
    //                 parent.left = n.left;
    //                 parent.left.right = temp;
    //             }
    //             else {
    //                 let temp1 = parent.right;
    //                 let temp2 = n.right;
    //                 parent.right = n.left;
    //                 parent.left = temp1;
    //                 parent.right.right = temp2;
    //             }
    //         }
    //         else {
    //             if (n.right > parent.left){
    //                 let temp = n.left;
    //                 parent.right = n.right;
    //                 parent.right.left = temp;
    //             }
    //             else {

    //             }
    //         }
    //     }
    // }
    bfs(){
        let list = [];
        let temp_queue = [this.root];
        let currentNode = temp_queue[0];
        
        while(temp_queue.length > 0){
            currentNode = temp_queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                temp_queue.push(currentNode.left);
            }
            if(currentNode.right){
                temp_queue.push(currentNode.right);
            }
        }
        return list;
    }

    bfsR(){
        return this.traverseBreadthR(this.root, [this.root.value]);
    }
    traverseBreadthR(node, list){
        node.left ? list.push(node.left.value): 0;
        node.right ? list.push(node.right.value): 0;
        if(node.left){
            this.traverseBreadthR(node.left, list);
        }
        if(node.right){
            this.traverseBreadthR(node.right, list);
        }
        return list;
    }

    dfsInOrder(){
        return this.traverseIO(this.root, []);
    }
    dfsPreOrder(){
        return this.traversePrO(this.root, []);
    }
    dfsPostOrder(){
        return this.traversePoO(this.root, []);
    }
    traverseIO(node, list){
        if(node.left){
            this.traverseIO(node.left, list);
        }
        list.push(node.value);
        if(node.right){
            this.traverseIO(node.right, list);
        }
        return list;
    }
    traversePrO(node, list){
        list.push(node.value);
        if(node.left){
            this.traverseIO(node.left, list);
        }
        if(node.right){
            this.traverseIO(node.right, list);
        }
        return list;
    }
    traversePoO(node, list){
        if(node.left){
            this.traverseIO(node.left, list);
        }
        if(node.right){
            this.traverseIO(node.right, list);
        }
        list.push(node.value);
        return list;
    }
} 

let tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(120);
console.log(tree.root.right);
console.log(tree.lookup(6));
console.log(tree.bfs());
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.bfsR());
