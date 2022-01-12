import unittest

class math_dojo:
    def __init__ (self):
        self.result = 0
    
    def add(self, num, *nums):
        self.result = self.result + num
        for n in nums:
            self.result = self.result + n
        return self

    def subtract(self, num, *nums):
        self.result = self.result - num
        for n in nums:
            self.result = self.result - n
        return self


class math_dojo_tests(unittest.TestCase):
    
    def test1(self):
        self.m_dojo.add(5)
        self.assertEqual(self.m_dojo.result, 5)

    def test2(self):
        self.m_dojo.add(1,2,3,4,5).subtract(100)
        self.assertLess(self.m_dojo.result, 0)

    def test(self):
        self.m_dojo.subtract(13,2,4).subtract(-10,-100)
        self.assertGreater(self.m_dojo.result, 0)
        
    def setUp(self):
        #print("Setting Up")
        self.m_dojo = math_dojo()
        #print("Finish Setup")

    def tearDown(self) -> None:
        #print("tearing Down")
        return super().tearDown()



if __name__ == '__main__':
    unittest.main()