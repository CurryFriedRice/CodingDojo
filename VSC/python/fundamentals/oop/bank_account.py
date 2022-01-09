class bank_account:
    bank_name = "Dojo Treasury"
    all_accounts = []
    def __init__(self, int_rate, init_balance): #setup
        self.interest_rate = int_rate
        self.balance = init_balance
        bank_account.all_accounts.append(self)
    def deposit(self, amount): #add money to an account
        self.balance = self.balance + amount
        return self
    def withdraw(self, amount): #Withdraw money from an account if available
        if(self.balance - amount < 0):
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    def display_account_info(self): #Print out the balance of that account
        print(f"Balance ${self.balance}")
        return self
    def yield_interest(self): #AddInterest to the account
        self.balance *= (1 + self.interest_rate)
        return self
    @classmethod
    def print_all_accounts(cls):
        print("Printing All Accounts")
        for acct in cls.all_accounts:
            print(f"Balance: ${acct.balance}")

"""
checkings = bank_account(0.002,10000)
savings = bank_account(0.012, 489238)

savings.deposit(4832).deposit(2300).deposit(3912).yield_interest().display_account_info()
checkings.deposit(3888).withdraw(123).withdraw(54).deposit(4350).withdraw(184).withdraw(371).yield_interest().display_account_info()

bank_account.print_all_accounts()
""" 