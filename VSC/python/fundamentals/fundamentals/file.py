num1 = 42       # Variable Declaration, primitive numbers
num2 = 2.3      # Variable Declaration, primitive numbers
boolean = True  # Variable Declaration, primitive boolean
string = 'Hello World' # Variable declaration, primitive String
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # Variable Delcaration, initialize Array, Add values
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # Variable Declaration, Initialize Dictionary object
fruit = ('blueberry', 'strawberry', 'banana') # Variable Declaration, Initilize Tuple, add values
print(type(fruit)) # Log Statement, TypeCheck
print(pizza_toppings[1]) # Log Statement, 
pizza_toppings.append('Mushrooms') # List Add value
print(person['name']) # Dictionary Access Value
person['name'] = 'George' # Dictionary Change Value
person['eye_color'] = 'blue' #Dictionary Change Value
print(fruit[2]) #Log Statement of List at index 2

if num1 > 45: # conditional if 
    print("It's greater") # Log Statement
else: # conditional else
    print("It's lower") # Log Statement

if len(string) < 5: # conditional If, length Check
    print("It's a short word!") # Log statement
elif len(string) > 15: #conditional if, length check
    print("It's a long word!")
else: # conditional else
    print("Just right!") # Log statement

for x in range(5): # for Loop Start 
    print(x) # log statement
# for loop stop
for x in range(2,5): # for loop start
    print(x) # log statement
#for Loop stop
for x in range(2,10,3): #for loop start
    print(x) # log statement
#for loop stop
x = 0 # variable assigment, primitive numbers
while(x < 5): #while loop start
    print(x) # log statement
    x += 1 # variable number increment 
#while loop stop

pizza_toppings.pop() # List pop/Delete last value
pizza_toppings.pop(1) # List pop/Delete item at Index 1

print(person) # log statement, Dictionary Access Values
person.pop('eye_color') # Dictionary delete value 
print(person) # Log Statement, dictionary Access Values

for topping in pizza_toppings: # For Loop Start
    if topping == 'Pepperoni': #if Statement, String boolean
        continue # Continue if matches
    print('After 1st if statement') # Log statement
    if topping == 'Olives': # if Statement
        break # break loop
# for Loop stop
def print_hello_ten_times(): # Function definition
    for num in range(10): # for loop start
        print('Hello') # log Statement
    # for loop stop
# function definition end

print_hello_ten_times() # function call 

def print_hello_x_times(x): # function definition, parameter number
    for num in range(x): # for loop start
        print('Hello') # log statement
    # for Loop end
# function definition end

print_hello_x_times(4) # function call, argument number

def print_hello_x_or_ten_times(x = 10): # function definition, optional parameter number 
    for num in range(x): # for loop start
        print('Hello') # log function
    # for Loop end
# function definition end

print_hello_x_or_ten_times() # Function call, no argument, default 10
print_hello_x_or_ten_times(4) # function call, Argument Number


"""
Bonus section
"""

# print(num3)  # NameError: name <variable name> is not defined
# num3 = 72 # variable declaration, Number
# fruit[0] = 'cranberry' #  TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) # KeyError: 'favorite_team'
# print(pizza_toppings[7]) # IndexError: list index out of range
#   print(boolean) # IndentationError: unexpected indent
# fruit.append('raspberry') # AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) # AttributeError: 'tuple' object has no attribute 'pop'