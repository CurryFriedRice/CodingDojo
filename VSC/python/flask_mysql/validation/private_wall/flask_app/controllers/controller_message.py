#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_message import Message #Importing the object we're manipulating

MODEL = Message

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete


#So this is what happens when the URL reaches that ROUTE
@app.route('/message/create',methods=['POST']) #action route
def create_message():
    if not MODEL.validate(request.form):
        return redirect("/account")
    data = {
        "account_id" : session['uuid'],
        "reciever_id" : request.form["reciever_id"],
        "message" : request.form['message']
    }
    user_id = MODEL.create(data)
    
    return redirect("/account")

@app.route("/TABLE/<int:id>")
def view_message(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("TABLE_edit.html", **context)


@app.route("/TABLE/<int:id>/edit")
def edit_message(id):
    context = {
        "items" : MODEL.get_one({"id": id})
    }
    return render_template("TABLE.html", **context)

@app.route("/TABLE/<int:id>/update", methods=['POST'])
def update_message(id):
    nothing = MODEL.update(request.form)
    return redirect(f"/TABLE/{id}")


@app.route("/message/delete", methods=['POST'])
def delete_message():
    nothing = MODEL.delete(request.form)
    return redirect("/account")  #

