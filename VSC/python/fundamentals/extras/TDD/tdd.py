import unittest

def reverse_list(li):
    temp = []
    for i in range(len(li)):
        temp.append(li.pop())
    return temp

class reverse_list_tests(unittest.TestCase):
    def test1(self):
        self.assertEqual(reverse_list([1,3,5]), [5,3,1])
    
    def test2(self):
        self.assertEqual(reverse_list([135,2,56,3,123,15661]), [15661, 123,3,56,2,135])

    def test3(self):
        self.assertTrue(reverse_list([19484,13151,231,"dog", "RED"]) == ["RED", "dog",231,13151,19484])

    def test4(self):
        self.assertTrue(reverse_list([]) == [])

def is_palindrome(value):
    toStr = f"{value}"
    for i in range(int(len(toStr)/2)):
        if toStr[i] != toStr[len(toStr)-(1 + i)]:
            return False
    return True

class palindrome_test(unittest.TestCase):
    def test1(self):
        self.assertTrue(is_palindrome("racecar"))
    def test2(self):
        self.assertFalse(is_palindrome("javar"))
    def test3(self):
        self.assertTrue(is_palindrome(123321))
    def test4(self):
        self.assertFalse(is_palindrome(123415))
    def test5(self):
        self.assertFalse(is_palindrome(["afag",1234]))
    def test6(self):
        self.assertFalse(is_palindrome("rOR"))


def to_coins(change):
    coins = []
    coinVals = [25,10,5,1]

    for val in coinVals:
        coin = 0
        while change >= val:
            change = change - val
            coin = coin + 1
        coins.append(coin)
    return coins

class coin_tests(unittest.TestCase):
    def test1(self):
        self.assertEqual(to_coins(48), [1,2,0,3])

    def test2(self):
        self.assertEqual(to_coins(15), [0,1,1,0])
    
    def test3(self):
        self.assertEqual(to_coins(58), [2,0,1,3])
    
    def test4(self):
        self.assertEqual(to_coins(178), [7,0,0,3])

    def test5(self):
        self.assertEqual(to_coins(18423), [736, 2, 0, 3])


def factorialize(number):
    if number == 0:
        return 1
    if number > 0: variance = 1
    else:  variance = -1
    return number * factorialize(number-variance)


class factorialize_test(unittest.TestCase):
    def test1(self):
        self.assertIs(factorialize(4), 24)
    def test2(self):
        self.assertIsInstance(factorialize(4), type(2))
    def test3(self):
        self.assertIsNotNone(factorialize(4))
    def test4(self):
        self.assertTrue(0 > factorialize(-3))



def fibonacci(number, index = 0, one_ago = 0, two_ago = 0):
    if number == 0:
        return 0
    elif number == 1:
        return 1
    
    if index == 0:
        return fibonacci(number,index + 1, 0, 0)
    elif index == 1:
        return fibonacci(number,index + 1, 1, 0)
    elif index == number:
        return one_ago+two_ago
    else:
        return fibonacci(number, index+1, one_ago + two_ago, one_ago )

class fibonacci_test(unittest.TestCase):
    def test1(self):
        self.assertEqual(fibonacci(5), 5)
    
    def test2(self):
        self.assertGreaterEqual(fibonacci(0), 0)

    def test3(self):
        self.assertEqual(type(fibonacci(4)), type(3))


if __name__ == "__main__":
    unittest.main()
