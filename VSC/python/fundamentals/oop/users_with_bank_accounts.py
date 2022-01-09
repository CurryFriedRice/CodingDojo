from bank_account import bank_account

class User:
    account_list = {}
    def __init__ (self,name, balance = 0):
        self.name = name
        self.account_list["Checking"] =  bank_account(0.012, balance)
    def make_withdrawal (self, accountID, amount = 0):
        self.account_list[accountID].withdraw(amount)
        return self
    def make_deposit(self, accountID, amount = 0):
        self.account_list[accountID].deposit(amount)
        return self
    def make_account(self, accountID, amount = 0):
        self.account_list[accountID] = bank_account(0.012, amount)
        return self
    def del_account(self, accountID):
        self.account_list.pop(accountID)
        return self
    def display_user_balance(self, accountID = 0):
        acct_keys = self.account_list.keys()
        for key in acct_keys: # Why use the keys? So i can put the in front of the Balance
            print(f"USER: {self.name}, {key} Balance : {self.account_list[key].balance}")
        return self
    def transfer_money(self, sourceAccount, targetAccount, amount):
        self.account_list[sourceAccount].withdraw(amount)
        if(self.account_list[sourceAccount].balance  >= 0):
            self.account_list[targetAccount].deposit(amount)
        return self

Greg = User("Greg", 10000)
Greg.make_deposit("Checking", 1000)
Greg.make_account("Savings", 100000)
Greg.transfer_money("Checking", "Savings", 10000)

Greg.display_user_balance()