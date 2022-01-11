class mathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result = self.result + num
        for i in nums:
            self.result = self.result + i
        return self
    
    def subtract(self, num, *nums):
        self.result = self.result - num
        for i in nums:
            self.result = self.result - i
        return self
        

print(mathDojo().add(10,5,23,1,3,5).subtract(145,52,52).add(38,18,1,1).result)
print(mathDojo().subtract(5,5,3,10,2).add(13,16).add(38175,18,1,1).result)