import requests
from flask_app import app
import os
from flask import jsonify, redirect, render_template, request

@app.route("/")
def redirect():
    return render_template("index.html")

@app.route('/search', methods=['POST'])
def search_hero():
    print(request.form['query'])
    print( os.environ.get("FLASK_API_KEY") )
    r = requests.get(f"https://www.superheroapi.com/api.php/{os.environ.get('FLASK_API_KEY') }/search/{request.form['query']}")
    # we must keep in line with JSON format.
    # requests has a method to convert the data coming back into JSON.
    return jsonify( r.json() )