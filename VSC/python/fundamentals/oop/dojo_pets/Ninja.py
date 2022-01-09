from Pets import Pet, Dog, Cat
import random #used to get random pets

class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    def walk(self):
        self.pet.play()
        trickIndex = random.randrange(0,len(self.pet.tricks),1)
        print(f"{self.pet.name} has done a {self.pet.tricks[trickIndex]}")
        return self
    def feed(self):
        if(self.pet_food > 0):
            self.pet.eat()
            print(f"Feeding {self.pet.name} a {self.treats[random.randrange(0,len(self.treats))]}!")
            self.pet_food = self.pet_food -1
        else:
            print("OH NO!! You need more pet food!")
        return self #maybe consider cutting the action chain short if no food
    def bathe(self):
        self.pet.noise()
        return self

NinNin = Ninja("NinNin", "TenTen", ["Donut", "Bubble Tea", "Sushi"], 10, Dog("Commander Congee", "palamute" ,["Barrel Roll", "Paw Shake", "Dance"]))

NinNin.feed().feed().feed().feed().feed().walk().bathe()

Shiren = Ninja("Shiren", "blade", ["fish", "sushi", "Wild Boar"], 2, Cat("Admiral Acorn", "Palico", ["Backflip", "Prowl", "Sleep"]))

Shiren.feed().feed().feed().feed().walk().walk().walk().bathe()