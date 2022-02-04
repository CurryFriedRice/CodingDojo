import os
from flask import Flask
app = Flask(__name__)
app.secret_key ='asd0p3$f#2'


print( os.environ.get("FLASK_APP_API_KEY") )
if __name__=="main":
    app.run(debug=True)

DATABASE_SCHEMA=''