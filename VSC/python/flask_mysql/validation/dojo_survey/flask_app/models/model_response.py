#Get the connection 
from flask import flash, session
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
from flask_app.models import model_dojo, model_language
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

class Response:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.name = data['name']
        self.response = data['response']
        self.dojo_id = data['dojo_id']
        self.language_id = data['language_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojos = []
        self.languages = []
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one
    
    def dojo(self, id):
        return model_dojo.Dojo.get_one({'id' : id})

    def language(self, id):
        return model_language.Language.get_one({'id':id})
    #if you use data then remember to match up the %(same_key)s 

    # C
    @classmethod
    def create(cls,data:dict) -> int: #The expected return is int
        query = "INSERT INTO responses (name, response, language_id, dojo_id) VALUES (%(name)s,%(response)s, %(language_id)s, %(dojo_id)s);"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM responses;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object =[] 
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
            

    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM responses JOIN languages ON responses.language_id = languages.id JOIN dojos ON responses.dojo_id = dojos.id WHERE responses.id= %(id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        if results_from_db:
            to_object = cls(results_from_db[0])
            to_object.dojos = (to_object.dojo(to_object.dojo_id))
            to_object.languages = (to_object.language(to_object.language_id))
            print(to_object.dojos[0].name)
            return to_object
        else : return []


    # U
    @classmethod
    def update(cls,data): #RETURNS NOTHING
        query = "UPDATE responses SET value= %(value)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM responses WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)


    @staticmethod
    def validate_response(response):
        print("BIG HONKER BADONKERS" *80)
        print(response)
        is_valid = True #assume this is true
        if len(response['name']) < 3:
            print("NAme is invalid")
            flash("*Name Must be 3 Characters Long")
            is_valid = False
        if int(response['dojo_id']) == 0:
            print("DOJO is invalid")
            flash("*You need to select a Dojo")
            is_valid = False
        if int(response['language_id']) == 0:
            print("Language is invalid")
            flash("*You should select a language")
            is_valid = False
        return is_valid