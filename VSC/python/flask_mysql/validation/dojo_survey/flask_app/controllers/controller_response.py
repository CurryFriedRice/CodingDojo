#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_response import Response #Importing the object we're manipulating
from flask_app.models import model_dojo, model_language

MODEL = Response

@app.route('/')
def index():
    context = {
        "languages": model_language.Language.get_all(),
        "dojos": model_dojo.Dojo.get_all()
    }
    return render_template("index.html", **context)

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete




#So this is what happens when the URL reaches that ROUTE
@app.route('/results/create',methods=['POST']) #action route
def create():
    if not MODEL.validate_response(request.form):
        return redirect("/")
    user_id = MODEL.create(request.form)
    
    return redirect(f'/results/{user_id}')

@app.route("/results/<int:id>")
def view(id):
    context = {
        "results" : MODEL.get_one({"id": id})
    }
    
    return render_template("results.html", **context)

# @app.route("/TABLE/<int:id>/edit")
# def edit(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE.html", **context)

# @app.route("/TABLE/<int:id>/update", methods=['POST'])
# def update(id):
#     nothing = MODEL.update(request.form)
#     return redirect(f"/TABLE/{id}")


# @app.route("/TABLE/<int:id>/delete", methods=['POST'])
# def delete(id):
#     nothing = MODEL.delete({"id":id})
#     return redirect("/")  #