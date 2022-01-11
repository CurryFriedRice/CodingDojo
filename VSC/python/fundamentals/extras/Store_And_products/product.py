class product:
    def __init__(self, name, price, _id, category, stock = 0):
        self.id = _id
        self.name = name
        self.price = price
        self.category = category
        self.stock = stock

    def update_price(self, percent_change,is_increased):
        if is_increased is False: percent_change *= -1 #if we aren't increasing then negative it
        self.price = self.price * (1+(percent_change/100)) #remember we're multiplying the price by a PERCENT
        return self

    def print_info(self):
        print(f"{self.name} : {self.category} : {self.price}")
        return self