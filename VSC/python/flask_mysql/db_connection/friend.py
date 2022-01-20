# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
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
    def add(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation) VALUES ( %(first_name)s , %(last_name)s , %(occupation)s );"
        return connectToMySQL('first_flask_schema').query_db(query, data)

    @classmethod
    def update_friend(cls, form):
        print("**"*100)
        print("We are asking to update a friend with this form!")
        print(form)
        print(type(form['first_name']))
        print("**"*100)
        query = "UPDATE friends SET " 
        if len(form['first_name']) > 0: 
            query += "first_name='" + form['first_name']+ "'"
        query += "WHERE id="+ form['id']+";"
        connectToMySQL('first_flask_schema').query_db(query)