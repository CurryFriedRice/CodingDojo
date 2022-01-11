class SList:
    def __init__(self):
        self.head = None


    def print_values(self):         #so this'll make a runner that jumps into the "head" and prints all the data
        runner = self.head          #the thing that's gonna run through the list
        while (runner != None):     #do it while there's still a head
            print(runner.value)     #print that value
            runner = runner.next    #remember this is set to "head" now so the next node is 'Next'
        return self                 #so it can chain

    def add_to_front(self,val):
        new_node = SLNode(val)
        current_head = self.head     #so this is the current head...
        new_node.next = current_head # then we tell new node that its next value is the current head
        self.head = new_node         #set this head to the new node created
        return self                  #allow chaining

    def add_to_back(self,val):
        runner = self.head          #make a runner to run to the end of the list
        while runner.next != None:  #if the next one isn't null then we haven't hit the end
            runner = runner.next    #then we just keep running through the list
        runner.next = SLNode(val)   #make a new node and assign in it to next
        return self                 #allow for chaining

    def remove_from_front(self):
        current_head = self.head    #get the current head
        self.head = self.head.next  #move the front back one
        del current_head            #Maight as well make sure it's dead
        return self                  #allow chaining
    
    def remove_from_back(self):
        runner = self.head          #get the head
        while runner.next.next != None:  #peek at the next next value
            runner = runner.next         #if it's something then move forward
        runner.next = None               #then if it's none we're at the back so cut it off
        return self

    def insertAt(self, val, n):
        if n > self.getLength() or n < 0:
            print("Index out of Range")
        elif n == 0:
            self.add_to_front(val)
        elif n == self.getLength():
            self.add_to_back(val)
        else:
            runner = self.head
            for i in range(n):
                runner = runner.next
            temp = runner.next
            runner.next = SLNode(val)
            runner = runner.next
            runner.next = temp
        return self

    def getLength(self):
        i = 0
        runner = self.head
        while runner.next != None:
            runner = runner.next
            i = i + 1
        return i
class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None


myList = SList()
myList.add_to_front(" are ").add_to_front("Linked Lists").add_to_back(" cool").print_values().remove_from_back().print_values()

myList.add_to_front("B").add_to_front("A").add_to_front("D").add_to_front("S").add_to_front("T").print_values().insertAt("V",0).print_values()