#Get the connection 
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA

# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

class Friendship:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        # self.id = data['id']
        self.user_id = data['user_id']
        self.friend_id = data['friend_id']
    
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one

    #if you use data then remember to match up the %(same_key)s 

    # C
    @classmethod
    def create(cls,data:dict) -> int: #The expected return is int
        query = "INSERT INTO friendships (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s)"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM friendships;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object = []
        if results_from_db:
            for values in results_from_db :
                to_object.append(cls(values))
            return to_object
        else : return []
        
        
    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM friendships JOIN users ON friendship.user_id = user.id JOIN users ON friendship.friend_id = user.id WHERE id= %(id)s"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :
                to_object.append(cls(values))
            return to_object
        else : return []
            
    @classmethod
    def get_one_with_friend(cls, data):
        query =  "SELECT * FROM friendships WHERE (friend_id = %(friend_id)s and user_id = %(user_id)s) OR (friend_id = %(user_id)s and user_id= %(friend_id)s)"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        if results_from_db:
            to_object = []
            for values in results_from_db :
                to_object.append(cls(values))
            return to_object
        else : return []

    # U
    @classmethod
    def save(cls,data): #RETURNS NOTHING
        query = "UPDATE friendships SET value= %(value)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM friendships WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
