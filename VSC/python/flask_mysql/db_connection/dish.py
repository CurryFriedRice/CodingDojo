# import the function call that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database

class Dish:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.cost = data['price']
        self.ingredients = data['ingredients']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dishes;"
        results = connectToMySQL('first_flask_schema').query_db(query)
        dishes = []

        for dish in results:
            dishes.append( cls(dish) )
        return dishes