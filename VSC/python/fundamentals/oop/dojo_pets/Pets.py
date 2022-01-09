class Pet:
    def __init__(self, name, pet_type, tricks):
        self.name = name
        self.type = pet_type
        self.tricks = tricks
        self.health = 0
        self.energy = 0
    def sleep(self):
        self.energy += 25
        # raise NotImplementedError
    def eat(self):
        self.energy += 5
        self.health += 10
        # raise NotImplementedError
    def play(self):
        self.health += 5
        # raise NotImplementedError
    def noise(self):
        raise NotImplementedError

class Dog(Pet):
    def __init__(self, name, pet_type, tricks):
        super().__init__(name,pet_type, tricks)
        self.type = "Dog"
    def noise(self):
        print("wan wan")

class Cat(Pet):
    def __init__(self, name, pet_type, tricks):
        super().__init__(name,pet_type, tricks)
        self.type = "Cat"
    def noise(self):
        print("nyan")


