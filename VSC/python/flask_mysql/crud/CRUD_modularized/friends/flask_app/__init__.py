from flask import Flask
app = Flask(__name__)
app.sercret_key ='Shhhh'


if __name__=="main":
    app.run(debug=True)

DATABASE_SCHEMA='friendship_schema'