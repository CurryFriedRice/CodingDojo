from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.controllers import controller_account, controller_message

if __name__=="__main__":
    app.run(debug=True)