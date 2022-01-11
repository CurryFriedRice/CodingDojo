import random

class job:
    def __init__(self):
        self.hp_mod = 1  #falls to 0 you die
        self.sta_mod = 1 # falls to 0 you exhaust
        self.str_mod = 1 # adjusts how much damage you do
        self.spd_mod = 1 # adjusts how often you go
        self.init_mod = 1 #where they start in turn
    def skill(self, target):
        raise NotImplemented

class swordMaster(job): #leo
    def __init__(self):
        self.hp_mod = 1.5  #falls to 0 you die
        self.sta_mod = 1.25 # falls to 0 you exhaust
        self.str_mod = 100 # adjusts how much damage you do
        self.spd_mod = 1 # adjusts how often you go
        self.init_mod = 1
        self.skill_cost = 100
    def skill(self, target):
        print(f"{target.name} has been disarmed!")
        target.reduceStrength(random.randrange(5,15,1))

class brawler(job): #raph
    def __init__(self):
        self.hp_mod = 2  #falls to 0 you die
        self.sta_mod = 1.5 # falls to 0 you exhaust
        self.str_mod = 2 # adjusts how much damage you do
        self.spd_mod = .75 # adjusts how often you go
        self.init_mod = 1.25
        self.skill_cost = 100
    def skill(self, target):
        print(f"{target.name} is being restrained!")
        target.reduceSpeed(random.randrange(5,15,1))

class tech(job): #don
    def __init__(self):
        self.hp_mod = 1  #falls to 0 you die
        self.sta_mod = .75 # falls to 0 you exhaust
        self.str_mod = 1 # adjusts how much damage you do
        self.spd_mod = 1.5 # adjusts how often you go
        self.init_mod = 1.5
        self.skill_cost = 50
    def skill(self, target):
        print(f"{target.name} has been shocked by electricity!")
        target.untilTurn += random.randrange(5,250,1)

class jester(job): #mike
    def __init__(self):
        self.hp_mod = 1  #falls to 0 you die
        self.sta_mod = 1 # falls to 0 you exhaust
        self.str_mod = 1.25 # adjusts how much damage you do
        self.spd_mod = 2 # adjusts how often you go
        self.init_mod = 3
        self.skill_cost = 50
    def skill(self, targets):
        print("Team is getting pumped! been pumped up!")
        for T in targets:
            T.speed += random.randrange(2,10,1)
            T.strength += random.randrange(2,10,1)

class captain(job): #Jack Sparrow
    def __init__(self):
        self.hp_mod = 5  #falls to 0 you die
        self.sta_mod = 2 # falls to 0 you exhaust
        self.str_mod = 25 # adjusts how much damage you do
        self.spd_mod = 1.25 # adjusts how often you go
        self.init_mod = 2
        self.skill_cost = 200
    def skill(self, targets, unit):
        print(f"{unit.name} Has loosed a volley of cannon fire!")
        for T in targets:
            T.takeDamage(random.randrange(int(unit.strength/2), int(unit.strength*1.5), 1), unit.name)

class fencer(job): #William Turner
    def __init__(self):
        self.hp_mod = 4  #falls to 0 you die
        self.sta_mod = 2 # falls to 0 you exhaust
        self.str_mod = 15 # adjusts how much damage you do
        self.spd_mod = 3 # adjusts how often you go
        self.init_mod = 0.5
        self.skill_cost = 100
    def skill(self, target): #this skill supposedly targets self...
        print(f"{target.name} has accelerated his movements")
        target.speed += 25
