#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_friendship import Friendship #Importing the object we're manipulating
from flask_app.models import model_users

MODEL = Friendship

@app.route('/')
def index():
    return redirect("/friendships")

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/friendships")        #render route
def get_form_friendship():
    friendships =  MODEL.get_all()
    context = {
        "friendships" : MODEL.get_all(),
        "users" : model_users.User.get_all()
    }
    print(context['friendships'])
    return render_template("index.html", **context)

#So this is what happens when the URL reaches that ROUTE
@app.route('/friendships/create',methods=['POST']) #action route
def create_friendship():
    if not MODEL.get_one_with_friend(request.form) :
        user_id = MODEL.create(request.form)
    return redirect('/friendships')

# @app.route("/friendships/<int:id>")
# def view(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE_edit.html", **context)


# @app.route("/friendships/<int:id>/edit")
# def edit(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE.html", **context)

# @app.route("/friendships/<int:id>/update", methods=['POST'])
# def update(id):
#     nothing = MODEL.save(request.form)
#     return redirect(f"/TABLE/{id}")


@app.route("/friendships/<int:id>/delete", methods=['POST'])
def delete_friendship(id):
    nothing = MODEL.delete({"id":id})
    return redirect("/")  #