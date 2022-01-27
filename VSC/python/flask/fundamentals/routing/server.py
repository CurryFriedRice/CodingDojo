from typing import overload
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string:val>')
def says(val):
    return f"Hi {val}"

@app.route('/repeat/<int:amount>/<string:val>')
def say(amount, val):
    return f"{val}\n"*amount

@app.errorhandler(Exception)
def server_error(err):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug=True)