from classes.ninja import Ninja
from classes.pirate import Pirate
from classes.job import swordMaster, brawler, tech, jester, captain, fencer
import random

#This is the game manager It manages the entire state of the game and exits when the player wins or loses

#gets input based on the number entered... I feel like I should be using dictionaries though
def getInput(prompt, limit):
    #print("1. Attack\n2. Skill\n3. Defend\n4. Item")
    print(prompt)
    response = "-1"
    while int(response) < 0 or int(response) > limit:
        response = input("Use Numbers to choose option: ")
        if response == '':
            response = "-1"
    return response

#Checks to see if the team has anyone knocked out
def anyUnconsious(targets):
    for unit in targets:
        if unit.cHealth == 0: return True
    return False

#get the list of unconsious targets
def getUnconsious(targets):
    prompt = ""
    index = 1
    targetList = []
    for unit in targets:
        if unit.cHealth <= 0:
            prompt += f"{index}. {unit.name}\n"
            index = index + 1
            targetList.append(unit)
    if index == 1:
        print("No one is unconsious")
        return
    targ = targetList[int(getInput(prompt, index))-1]
    return targ

#get the list of units that are alive that are potential targets
def getAlive(targets):
    prompt = ""
    targetList = []
    index = 1
    for unit in targets:
        if unit.cHealth > 0:
            prompt += f"{index}. {unit.name}\n"
            index = index + 1
            targetList.append(unit)
    targ = targetList[int(getInput(prompt, index))-1]
    return targ

#It uses a modified version of GetAlove to target a random unit...
def AITargeting(targets):
    targetList = []
    index = 1
    for unit in targets:
        if unit.cHealth > 0:
            index = index + 1
            targetList.append(unit)
    fart = random.randrange(0,len(targetList),1)
    print (fart)
    targ = targetList[random.randrange(0,len(targetList),1)]
    return targ


