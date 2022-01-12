def selection_sort(li):
    sort_index = 0
    smallest_i = sort_index
    while sort_index < len(li):
        smallest_i = sort_index
        for i in range(sort_index, len(li)):
            if li[smallest_i] >= li[i]:
                smallest_i = i
            print(li[smallest_i])
        li[sort_index], li[smallest_i] = li[smallest_i], li[sort_index]
        sort_index = sort_index + 1
        
    return li

print(selection_sort([5,2,4,1,3,6,9,7,0,8]))
print(selection_sort([5,3,1,2,4,6,9,7,0,8]))