class Pet:
    def __init__(self, name, pet_type, tricks):
        self.name = name
        self.type = pet_type
        self.tricks = tricks
        self.health = 0
        self.energy = 0
    def sleep(self): #Gains energy
        self.energy += 25
        # raise NotImplementedError
    def eat(self): #Becomes more health and energetic
        self.energy += 5
        self.health += 10
        # raise NotImplementedError
    def play(self): #becomes healthier
        self.health += 5
        # raise NotImplementedError
    def noise(self): #this is  set based on the pet. What sound is it supposed to make if you don't know what it is
        raise NotImplementedError

class Dog(Pet):
    def noise(self):
        print("wan wan")

class Cat(Pet):
    def noise(self):
        print("nyan")


