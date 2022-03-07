/* 
Make double linked list classes and create these methods:
double linked list should allow traversing forwards and backwards starting
from either side.
isEmpty
insertAtFront
insertAtBack
insertAfter - given a target value and new value, inserts new node after target value
insertBefore - given a target value and new value, inserts new node before target value
*/

class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList
{
    /**
     * Sets up the list to have a head and a tail 
     */
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * checks to see if both the head and tail are null
     * @returns bool
     */
    IsEmpty()
    {
        return this.head === null && this.tail === null;
    }

    /**
     * Checks to see if itself is empty
     * Takes in a piece of data makes a new node
     * @param {int} data 
     * @returns the list for chaining
     */
    insertAtFront(data)
    {
        let newNode = new Node(data);
        if(this.IsEmpty())
        {
            this.head = newNode;
            this.tail = newNode;
        }else
        {
            this.head.next = newNode;
            newNode.prev = this.head;
            this.head = this.head.next;
        }

        this.length = this.length+1;
        return this;
    }
    /**
     * Checks to see if itself is empty
     * Takes in a piece of data makes a new node
     * @param {int} data 
     * @returns the list for chaining
     */
    insertAtback(data)
    {
        let newNode = new Node(data);
        if(this.IsEmpty())
        {
            this.head = newNode;
            this.tail = newNode;
        }else
        {
            this.tail.prev = newNode;
            newNode.next = this.tail;
            this.tail = this.tail.prev;
        }
        
        this.length = this.length+1;
        return this;
    }

    /**
     * 
     * @param {int} searchVal 
     * @param {int} data 
     */
    insertAfter(searchVal, data)
    {
        if(this.IsEmpty()) return null;

        let runner = this.tail;
        
        while(runner.data != searchVal && runner != null)
        {
            console.log(runner.data);
            runner = runner.next
        }
        if(runner == null) return null;

        let newNode = new Node(data);
        
        if(runner === this.head)
        {
            this.head.next = newNode;
            newNode.prev = this.head;
            this.head = this.head.next;
        }
        else
        {

            let peeker =  runner.next;
            
            runner.next = newNode;
            newNode.prev = runner;
            
            if(peeker != null){}
            peeker.prev = newNode;
            newNode.next = peeker;
        }
        
        return this;
    }

    toString(currNode = this.tail)
    {
        if(currNode == null) return "HEAD";
        return currNode.data + " <-> " + this.toString(currNode.next);
    }

    toStringRev(currNode = this.head)
    {
        if(currNode == null) return "TAIL";
        return currNode.data + " <-> " + this.toStringRev(currNode.prev);
    }

}

let DLL = new DoubleLinkedList();

DLL.insertAtFront(1)
DLL.insertAtFront(2)
DLL.insertAtFront(3)
DLL.insertAtFront(4)
console.log(DLL.toString());
console.log(DLL.toStringRev());

DLL.insertAtback(5)
DLL.insertAtback(6)
DLL.insertAtback(7)
DLL.insertAtback(8)
console.log(DLL.toString());
console.log(DLL.toStringRev());


DLL.insertAfter(2,99)
console.log(DLL.toString());
