#Get the connection 
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
from flask_app.models import model_favorite, model_author
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

class Book:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages= data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.authors = []
    #get_all
    #get_one
    #create / save
    #update_one
    #delete_one

    #if you use data then remember to match up the %(same_key)s 

    # C
    @classmethod
    def create(cls,data:dict) -> int: #The expected return is int
        query = "INSERT INTO books (title, num_of_pages) VALUES (%(title)s,%(num_of_pages)s)"
        user_id = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        return user_id

    # R
    @classmethod
    def get_all(cls) -> list: #This is a get all and will return a list of dictionaries
        query = "SELECT * FROM books;"
        results_from_db =  connectToMySQL(DATABASE_SCHEMA).query_db(query) #Gets a list of dictionaries....
        to_object =[] 
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
    

    @classmethod
    def get_one(cls, data) -> list: #this is the same
        query = "SELECT * FROM books WHERE id= %(id)s "
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        to_object = []
        if results_from_db:
            for values in results_from_db :  #turn those dictionaries into objects
                to_object.append(cls(values))
            return to_object
        else : return []
            
    @classmethod
    def get_one_with_favs(cls, data) -> list: #this is the same
        query = "SELECT * FROM books JOIN favorites ON books.id = favorites.book_id JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s;"
        results_from_db = connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
        if results_from_db:
            books = cls(results_from_db[0])
            for values in results_from_db :  #turn those dictionaries into objects
                authors_data = {
                    'id' : values['author_id'],
                    'name' : values['name'],
                    'created_at' : values['created_at'],
                    'updated_at' : values['updated_at']
                }
                books.authors.append(model_author.Author(authors_data))
            return books
    # U
    @classmethod
    def save(cls,data): #RETURNS NOTHING
        query = "UPDATE books SET title=%(title)s, num_of_pages=%(num_of_pages)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM books WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)
