import random

def bubble_sort(li):
    
    # alright so a bubble sort bubbles the smallest values to the top
    # so what will happen is I will iterate through the list
    # After that I will move it up (bubble it) if it's smaller than the previous value in line

    runner = 0
    for i in range(len(li)):
        #print(li[i])
        if i == 0:
            pass
        else:
            runner = i
            while li[runner] < li[runner-1] and runner > 0:
                li[runner], li[runner-1] = li[runner-1], li[runner]
                runner = runner-1
    return li


print(bubble_sort([5,2,4,1,3,6,9,7,0,8]))
randArr = []
for i in range(10):
    randArr.append(random.randint(0,10))

print(randArr)
print(bubble_sort(randArr))