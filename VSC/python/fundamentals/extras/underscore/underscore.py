class Underscore:
    def map(self,iterable,callback):
        for i in range(len(iterable)): 
            iterable[i] = (callback(iterable[i]))
        return iterable
    def find(self, iterable, callback):
        for i in iterable:
            if callback(i) : return i
        return False
    def filter(self, iterable, callback):
        i = 0
        while i < len(iterable):
            if not callback(iterable[i]) : iterable.pop(i)
            else: i = i+1
        return  iterable
    def reject(self,iterable, callback):
        i = 0
        while i < len(iterable):
            if callback(iterable[i]) : iterable.pop(i)
            else: i = i+1
        return  iterable

_ = Underscore()

# evens = _.filter([1,2,3,4,5,6], lambda x : x % 2 == 0)
print(_.map([1,2,3], lambda x: x*2)) # should return [2,4,6]
print(_.find([1,2,3,4,5,6], lambda x: x>4)) # should return the first value that is greater than 4
print(_.filter([1,2,3,4,5,6], lambda x: x%2==0)) # should return [2,4,6]
print(_.reject([1,2,3,4,5,6], lambda x: x%2==0)) # should return [1,3,5]
