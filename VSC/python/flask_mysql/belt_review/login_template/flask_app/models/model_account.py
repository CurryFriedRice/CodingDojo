#Get the connection 
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
from flask import session, flash
import re
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

NAME_REGEX = re.compile(r'^[a-zA-Z]')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
PASSWORD_SPECIAL_REGEX = re.compile(r"[0-9$&+,:;=?@#|'<>.^*()%!-]")
PASSWORD_UPPERCASE_REGEX = re.compile(r'[A-Z]')


class Account:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.uuid = data['uuid']
        self.username = data['username']
        self.password = data['password']
        self.email = data['email']

        self.first_name = data['first_name']
        self.last_name = data['last_name']
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
        query = "INSERT INTO accounts (uuid, username, password, email, first_name, last_name) VALUES (%(uuid)s, %(username)s, %(password)s, %(email)s, %(first_name)s, %(last_name)s)"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM accounts;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object =[] 
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
        

    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM accounts WHERE id= %(id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    
    @classmethod
    def get_one_with_uuid(cls, data) -> list: #this is the same
        query = "SELECT * FROM accounts WHERE uuid= %(uuid)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []

    @classmethod
    def get_one_with_username(cls,data):
        query = "SELECT * FROM accounts WHERE username= %(username)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        
    @classmethod #typically just use this
    def get_one_with_email(cls,data):
        query = "SELECT * FROM accounts WHERE email=%(email)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    # U
    @classmethod
    def update(cls,data): #RETURNS NOTHING
        query = "UPDATE account SET username = %(username)s email=%(email)s password= %(password)s first_name=%(first_name)s last_name=%(last_name)s WHERE uuid=%(uuid)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM {TABLE} WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)


    @staticmethod
    def validate(data):
        is_valid = True
        #Username Validation
        if len(data['username']) < 2:
            flash("Username is not long enough", 'account_username_err')
            is_valid = False
        elif not NAME_REGEX.match(data['username']):
            flash("Username is invalid. No special characters", 'account_username_err')
            is_valid = False

        if not EMAIL_REGEX.match(data['email']):
            flash("Email is not a valid format", "email")
            is_valid = False
        elif Account.get_one_with_email({'email' : data['email']}):
            flash("Email already in use!","account_email_err")
            is_valid=False
        elif data['email'] != data['email_confirm']:
            flash("Emails do not Match!", "account_email_err")
            is_valid=False
        
        #password validation
        if len(data['password']) < 8:
            flash("Password has to be at least 8 characters", "account_password_err")
            is_valid=False
        elif data['password'] != data['password_confirm'] :
            flash("Passwords do not match!", "password")
            is_valid=False
        elif not re.search(PASSWORD_SPECIAL_REGEX, data['password']):
            flash("Password does not have a special character or Number!", "account_password_err")
            is_valid=False
        elif not re.search(PASSWORD_UPPERCASE_REGEX, data['password']):
            flash("Password does not have an uppercase letter!", "account_password_err")
            is_valid=False
        
        # if (re.search(PASSWORD_SPECIAL_REGEX, data['password'])) : 
        #     print("Password contains a special character")
        # else: print("Password does NOT contain a special character")
        # if (re.search(PASSWORD_UPPERCASE_REGEX, data['password'])):
        #     print("Password has an uppercase letter")
        # else: print("Password does NOT contain an uppercase character")
        
        # This data isn't stored in the DB since it does not have space to save it....
        # BUT the idea can still be validated and once it'

        return is_valid