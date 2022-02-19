/* 
- Create enqueue and dequeue methods. _You can loop and index the underlying array._
- Design a new PriorityQueue class where the queue maintains an ascending order when items are added based on a queue item's provided priority integer value.
- A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.
- A priority queue item could be any data type.
*/

/**
 * Priority Queue:
 * So items is a Hash Table (it's an object) with {}
 * The Key is the priority and the value is a "queue" of items
 * 
 */

class PriorityQueue
{
    constructor()
    {
        this.items = {}
    }

    enqueue(data, value)
    {
        if(this.items[value] == null)
        {
            this.items[value] = [data];
        }
        else
        {
            this.items[value].push(value)
        }
        return this.size2();
    }

    dequeue()
    {
        let highestPrio = Object.keys(this.items)[0];
        let data = this.items[highestPrio].shift();
        if(this.items[highestPrio].length == 0)
        {
            delete this.items[highestPrio];
        }
        return data;
    }

    size2()
    {
        return Object.values(this.items).map((arr) => arr.length).reduce((sum, length) => sum + length);
    }

    makeTicket(prior)
    {
        return function(data)
        {
            this.enqueue(data,prior);
        }
    }
}


let PQueue = new PriorityQueue();
PQueue.enqueue(10,1)
PQueue.enqueue(11,1)
PQueue.enqueue(1,2)

console.log(PQueue.enqueue(11,1));
console.log(PQueue.dequeue());
console.log(PQueue.dequeue());

console.log(PQueue.dequeue());

console.log(PQueue.items)


/*
Pseudocode:
Create a class that is a queue
items within the class is an empty object

when we enqueue, takes two arguments, data and priority
    search object if hasOwnProperty of the prio, 
        if it does, push the data to the corresponding array
        if not, create the array and push

    for of loop,over the object, summing the lengths
    return the sum

when we dequeue, find the first value of the array with the lowest key
this.items
Object.keys(this.items)[0] MIGHT be the lowest key
shift this.items. that^ and hold in a var
check if length of this.items. that^ is 0, if it is, delete this.items. that^
return the holder
*/


class PriorityQueueMain{
    constructor(){
        this.items = {}
    }

    enqueue(data, prio){
        if (this.items.hasOwnProperty(prio)){
            this.items[prio].push(data)
        }
        else {
            this.items[prio] = [data]
        }
        return this.size()
    }
dequeue(){
        let lowestKey = Object.keys(this.items)[0]
        let holder = this.items[lowestKey].shift()
        if (this.items[lowestKey].length === 0){
            delete(this.items[lowestKey])
        }
        return holder
    }size(){
        return Object.values(this.items)
            .map((arr) => arr.length)
            .reduce((sum, length) => sum + length)
    }
}