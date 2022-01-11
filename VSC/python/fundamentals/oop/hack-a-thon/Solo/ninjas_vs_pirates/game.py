from classes.ninja import Ninja
from classes.pirate import Pirate
from classes.job import swordMaster, brawler, tech, jester, captain, fencer
import random

#This is the game manager It manages the entire state of the game and exits when the player wins or loses

#gets input based on the number entered... I feel like I should be using dictionaries for human readability
def get_input(prompt, limit):
    #print("1. Attack\n2. Skill\n3. Defend\n4. Item")
    print(prompt)
    response = "-1"
    while int(response) < 0 or int(response) > limit:
        response = input("Use Numbers to choose option: ")
        if response == '':
            response = "-1"
    return response

#Checks to see if the team has anyone knocked out
def any_unconsious(targets):
    for unit in targets:
        if unit.cHealth == 0: return True
    return False

#get the list of unconsious targets
def get_unconsious(targets):
    prompt = ""
    index = 1
    target_list = []
    for unit in targets:
        if unit.cHealth <= 0:
            prompt += f"{index}. {unit.name}\n"
            index = index + 1
            target_list.append(unit)
    if index == 1:
        print("No one is unconsious")
        return
    targ = target_list[int(get_input(prompt, index))-1]
    return targ

#get the list of units that are alive that are potential targets
def get_alive(targets):
    prompt = ""
    target_list = []
    index = 1
    for unit in targets:
        if unit.cHealth > 0:
            prompt += f"{index}. {unit.name}\n"
            index = index + 1
            target_list.append(unit)
    targ = target_list[int(get_input(prompt, index))-1]
    return targ

#It uses a modified version of GetAlove to target a random unit...
def ai_targeting(targets):
    target_list = []
    index = 1
    for unit in targets:
        if unit.cHealth > 0:
            index = index + 1
            target_list.append(unit)
    fart = random.randrange(0,len(target_list),1)
    print (fart)
    targ = target_list[random.randrange(0,len(target_list),1)]
    return targ


#the meat and bones of the game
class GameManager:
    def __init__(self, playerTeam, enemyTeam):
        self.p_team = playerTeam
        self.e_team = enemyTeam
    
    #Checks to see if members of that team are alive
    def team_alive(self, team):
        for char in team:
            if char.cHealth > 0: return True
        return False
    
    #Tells each unit to reduce speed from delay until turn
    def update_turn_order(self):  # move along the turn delay based on speed
        for unit in self.p_team:
            unit.updateTurn()
        for unit in self.e_team:
            unit.updateTurn()

    #so to speak if there was a UI elemnet I would target that instead of this
    #We build out the lines out horizontally so they line up and are somewhat uniform
    def display_ui(self, target_list, teamName):
        def add_padding(line, length): # add's padding so the "bar" matches the end of the others
            while len(line) < (length):
                line += " "
            line += " | "
            return line
        # each Line so it's built hornizontally
        name_line =    "Name     | "
        health_line =  "Health   | "
        strength_line =     "Strength | "
        speed_line =     "Speed    | "
        until_turn_line =   "Delay    | "
        for item in target_list:
            name_line += (item.name + " | ")

            #basic health check to see if health should be printed or Unconsious
            if(item.cHealth > 0):
                health_line += (str(item.cHealth) + "/" + str(item.mHealth))
            else: health_line += "UNCONSIOUS"
            health_line = add_padding(health_line, len(name_line) - 3)
            
            #Show the unit's strength
            strength_line  += str(item.strength)
            strength_line = add_padding(strength_line, len(name_line) - 3)

            #Show the unit's speed
            speed_line += str(item.speed)
            speed_line = add_padding(speed_line, len(name_line) - 3)

            #Show how long until the unit's turn
            until_turn_line += str(item.until_turn_line)
            until_turn_line = add_padding(until_turn_line, len(name_line) - 3)
        print(f"------{teamName} Team-----")
        print(f"{name_line}\n{health_line}\n{strength_line}\n{speed_line}\n{until_turn_line}")
        return self

    def updateTurn(self, team):
        for unit in team:
            if unit.cHealth > 0: # So if the ucrrent health of the unit is above zero then update its turn
                unit.updateTurn()
        return self
    
    def playerTurn(self):
        for unit in self.p_team:
            while unit.turnReady():
                if self.team_alive(self.e_team) == False: return #if the enemy team is defeated just get break loop
                #unitAction = unit.actionList("1. Attack\n2. Skill\n3. Defend\n4. Item: ", 4)
                print(f"{unit.name} is ready!")
                userInput = get_input("1. Attack\n2. Skill\n3. Defend\n4. Item: ", 4)
                if userInput == "1": #attack
                    userInput = get_alive(self.e_team)
                    unit.attack(userInput)
                elif userInput == "2": #skill
                    #depending on the class your targeting values area different
                    #do checks on the job for targeting
                    if type(unit.job) == type(jester()):
                        unit.skill(self.p_team)
                    elif type(unit.job) == type(captain()):
                        unit.skill(self.e_team, unit)
                    else:
                        targ = get_alive(self.e_team)
                        unit.skill(targ)
                    pass
                elif userInput == "3": #Defend
                    unit.defend()
                    pass
                elif userInput == "4": #item needs to open up a second menu that requires an item selection
                    userInput = get_input("1. Pizza\n2. Bandana\n3. Skateboard\n4. Cup o Life Ramen", 4)
                    if userInput == "1" or userInput == "2" or userInput == "3": # I guess I coulda swapped the cases 
                        unit.item(userInput, get_alive(self.p_team))
                    elif any_unconsious(self.p_team):
                        unit.item(userInput, get_unconsious(self.p_team))
                else: #it's something that needs a target create a target list
                    raise NotImplementedError
                    pass
                input("ENTER to continue")
                self.display_ui(GM.e_team,"Enemy").display_ui(GM.p_team, "Player")
                
                #print out the actions
                #we need to do an input here... and make sure it's valid....
        return self
    def opponentTurn(self): #So this is the AI.... THE AI doesn't use items
        for unit in self.e_team:
            while unit.turnReady() and any_unconsious(self.p_team):
                unitAction = 3#random.randrange(0,3,1)
                if unitAction == 1: # Attack
                    unit.attack(ai_targeting(self.p_team))
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

GM = GameManager(ninjaTeam, pirateTeam)

turn = 0

#Game loop 
while GM.team_alive(GM.p_team) and GM.team_alive(GM.e_team):
    turn = turn + 1
    for i in range(50): #clear the console and update to the next turn
        print("\n")
    print(f"=====TURN {turn}======")
    GM.updateTurn(GM.e_team).updateTurn(GM.p_team)
    GM.display_ui(GM.e_team,"Enemy").display_ui(GM.p_team, "Player").playerTurn().opponentTurn()
    input(f"Turn {turn} End. Press ENTER to move to next turn")



def getTips(tip): #general tips that print out when your items
    if tip == 1: print("Watch out! The captain can hit everyone at once!")
    elif tip == 2: print("Don't forget to use Items to keep yourself health or stronger")
    elif tip == 3: print("Leoardo's skill disarms the enemy and reduces their damage")
    elif tip == 4: print("Michealangelo boosts the team's stats! RADICAL!")
    elif tip == 5: print("Use Donatello's skill to delay their actions!")
    else: print("Rapheal's skill slows the enemy down")

if GM.team_alive(GM.p_team):
    print(f"Cowabunga dude! You've proven your ninja prowess and defeated the Captain in {turn} turns")
else:
    print("You'll Remember this as the day you ALMOST caught CAPTAIN JACK SPARROW!")
    getTips(random.randrange(0,5,1))