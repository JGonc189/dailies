// ===================================
// ==== TREE TRAVERSAL ALGORITHMS ====
// ===================================

/* Tree traversal is the process of visiting each node in a tree, such as a binary tree or binary search tree, exactly once.  There are several effective traversal algorithms

All of the algorithms below will implement Node objects we create. */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

// === PRE-ORDER ===
/* A pre-order traversal on a tree performs the following steps starting from the root:
    1) Return the root node value.
    2) Traverse the left subtree by recursively calling the pre-order function.
    3) Traverse the right subtree by recursively calling the pre-order function.

* for the tree above, performing a pre-order traversal would output the node values in the following order: A, B, D, E, C

* For the actual code implementation, we will be mainting an array for the order of the nodes:
*/

function pre_order(root, nodes) {
    nodes.push(root.data);
    if (root && root.left) {
        pre_order(root.left, nodes);
    }
    if (root && root.right) {
        pre_order(root.right, nodes);
    }
    console.log(nodes);
    return nodes;
}

pre_order(root, []); // => [ A, B, D, E, C]

// === IN-ORDER ===
/* An in-order traversal on a tree performs the following steps starting from the root:
    1) Traverse the left subtree by recursively calling the in-order function.
    2) Return the root node value.
    3) Traverse the right subtree by recursively calling the in-order function.

* For the tree above, performing an in-order traversal would output the node values in the following order: D, B, E, A, C */

function in_order(root, nodes){
    if(root && root.left) {
        in_order(root.left, nodes);
    }
    nodes.push(root.data);
    if(root && root.right) {
        in_order(root.right, nodes);
    }
    console.log(nodes);
    return nodes;
}

in_order(root, []); // => [ D, B, E, A, C]

/* You can see that the only difference between the code for the in-order vs. pre-order traversal is where the appending of the node value is placed in the code.  

A good way to remember when to return the node value (or append the node value to an array) is, for pre-order do it first, for in-order do it between the left and right traversal, and for post-order do it after traversing the left and right subtrees. */

// === POST-ORDER ===
/* A post-order traversal on a tree performs the following steps starting from the root:
    1) Traverse the left subtree by recursively calling the post-order functions.
    2) Traverse the right subtree by recursively calling the post-order function.
    3) Return the root node value.

* for the tree above, performing a post order traversal would output the node values in the following order: D, E, B, C, A */

function post_order(root, nodes) {
    if (root && root.left) {
        post_order(root.left, nodes);
    }
    if (root && root.right) {
        post_order(root.right, nodes);
    }
    nodes.push(root.data);
    console.log(nodes)
    return nodes;
}

post_order(root, []); // => [ D, E, B, C, A]

// === LEVEL-ORDER ===
/* A level-order traversal on a tree performs the following steps starting from the root:
    1) Add the root to a queue.
    2) Pop the last node from the queue, and return its value.
    3) Add all children of popped node to queue, and continue from step 2 until queue is empty.

* for the tree above, performing a level-order traversal would output the node values in the following order: A, B, C, D, E */

function level_order(root, nodes) {
    var queue = [root];
    while (queue.length > 0) {
        // front of queue is a element 0 and we push elements to back of queue
        var n = queue.shift();
        nodes.push(n.data);
        if(n.left !== null) {
            queue.push(n.left);
        }
        if(n.right !== null) {
            queue.push(n.right);
        }
    }
    console.log(nodes);
    return nodes;
}

level_order(root, []); // => [ A, B, C, D, E ]
