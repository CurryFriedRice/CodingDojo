from typing import NewType
import copy, random


class Zoo:
    animal_list = ("elephant", "tiger")
    action_list = ("buy", "feed", "rest", "breed", "rename", "exit")

    def __init__ (self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, aniType):
        animal = self.getAnimalList
        if type(aniType) == type(animal):
            self.animals.append(aniType)

    def breed(self, a, b):
        if type(a) == type(b) and a.sex == "male" and b.sex == "female":
            baby = copy(a)
            baby.name = input("Name the child")
            self.animals.append[baby]
            baby.yearsToLive = type(baby).maxYearsToLive
    
    def getAnimalList(self):
        print("Animal List")

class animal:
    def __init__(self, name):
        self.name = name
        self.sex
        self.yearsToLive

    def sleep(self):
        print(f"{self.name} has taken a nap {self.sleep_state}")

    def feed(self):
        print(f"{self.name} has eaten their favorite {self.food}")

class tiger(animal):
    maxYearsToLive = 40
    def __init__ (self, name, sex = random.choice(["male", "female"])):
        self.name = name
        self.sex = sex
        self.yearsToLive = random.randrange(3,15)
        self.sleep_state = "in the cave"
        self.food = " leg of gazeelle"

class elephant(animal):
    maxYearsToLive = 50
    def __init__ (self, name, sex = random.choice(["male", "female"])):
        self.name = name
        self.sex = sex
        self.yearsToLive = random.randrange(2,25)
        self.sleep_state = " standing upright"
        self.food = " "


zootopia = Zoo("Zootopia")

zootopia.add_animal(elephant("Horton"))
zootopia.add_animal(elephant("Hearton"))
zootopia.add_animal(elephant("Tabitha", "female"))

zootopia.run_zoo()