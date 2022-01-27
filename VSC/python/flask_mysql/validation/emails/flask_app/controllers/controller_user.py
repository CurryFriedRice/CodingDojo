#import the app
from contextlib import redirect_stderr
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_user import User #Importing the object we're manipulating

MODEL = User

@app.route('/')
def index():
    return render_template("form.html")

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/user/new")        #render route
def get_form():
    return render_template("TABLE_form.html")

#So this is what happens when the URL reaches that ROUTE
@app.route('/user/create',methods=['POST']) #action route
def create():
    if not User.validate_email(request.form):
        return redirect('/')
    user_id = MODEL.create(request.form)
    return redirect(f'/user')

@app.route("/user")
def view_all():
    context = {
        "users" : MODEL.get_all()
    }
    return render_template("results.html", **context)


@app.route("/user/<int:id>")
def view(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("results.html", **context)


@app.route("/TABLE/<int:id>/edit")
def edit(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("TABLE.html", **context)

@app.route("/TABLE/<int:id>/update", methods=['POST'])
def update(id):
    nothing = MODEL.update(request.form)
    return redirect(f"/TABLE/{id}")


@app.route("/TABLE/<int:id>/delete", methods=['POST'])
def delete(id):
    nothing = MODEL.delete({"id":id})
    return redirect("/")  #