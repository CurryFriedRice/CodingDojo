#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_favorite import Favorite  #Importing the object we're manipulating

MODEL = Favorite



#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/favorites/create", methods=["POST"])        #render route
def get_form_favorites():
    MODEL.create(request.form)
    return redirect(request.form['redirect'])

#So this is what happens when the URL reaches that ROUTE
# @app.route('/TABLE/create',methods=['POST']) #action route
# def create():
#     user_id = MODEL.save(request.form)
#     return redirect(f'/TABLE/{user_id}')

# @app.route("/TABLE/<int:id>")
# def view(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE_edit.html", **context)


# @app.route("/TABLE/<int:id>/edit")
# def edit(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE.html", **context)

# @app.route("/TABLE/<int:id>/update", methods=['POST'])
# def update(id):
#     nothing = MODEL.save(request.form)
#     return redirect(f"/TABLE/{id}")


# @app.route("/TABLE/<int:id>/delete", methods=['POST'])
# def delete(id):
#     nothing = MODEL.delete({"id":id})
#     return redirect("/")  #