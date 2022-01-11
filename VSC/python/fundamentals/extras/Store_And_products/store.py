class store:
    def __init__(self, storeName):
        self.name = storeName
        self.prodList = []
        
    def add_product(self, prod):
        self.prodList.append(prod)
        return self

    def sell_product(self, id):
        for prod in self.prodList:
            if prod.id == id:
                prod.print_info()
                return self
        print(f"product: {id} does not exist")
        return self

    def inflation(self, percent_increase):
        for prod in self.prodList:
            prod.update_price(percent_increase, True)
        return self
    def set_clearance(self, category, percent_discount):
        for prod in self.prodList:
            if prod.category.lower() == category.lower():
                prod.update_price(percent_discount, False)
        return self

