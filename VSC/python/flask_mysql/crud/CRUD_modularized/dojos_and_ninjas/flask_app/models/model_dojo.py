from secrets import token_bytes
from sqlite3 import connect
from flask_app.config.mysqlconnection import connectToMySQL

DATABASE_SCHEMA = 'dojos_and_ninjas_schema'

class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one

    #this gets ALL the dojo info
    @classmethod
    def create(clas,data:dict):
        query = 'INSERT INTO dojos (name) VALUES (%(name)s)'
        dojo_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return dojo_id

    # R
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query)
        to_object = []
        if(results_from_db):
            for value in results_from_db:
                to_object.append(cls(value))
            return to_object
        return []

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id=%(id)s"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if(results_from_db):
            for value in results_from_db:
                to_object.append(cls(value))
            return to_object
        return []
    #U
    @classmethod
    def update(cls, data):
        query = "UPDATE dojos set name=(%(name)s)); "
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    @classmethod
    def delete_one(cls, data):
        query = "DELETE FROM dojos WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
