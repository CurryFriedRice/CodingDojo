from flask import Flask
app = Flask(__name__)
app.secret_key ='shhh'


if __name__=="main":
    app.run(debug=True)

DATABASE_SCHEMA='emails_schema'