from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.controllers import controller_response

app.secret_key ='Shhhh'

if __name__=="__main__":
    app.run(debug=True)
