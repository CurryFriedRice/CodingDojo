class DList:
    def __init__ (self):
        self.head = None
        self.tail = None

    def print_values(self):         #so this'll make a runner that jumps into the "head" and prints all the data
        print("===FTB===")
        
        runner = self.head          #the thing that's gonna run through the list
        while (runner != None):     #do it while there's still a head
            runner.display_value_self()  #print that value
            runner = runner.next    #remember this is set to "head" now so the next node is 'Next'
        return self                 #so it can chain

    def print_values_rev(self):
        print("===BTF===")
        runner = self.tail
        while runner != None:
            runner.display_value_self()
            runner = runner.prev
        return self

    def add_to_front(self, val):
        new_node = DLNode(val)
       
        current_head = self.head     #so this is the current head...
        new_node.next = current_head # then we tell new node that its next value is the current head
        if current_head != None:current_head.prev = new_node
        # new_node.prev = None

        self.head = new_node         #set this head to the new node created
        if self.tail == None:
            self.tail = new_node

        return self

    def add_to_back(self, val):
        new_node = DLNode(val)
        current_tail = self.tail     #so this is the current head...
        new_node.prev = current_tail # then we tell new node that its next value is the current head
        if current_tail != None: current_tail.next = new_node
        
        self.tail = new_node         #set this head to the new node created
     
        return self
    """ This was Looped Linked Lists
    def add_to_front2(self, val): #this  
        new_node = DLNode(val)
        if self.head == None and self.tail == None: #if we're starting just make a new node and head-tail it
            new_node.next = new_node
            new_node.prev = new_node
            self.head = new_node
            self.tail = new_node
        else: #otherwise
            current_head = self.head     #so this is the current head...
            new_node.next = current_head # then we tell new node that its next value is the current head
            new_node.prev = self.tail        
            self.head = new_node         #set this head to the new node created
            #So at this point we HAVE the new node
            #so what we need to do is set the previous value to the 'Tail'

        return self                  #allow chaining
    """

    def get_length(self):
        runner = self.head
        index = 0
        while runner != None:
            #runner.display_value_self()
            runner = runner.next
            index = index + 1
        return index
    
    def insert_node(self, val, n): #inserts in front of the node
       # print(f"inserting node {val}")
        if n > self.get_length() or n < 0:
            print("Index out of Range")
        elif n == 0:
            #print("Adding to front")
            self.add_to_front(val)
        elif n == self.get_length():
            #print("Adding to Back")
            self.add_to_back(val)
        else:
            #print("splicing into middle")
            runner = self.head
            for i in range(n):
                runner = runner.next
            
            temp = runner.next # get the next value of the runner
            new_node = DLNode(val) # make a new node
            runner.next = new_node #set the runner's next to be the next node
            new_node.prev = runner
            #new_node.next = temp
            runner = runner.next   #move the runner forward
            runner.next = temp     #
            temp.prev = runner


        return self


    def delete_node(self, value):
        runner = self.head
        while runner.value != value and runner != None:
            runner = runner.next
        if runner == None:
            print(f"{value} Not Found")
            return self
        else:
            next = runner.next
            prev = runner.prev
            next.prev = prev
            prev.next = next
            return self
    
    def remove_dupes(self, value):
        value_found = False
        index = 0
        runner = self.head
        while runner != None:
            if value_found  == False and runner.value == value:
                value_found = True
            else:
                if runner.value == value:
                    self.remove_index(index)
                else:
                    index = index + 1
            runner = runner.next
        return self

    def remove_index(self, idx):
        index = 0
        runner = self.head
        while runner != None and index < idx:
            runner = runner.next
            index = index + 1
        next = runner.next
        prev = runner.prev
        next.prev = prev
        prev.next = next
        return self

    def find_middle_value(self):
        runner_h = self.head
        runner_t = self.tail
        middle = int(self.get_length()/2)

        for i in range(middle):
            runner_h = runner_h.next
            runner_t = runner_t.prev

        if runner_t.next == runner_h.next:
            print(f"The middle Value is {runner_h.value}")
        elif runner_h.prev == runner_t and runner_t.next == runner_h:
            print(f"The node list is even: Middle Values are {runner_h.value} and {runner_t.value}")
        else:
            print("I don't know what the middle value is")
            #runner_h.display_value_self()
            #runner_t.display_value_self()
        return self


class DLNode:
    def __init__ (self, val):
        self.value = val
        self.prev = None
        self.next = None
    def display_value (self):
        
        print(f"V: {self.value} | N: {self.next.value} | P: {self.prev.value}")
        return self

    def display_value_self (self):
        if self.next == None:
            next_val = "None"
        else:
            next_val = self.next.value
        if self.prev == None:
            prev_val = "None"
        else:
            prev_val = self.prev.value
        
        print(f"V: {self.value} | N: {next_val} | P: {prev_val}")
        return self


myList = DList()

myList.add_to_front("BACON").add_to_front("Pancakes").add_to_front("Potatoes").add_to_back("Grapes").add_to_back("OJ").print_values().print_values().insert_node("PAAAANCAKES", 1).print_values().print_values_rev().find_middle_value()

#myList.add_to_front("BACON").add_to_front("Pancakes").add_to_front("OJ").add_to_front("Potatoes").find_middle_value()

# print("My List 2")
# myList2 = DList()

# myList2.add_to_front("BACON").add_to_front("BACON").add_to_front("BACON").add_to_front("BACON").add_to_front("BACON").add_to_front("BACON").add_to_front("PANCAKES").print_values().remove_dupes("BACON").print_values()