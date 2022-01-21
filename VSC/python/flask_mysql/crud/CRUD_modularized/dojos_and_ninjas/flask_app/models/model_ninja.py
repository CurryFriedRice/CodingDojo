from sqlite3 import connect
from winreg import QueryInfoKey
from flask_app.config.mysqlconnection import connectToMySQL

DATABASE_SCHEMA = 'dojos_and_ninjas_schema'

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']
        self.user_active = data['user_active']
        self.age = data['age']

    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one

    
    @classmethod
    def create(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s)"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        ninja_list =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        ninjas = [] 
        for ninja in ninja_list:   #turn those dictionaries into objects
            ninjas.append(cls(ninja))
        return ninjas

    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM ninjas WHERE id=%(id)s"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        for result in results_from_db:
            to_object.append(cls(result))
        return to_object

    @classmethod
    def update(cls,data):
        query = "UPDATE ninjas SET first_name=%(first_name)s, last_name=%(last_name)s, age=%(age)s, dojo_id=%(dojo_id)s)"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    @classmethod
    def delete_one(cls,data):
        query = "DELETE FROM ninjas WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        