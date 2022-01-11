from classes.unit import(unit)

class Pirate(unit):

    def __init__( self , name, job):
        self.name = name
        super().__init__(100, 15, 3,job)
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.cHealth}\n")

    def attack ( self , target ):
        self.untilTurn += 30
        target.takeDamage(self.strength, self.name)
        return self

    def takeDamage(self, amount, name):
        if(self.defending) : amount = int(amount /2)
        print(f"{name} has hit {self.name} dealing {amount} damage")
        super().takeDamage(amount)
        if(self.cHealth <= 0) : print(f"{self.name} has been knocked out")

    def skill(self, target):
        self.untilTurn = self.job.skill_cost
        self.job.skill(target)
    
    def skill(self, target, unit=None):
        self.untilTurn = self.job.skill_cost
        if unit == None : self.job.skill(target)
        else : self.job.skill(target, unit)
    
    # TODO: Give pirates items.... So they can buff themselves
