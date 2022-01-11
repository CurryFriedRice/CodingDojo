from classes.unit import(unit)
import random

class Ninja(unit):

    def __init__( self , name, job):
        self.job = job
        super().__init__(100, 10, 9,job)
        self.name = name
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")
    
    def attack( self , target ):
        self.untilTurn += 30
        self.defending = False
        damage = (random.randrange(self.strength- 3, self.strength+ 3,1)+ random.randrange(self.speed- 3, self.speed+ 3,1) )
        target.takeDamage(damage, self.name)
        return self
    
    def skill(self, target):
        self.defending = False
        self.untilTurn = self.job.skill_cost
        self.job.skill(target)
    
    #ninjas do damage based on thier speed
    def getDamage(self):
        return super().getDamage() + self.speed
    
    def takeDamage(self, amount, name):
        if self.defending and random.randrange(0,4,1) < 3:
            print(f"{self.name} has dodged {name}'s attack!")
        else: 
            print(f"{name} has hit {self.name} dealing {amount} damage")
            super().takeDamage(amount)    
            if(self.cHealth <= 0) : print(f"{self.name} has been knocked out")

    def takeAction(self, action):
        pass

    def item(self, index, target):
        self.untilTurn += 20
        if index == "1":
            print(f"{target.name} has healed 100 health") 
            target.healHealth(100)
        elif index == "2":
            print(f"{target.name} has been pumped up") 
            target.increaseStrength(random.randrange(2, 10,1))
        elif index == "3":
            print(f"{target.name} is shredding up a storm.")
            target.increaseSpeed(random.randrange(1, 8,1))
        elif index == "4":
            print(f"{target.name} has been regained consiousness")
            target.resUnit(50)