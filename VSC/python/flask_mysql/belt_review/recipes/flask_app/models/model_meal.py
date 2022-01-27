#Get the connection 
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
from flask import flash
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

class Meal:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.title = data['title']
        self.short_prep = data['short_prep']
        self.description = data['description']
        self.direction = data['direction']
        self.public = data['public']
        self.account_id = data['account_id'] # This is who it was made by.
        self.views = data['views']
        self.eaten_at = data['eaten_at']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one

    #if you use data then remember to match up the %(same_key)s 

    # C
    @classmethod
    def create(cls,data:dict) -> int: #The expected return is int
        query = "INSERT INTO meals (title, short_prep, description, direction, public, account_id, eaten_at)"
        query += " VALUES (%(title)s, %(short_prep)s, %(description)s, %(direction)s, %(public)s, %(account_id)s, %(eaten_at)s);"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM meals;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object =[] 
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    
    @classmethod
    def get_all_with_account_id(cls, data) -> list: #this is the same
        query = "SELECT * FROM meals WHERE account_id= %(account_id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

        if results_from_db:
            ol = []
            for values in results_from_db :  #turn those dictionaries into objects
                ol.append(cls(values))
            return ol # so this way we havve an entire LIST of recipes made by THAT id if we wanted filtering.... we don't need filtering
        else : return []
                
    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM meals WHERE id= %(id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        if results_from_db:
            return cls(results_from_db[0])
            # for values in results_from_db :  #turn those dictionaries into objects
            #     to_object.append(cls(values))
            #return to_object
        else : return []
            
    
    # @classmethod
    # def get_one_with_account_id(cls, data) -> list: #this is the same
    #     query = "SELECT * FROM meals WHERE account_id= %(account_id)s "
    #     results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
    
    #     if results_from_db:
    #         return cls(results_from_db)
    #         # for values in results_from_db :  #turn those dictionaries into objects
    #         #     to_object.append(cls(values))
    #         # return to_object
    #     else : return []
            
    # U
    @classmethod
    def update(cls,data): #RETURNS NOTHING
        query = "UPDATE meals SET title=%(title)s, short_prep=%(short_prep)s, description=%(description)s, direction=%(direction)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)


    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM meals WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
    
    @staticmethod
    def validate(data):
        #self.id = data['id']
        is_valid = True
        if len(data['title']) < 2:
            flash("The title needs to be at least 2 characters long", "meal_title_err")
            is_valid = False
        if "short_prep" not in data:
            flash("You didn't say if this took under 30 minutes", "meal_short_prep_err")
            is_valid = False
        if len(data['description']) < 2:
            flash("The discription must be at least 2 characters", "meal_description_err")
            is_valid = False
        if len(data['direction']) < 2:
            flash("The directions must be at least 2 characters", "meal_direction_err")
            is_valid = False
        if data['eaten_at'] == '':
            flash("You didn't say when you made this!", "meal_date_err")
            is_valid = False

        return is_valid
        # self.public = data['public']
        # self.account_id = data['account_id'] # This is who it was made by.
        # self.public = data['public']
        # self.views = data['views']
        # self.created_at = data['created_at']
        # self.updated_at = data['updated_at']