#the meat and bones of the game
class gameManager:
    def __init__(self, playerTeam, enemyTeam):
        self.p_team = playerTeam
        self.e_team = enemyTeam
    
    #Checks to see if members of that team are alive
    def teamAlive(self, team):
        for char in team:
            if char.cHealth > 0: return True
        return False
    
    #Tells each unit to reduce speed from delay until turn
    def updateTurnOrder(self):  # move along the turn delay based on speed
        for unit in self.p_team:
            unit.updateTurn()
        for unit in self.e_team:
            unit.updateTurn()

    #so to speak if there was a UI elemnet I would target that instead of this
    #We build out the lines out horizontally so they line up and are somewhat uniform
    def displayUI(self, tarList, teamName):
        def addPadding(line, length): # add's padding so the "bar" matches the end of the others
            while len(line) < (length):
                line += " "
            line += " | "
            return line
        # each Line so it's built hornizontally
        nameLine =    "Name     | "
        healthLine =  "Health   | "
        strLine =     "Strength | "
        spdLine =     "Speed    | "
        untilTurn =   "Delay    | "
        for item in tarList:
            nameLine += (item.name + " | ")

            #basic health check to see if health should be printed or Unconsious
            if(item.cHealth > 0):
                healthLine += (str(item.cHealth) + "/" + str(item.mHealth))
            else: healthLine += "UNCONSIOUS"
            healthLine = addPadding(healthLine, len(nameLine) - 3)
            
            #Show the unit's strength
            strLine  += str(item.strength)
            strLine = addPadding(strLine, len(nameLine) - 3)

            #Show the unit's speed
            spdLine += str(item.speed)
            spdLine = addPadding(spdLine, len(nameLine) - 3)

            #Show how long until the unit's turn
            untilTurn += str(item.untilTurn)
            untilTurn = addPadding(untilTurn, len(nameLine) - 3)
        print(f"------{teamName} Team-----")
        print(f"{nameLine}\n{healthLine}\n{strLine}\n{spdLine}\n{untilTurn}")
        return self

    def updateTurn(self, team):
        for unit in team:
            if unit.cHealth > 0: # So if the ucrrent health of the unit is above zero then update its turn
                unit.updateTurn()
        return self
    
    def playerTurn(self):
        for unit in self.p_team:
            while unit.turnReady():
                if self.teamAlive(self.e_team) == False: return #if the enemy team is defeated just get break loop
                #unitAction = unit.actionList("1. Attack\n2. Skill\n3. Defend\n4. Item: ", 4)
                print(f"{unit.name} is ready!")
                userInput = getInput("1. Attack\n2. Skill\n3. Defend\n4. Item: ", 4)
                if userInput == "1": #attack
                    userInput = getAlive(self.e_team)
                    unit.attack(userInput)
                elif userInput == "2": #skill
                    #depending on the class your targeting values area different
                    #do checks on the job for targeting
                    if type(unit.job) == type(jester()):
                        unit.skill(self.p_team)
                    elif type(unit.job) == type(captain()):
                        unit.skill(self.e_team, unit)
                    else:
                        targ = getAlive(self.e_team)
                        unit.skill(targ)
                    pass
                elif userInput == "3": #Defend
                    unit.defend()
                    pass
                elif userInput == "4": #item needs to open up a second menu that requires an item selection
                    userInput = getInput("1. Pizza\n2. Bandana\n3. Skateboard\n4. Cup o Life Ramen", 4)
                    if userInput == "1" or userInput == "2" or userInput == "3": # I guess I coulda swapped the cases 
                        unit.item(userInput, getAlive(self.p_team))
                    elif anyUnconsious(self.p_team):
                        unit.item(userInput, getUnconsious(self.p_team))
                else: #it's something that needs a target create a target list
                    raise NotImplementedError
                    pass
                input("ENTER to continue")
                self.displayUI(GM.e_team,"Enemy").displayUI(GM.p_team, "Player")
                
                #print out the actions
                #we need to do an input here... and make sure it's valid....
        return self
    def opponentTurn(self): #So this is the AI.... THE AI doesn't use items
        for unit in self.e_team:
            while unit.turnReady() and anyUnconsious(self.p_team):
                unitAction = 3#random.randrange(0,3,1)
                if unitAction == 1: # Attack
                    unit.attack(AITargeting(self.p_team))
                elif unitAction == 2: #Skill
                    if type(unit.job) == type(captain()): #checks to see what class they are... Ideally they would just do the thing
                        unit.skill(self.p_team, unit)
                    elif type(unit.job) == type(fencer()):
                        unit.skill(unit)
                elif unitAction == 3:
                    unit.defend()
        return self

    def selectTarget(self):
        index = 0
        for unit in self.e_team:
            pass
        for unit in self.p_team:
            pass


#your ninja party
michelangelo = Ninja("Michelanglo", jester())
raph = Ninja("Rapheal", brawler())
don = Ninja("Donatello", tech())
leo = Ninja("Leonardo", swordMaster())

#your pirate party
jack_sparrow = Pirate("Jack Sparrow", captain())
will = Pirate("William Turner", fencer())

ninjaTeam = [leo, don, raph,michelangelo]
pirateTeam = [jack_sparrow, will]

GM = gameManager(ninjaTeam, pirateTeam)

turn = 0

#Game loop 
while GM.teamAlive(GM.p_team) and GM.teamAlive(GM.e_team):
    turn = turn + 1
    for i in range(50): #clear the console and update to the next turn
        print("\n")
    print(f"=====TURN {turn}======")
    GM.updateTurn(GM.e_team).updateTurn(GM.p_team)
    GM.displayUI(GM.e_team,"Enemy").displayUI(GM.p_team, "Player").playerTurn().opponentTurn()
    input(f"Turn {turn} End. Press ENTER to move to next turn")



def getTips(tip): #general tips that print out when your items
    if tip == 1: print("Watch out! The captain can hit everyone at once!")
    elif tip == 2: print("Don't forget to use Items to keep yourself health or stronger")
    elif tip == 3: print("Leoardo's skill disarms the enemy and reduces their damage")
    elif tip == 4: print("Michealangelo boosts the team's stats! RADICAL!")
    elif tip == 5: print("Use Donatello's skill to delay their actions!")
    else: print("Rapheal's skill slows the enemy down")

if GM.teamAlive(GM.p_team):
    print(f"Cowabunga dude! You've proven your ninja prowess and defeated the Captain in {turn} turns")
else:
    print("You'll Remember this as the day you ALMOST caught CAPTAIN JACK SPARROW!")
    getTips(random.randrange(0,5,1))