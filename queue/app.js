/* ============================================
   ==  IMPLEMENT A QUEUE USING A LINKED LIST ==
   ============================================

   A queue is an abstract data structure where items can either be added to a collection or removed from a collection, enqueuing and dequeuing, respectively.  A queue is similar to a physical line of people:  people can be added to the end of the line (enqueuing), and to make the line smaller, people are removed from the front of the line (dequeuing). 

   Another term used to describe queues is FIFO (First in, First out).  It is a data structure where the first elements added to the collection will be the first removed.

   === EXAMPLE ===
   We want out queue to have two methods, enqueue X, whice will add element X to the end of the queue, and a dequeue method which will remove the current first item from the queue.  We don't need to specify what we want to dequeue because the method always returns the first element from the queue.

   === ALGORITHM ===
   We will store a reference to the front and back of the queue in order to make enqueuing and dequeuing run in O(1) constant time. Every time we want to insert into the queue, we add the new element to the end of the linked list and update the BACK pointer.  When we want to dequeue we return the first node in the linked list and update the FRONT pointer. */

// queue is intially empty
var Queue = {
    front: null,
    back: null
};

// we will use a node to keep track of the elements in the queue which is represnted by a linked list...
function Node(data, next) {
    this.data = data;
    this.next = next;
}

// add elements to queue in O(1) time
function Enqueue(element) {
    var N = new Node(element, null);
    if (Queue.back === null) {
        Queue.front = N;
        Queue.back = N;
    } else {
        Queue.back.next = N;
        Queue.back = Queue.back.next;
    }
}

// remove first element from queue in O(1) time
function Dequeue() {
    if(Queue.front !== null) {
        var first = Queue.front;
        Queue.front = Queue.front.next;
        return first.data;
    } else {
        if(Queue.back !== null) {
            Queue.back = null;
        }
        return 'Cannot Dequeue because Queue is empty!';
    }
}

Enqueue(1);
Enqueue(23);
Enqueue(89);
Dequeue();

console.log(Queue);

// RUNNING TIME:  Because we keep a reference to the front and back pointers of the linked list, inserting a new node and removing the first node are both done in O(1), constant time.  These operations do not depend on the size of the queue at all.