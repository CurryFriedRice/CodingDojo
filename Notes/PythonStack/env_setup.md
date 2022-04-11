# Creating a flask project from scratch
## 1. Create Virtaul Environment Location
## 2. Navigate to that folder
## 3. Open Terminal/GitBash
## 4. Create Environment
```
pipenv install flask
OR
pipenv install PyMySQL Flask
```
## 5. check for pipfiles
## 6. in the Virtual environment location start the shell
```
pipenv shell
OR
python -m pipenv shell

Then python server.py
```
## 7. Create server.py
```py
from flask import Flask, render_template, redirect, request
from flask_app import app
# this should be the stuff that you're impoarting from CONTROLLERS
from flask_app.controllers import ninjas, dojos  

if __name__=="main":
app.run(debug=True)
```
## 8. Test Server
- Templates/template.html
    - See Jinga Documentation
    - {%Allows for Python code%}
    - {{Is how you access variables sent}}
    - {{ url_for('static', filename='fileName.css') }}
- Static/files that don't move
    - You can store and acces them with vvv 
    - {{ url_for('static', filename='playground.css') }}
- environment does not need to be restarted to see changes
- Page needs to be refreshed to see changes
- See file Structure
    - main_app
        - server.py
        - pipfile
        - pipfile.lock
        - templates
            - HTML templates

## 9. Modularization!
- This is how your files should be organized

    ```txt
        PROJECT-ROOT - You run pipenv shell here
        |-> flask_app
        |   |-> config
        |   |   |-> mySQLconnection.py
        |   |-> controllers
        |   |   |-> controller_[table_name].py
        |   |-> models
        |   |   |-> model_[table_name].py
        |   |-> static
        |   |   |-> img
        |   |   |-> css
        |   |   |-> js
        |   |-> templates
        |   |   |-> index.html
        |   |-> __init__.py
        |-> Pipfile
        |-> Pipfile.lock
        |-> server.py
    ```



## 10. File Setups!
### server.py
- Make sure you import ALL the controllers you're using
```py
from flask_app import app
from flask_app.controllers import controller_ninjas, controller_dojos

if __name__=="__main__":
    app.run(debug=True)

DATABASE = ''
```
### init.py
```py
from flask import Flask
app = Flask(__name__)
app.sercret_key ='Shhhh'


if __name__=="main":
    app.run(debug=True)
```

### mysqlconnection

```py
# a cursor is the object we use to interact with the database
import pymysql.cursors

# this class will give us an instance of a connection to our database
class MySQLConnection:
    def __init__(self, db):
        connection = pymysql.connect(host = 'localhost',
                                    user = 'root', # change the user and password as needed
                                    password = 'root', 
                                    db = db,
                                    charset = 'utf8mb4',
                                    cursorclass = pymysql.cursors.DictCursor,
                                    autocommit = True)
        # establish the connection to the database
        self.connection = connection

    # the method to query the database
    def query_db(self, query, data=None):
        with self.connection.cursor() as cursor:
            try:
                query = cursor.mogrify(query, data)
                print("Running Query:", query)
                # executable = cursor.execute(query, data)
                cursor.execute(query, data)
                if query.lower().find("insert") >= 0:
                    # INSERT queries will return the ID NUMBER of the row inserted
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
                    result = cursor.fetchall()
                    return result
                else:
                    # UPDATE and DELETE queries will return nothing
                    self.connection.commit()
            except Exception as e:
                # if the query fails the method will return FALSE
                print("Something went wrong", e)
                return False
            finally:
                # close the connection
                self.connection.close() 

# connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
def connectToMySQL(db):
    return MySQLConnection(db)
```

### model_[table_name].py File
```py
#Get the connection 
from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE_SCHEMA
# DATABASE = 'CHANGE DATABASE'
#REMEMBER TO REPLACE THE TABLE

class Author:
    def __init__(self,data): #DON'T FORGET TO INITIALIZE EVERY FIELD YOU USE
        self.id = data['id']
        self.name= data['name']
        self.bun = data['bun']
        self.meat = data['meat']
        self.calories = data['calories']
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
        query = "INSERT INTO {TABLE} (FIELDS) VALUES (%(FIELDS)s)"
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
            

    # U
    @classmethod
    def save(cls,data): #RETURNS NOTHING
        query = "UPDATE {CLASS} SET value= %(value)s WHERE id=%(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)

    # D
    @classmethod 
    def delete(cls,data): #RETURNS NOTHING
        query = "DELETE FROM {TABLE} WHERE id=%(id)s;"
        # This would target a field and flag is as disabled so we get to keep the data.
        # query = "UPDATE {TABLE} SET account_disabled=true WHERE id = %(id)s"
        return connectToMySQL(DATABASE_SCHEMA).query_db(query,data)


```

### controller_[table_name].py File
- This is where all the pathing happens meaining the  
```py
#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.[table_name] import [ClassName] #Importing the object we're manipulating
from flask import jsonify 

MODEL = [CLASSNAME]

@app.route('/')
def index():
    return render_template("index.html")

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/TABLE/new")        #render route
def get_form():
    return render_template("TABLE_form.html")

#So this is what happens when the URL reaches that ROUTE
@app.route('/TABLE/create',methods=['POST']) #action route
def create():
	user_id = MODEL.save(request.form)
	return redirect(f'/TABLE/{user_id}')

@app.route("/TABLE/<int:id>")
def view(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("TABLE_edit.html", **context)


@app.route("/TABLE/<int:id>/edit")
def edit(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("TABLE.html", items)

@app.route("/TABLE/<int:id>/update", methods=['POST'])
def update(id):
    nothing = MODEL.save(request.form)
    return redirect(f"/TABLE/{id}")


@app.route("/TABLE/<int:id>/delete", methods=['POST'])
def delete(id):
    nothing = MODEL.delete({"id":id})
    return redirect("/")  #

```




API JSONIFTY
@app.route("/api/thing/create"), methods=[""POST"]
def api_thing_create():
    return jsonify(requets.form)


In todo js 

let form = new formData();

fetch("/API/THING/CREATE", {
    method='post'
    body: value
    }).