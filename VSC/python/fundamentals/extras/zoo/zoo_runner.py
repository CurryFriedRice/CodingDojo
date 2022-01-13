import zoo

class GameRunner:
    def __init__(self):
        self.my_Zoo = zoo(input("Name your zoo!"))
    
    def zoo_main(self):
        print("ACTIONS")
        for i in self.my_Zoo.action_list:
            print(i)
        choice = input("Type your choice\n")
        if choice == "exit": return
        elif(self.validate_input(self.my_Zoo.animal_list, choice)):
            self.my_Zoo.run_action(choice)
        else: 
            print("invalid input")
        self.run_zoo()
    # @staticmethod

    def validate_input(self, li, choice):
        return choice in li
    
        
    # Do a thing based on the user input once it's been validated by dictionary check
    # def run_action(self, choice):
    #     if choice == "exit":

    #     #action List
    #     elif choice == "buy": self.
    #     elif choice == "feed":
    #     elif choice == "rest":
    #     elif choice == "breed":
    #     #
    #     elif choice == ""


