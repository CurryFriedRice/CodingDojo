class LinkedList
{
    push(item) { 
        return this.items.push(item);
    }
    
    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        return this.items.pop(item);
    }
    
    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() { 
        return this.items[items.length-1];
    }
    
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return (this.items.length === 0);
    }
    
    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    push(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this.length;
    }

    pop(){
        if(!this.isEmpty()){
            let data = this.head.data;
            this.head = this.head.next;
            this.length -= 1;
            return data;
        }
        return null;
    }

    isEmpty(){
        if (this.length === 0){
            return true;
        }
        return false;
    }

    peek(){
        return this.isEmpty()? null : this.head.data;
    }

    size(){
        return this.length;
    }
}