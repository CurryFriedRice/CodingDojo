# burgers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.model_dojo import Dojo
from flask_app.models.model_ninja import Ninja


@app.route('/')
def route():
    return redirect("/dojos")


@app.route('/dojos')
def index():
    dojos = Dojo.get_all()
    return render_template("dojos_list.html", dojos=dojos)

@app.route('/dojos/<int:id>')
def get_dojo(id):
    #school = Dojo.get_one({'id': id})

    context = {
        'dojos' : Dojo.get_one({'id': id}),
        'ninjas': Ninja.get_all()
    }
    print(context['dojos'][0]['name'])
    return render_template("dojos_ninjas.html", **context, name='name')

@app.route('/dojos/create', methods=['POST'])
def add_dojo():
    Dojo.create(request.form)
    return redirect("/")