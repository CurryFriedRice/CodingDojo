#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_meal import Meal #Importing the object we're manipulating
from flask_app.models import model_account

MODEL = Meal

@app.route('/recipe')
def index():
    if 'uuid' not in session:
        return redirect("/")
    context = {
        "meals" : MODEL.get_all(),
        "user" : model_account.Account.get_one({"id": session['uuid']})
    }
    print(context['user'])
    return render_template("recipe_view.html", **context)

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/recipe/new")        #render route
def get_recipe_form():
    if 'uuid' not in session:
        flash("You are not signed in", "sign_in_err")
        return redirect('/')
    if 'form' in session: 
        return render_template("recipe_form.html", meal=session['form'])
    return render_template("recipe_form.html")
#So this is what happens when the URL reaches that ROUTE
@app.route('/recipe/create',methods=['POST']) #action route
def create_recipe():

    if 'uuid' not in session:
        flash("You are not signed in", "sign_in_err")
        return redirect('/')
    if not Meal.validate(request.form):
        print(request.form)
        session['form'] = request.form
        return redirect("/recipe/new")
    session.pop('form',0)
    data = dict(request.form)
    print(session['uuid'])
    data['account_id'] = session['uuid']
    item_id = MODEL.create(data)
    return redirect(f'/recipe/{item_id}')

@app.route("/recipe/<int:id>")
def view_recipe(id):
    if 'uuid' not in session:
        flash("You are not signed in", "sign_in_err")
        return redirect('/')
    context = {
        "meal" : MODEL.get_one({"id": id})
    }
    return render_template("recipe_profile.html", **context)


@app.route("/recipe/<int:id>/edit")
def edit_recipe(id):
    if 'uuid' not in session:
        flash("Hey! You shouldn't edit stuff you don't own!", "meal_edit_err")
        return redirect('/')

    recipe = MODEL.get_one({"id": id})
    # if session['uuid'] != recipe['account_id']:
    #     flash("Hey! You shouldn't edit stuff you don't own!", "meal_edit_err")
    #     return redirect("/")

    context = {
        "meal" : recipe
    }
    return render_template("recipe_edit.html", **context)

@app.route("/recipe/<int:id>/update", methods=['POST'])
def update_recipe(id):
    recipe = Meal.get_one({"id": id})
    # if recipe['account_id'] != session['uuid']:
    #     flash("Hey! You shouldn't edit stuff you don't own!", "meal_edit_err")
    #     return redirect('/')
    data = dict(request.form)
    data['id'] = id
    nothing = MODEL.update(data)
    return redirect(f"/recipe/{id}")


@app.route("/recipe/<int:id>/delete")
def delete_recipe(id):
    recipe = Meal.get_one({"id": id})
    # if recipe['account_id'] != session['uuid']:
    #     flash("Hey! You shouldn't delete stuff you don't own!", "meal_delete_err")
    #     return redirect('/')
    nothing = MODEL.delete({"id":id})
    return redirect("/")  #