class User:
    def __init__ (self,name, balance = 0):
        self.name = name
        self.balance = balance
        return self
    def make_withdrawal (self, amount):
        self.balance -= amount
        return self
    def make_deposit(self, amount):
        self.balance += amount
        return self
    def display_user_balance(self):
        print(f"USER: {self.name}, {self.balance}")
        return self
    def transfer_money(self, other_user, amount):
        other_user.balance += amount
        self.balance -= amount
        return self

Greg = User("Gregory")
Adam = User("Adam")
Soren = User("Soren")

Greg.make_deposit(10000)
Greg.make_deposit(138)
Greg.make_deposit(862)
Greg.make_withdrawal(684)
Greg.display_user_balance()

Adam.make_deposit(1338)
Adam.make_deposit(2745)
Adam.make_withdrawal(347)
Adam.make_withdrawal(2134)
Adam.display_user_balance()

Soren.make_deposit(485734)
Soren.make_withdrawal(3734)
Soren.make_withdrawal(37823)
Soren.make_withdrawal(173374)
Soren.display_user_balance()

Greg.transfer_money(Soren,1000)

Greg.display_user_balance()
Soren.display_user_balance()