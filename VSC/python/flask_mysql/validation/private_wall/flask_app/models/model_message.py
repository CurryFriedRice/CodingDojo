#Get the connection 
import datetime
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
from flask import session, flash
import datetime
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE
class Message:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.account_id = data['account_id']
        self.reciever_id = data['reciever_id']
        self.message = data['message']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one
    def get_time_old(self):
        # f = '%Y-%m-%d %H:%M:%S'
        # offset = datetime.datetime.now()- self.created_at
        time = largest_time_unit((datetime.datetime.now()- self.created_at).seconds)
        return time
    #if you use data then remember to match up the %(same_key)s 
    # C
    @classmethod
    def create(cls,data:dict) -> int: #The expected return is int
        print("CREATING MESSAGES")
        query = "INSERT INTO messages (account_id, reciever_id, message) VALUES (%(account_id)s, %(reciever_id)s, %(message)s )"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM authors;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object =[] 
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
        

    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM {TABLE} WHERE id= %(id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
            
    @classmethod
    def get_one_with_reciever(cls, data) -> list: #this is the same
        query = "SELECT * FROM messages WHERE reciever_id= %(reciever_id)s;"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    @classmethod
    def get_one_with_sender(cls, data) -> list: #this is the same
        query = "SELECT * FROM messages WHERE account_id= %(account_id)s;"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    # U
    @classmethod
    def save(cls,data): #RETURNS NOTHING
        query = "UPDATE {CLASS} SET value= %(value)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM messages WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
    
    @classmethod
    def validate(cls, data):
        is_valid = True
        if len(data['message']) < 5:
            flash("Message too short message must be 5 characters long", "message")
            is_valid =False
        return is_valid
        


def largest_time_unit(seconds):
    if seconds > 86400: #day
        return str(int(seconds/86400)) + " days" 
    elif seconds > 3600: #hour
        return str(int(seconds/3600)) + " hours" 
    elif seconds > 60 : 
        return str(int(seconds/60)) + "minutes"
    else :
        return str(seconds) + " seconds"

