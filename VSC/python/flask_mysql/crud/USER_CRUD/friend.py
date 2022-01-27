# import the function that will return an instance of a connection
from winreg import QueryInfoKey
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('first_flask_schema').query_db(query)
        # Create an empty list to append our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            friends.append( cls(friend) )
        return friends

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM friends WHERE id=%(id)s;"
        results = connectToMySQL('first_flask_schema').query_db(query, data)
        friends = []
        
        for friend in results:
            friends.append( cls(friend) )
        return friend

    @classmethod
    def add(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation) VALUES ( %(first_name)s , %(last_name)s , %(occupation)s );"
        return connectToMySQL('first_flask_schema').query_db(query, data)

    @classmethod
    def update_friend(cls, data):
        print(data)
        query = "UPDATE friends SET first_name =  %(first_name)s, last_name = %(last_name)s, occupation= %(occupation)s  WHERE id= %(id)s;"
        return connectToMySQL('first_flask_schema').query_db(query, data)

    @classmethod
    def delete_by_id(cls, data):
        query = "DELETE FROM friends WHERE id=%(id)s;"
        return connectToMySQL('first_flask_schema').query_db(query,data)
        