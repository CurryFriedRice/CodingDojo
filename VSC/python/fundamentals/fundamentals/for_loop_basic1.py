# 1. Basic - Print all integers from 0 to 150.
# no specification for inclusive or exclusive
for x in range(151):
    print(x)

# 2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000
# no specification so I went with Inclusive
for x in range(5, 1001, 5):
    print(x)


# 3. Counting, the Dojo Way 
#    Print integers 1 to 100. If divisible by 5, print "Coding" instead. 
#    If divisible by 10, print "Coding Dojo".
for x in range(1,101):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)

# 4. Whoa. That Sucker's Huge 
#    Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for x in range (500000):
    sum += x
else:
    print(sum)

# 5. Countdown by Fours 
#    Print positive numbers starting at 2018, counting down by fours.
num = 2018
while num > 0:
    print(num)
    num -= 4


# 6. Flexible Counter 
#    Set three variables: lowNum, highNum, mult. 
#    Starting at lowNum and going through highNum, 
#    print only the integers that are a multiple of mult. 
#    For example, 
#    if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

lowNum = -183
highNum = 672
mult = 6

for x in range(lowNum, highNum, mult):
    print(x)