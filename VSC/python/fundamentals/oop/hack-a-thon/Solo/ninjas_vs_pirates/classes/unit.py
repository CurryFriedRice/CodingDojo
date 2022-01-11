import math

#the base unit... and what units can do
#really tried to be consistent and keep print calls out of the Unit base class
class unit:
    def __init__(self, health, speed, strength, job):
        self.mHealth = int(health*job.hp_mod)       # so it doesn't overheal
        self.cHealth = self.mHealth                 # Current health
        self.strength = int(strength * job.str_mod) # How hard you hit
        self.speed = int(speed * job.spd_mod)       # How fast you go
        self.untilTurn = int(20 * job.init_mod)     # Initial preparedness
        self.job = job                              # Skill that the unit gets
        self.defending = False                      # is the unit defending


    def takeAction(self, action):
        pass
    def defend(self):
        self.defending = True
        self.untilTurn += self.speed *2 
        print(f"{self.name} is defending")

    def updateTurn(self):
        self.untilTurn -= self.speed

    def turnReady(self): #so they'll be ready as long as their "delay" is zero or below
        return self.untilTurn <= 0

    def show_stats(self): # I don't use this since I want the party to be shown inline...
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.cHealth}\n")
    
    def getDamage(self):
        return self.strength

    #add delay until your unit's next turn
    def addDelay(self, delay):
        self.untilTurn += delay

    #healing while you're awake
    def healHealth(self, amount):
        if self.cHealth == 0: #meaning you're already down
            return
        self.cHealth += amount
        if(self.cHealth > self.mHealth): self.cHealth = self.mHealth # no overhealing

    #regular healing doesn't pick you up if you're down
    def resUnit(self, amount):
        if self.cHealth == 0:
            self.cHealth = amount

    def takeDamage(self, amount):
        self.cHealth -= amount
        if self.cHealth <= 0: 
            self.cHealth = 0 # no overkilling


    #basic reduce the speed of this unit to a minimum of 5 or increase it limitlessly
    def reduceSpeed(self, amount):
        self.speed = max(self.speed - amount, 5)
    def increaseSpeed(self, amount):
        self.speed += amount

    #basic reduce the strength of this unit to a minimum of 5 or increase it limitlessly
    def reduceStrength(self, amount):
        self.strength = max(self.strength - amount, 5)
    def increaseStrength(self, amount):
        self.strength += amount

