# burgers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_ninja import Ninja
from flask_app.models.model_dojo import Dojo

@app.route('/user/add')
def get_enrollment_form():
    context ={
        "dojos" : Dojo.get_all()
    }
    return render_template("ninjas_enrollment.html", **context)

@app.route('/user/create', methods=['POST'])
def enroll_ninja():
    Ninja.create(request.form)
    return redirect(f"/dojos/{request.form['dojo_id']}")

