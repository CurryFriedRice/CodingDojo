#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_author import Author #Importing the object we're manipulating
from flask_app.models import model_book

MODEL = Author

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/")        #render route
def get_form_():
    return redirect("/authors")



@app.route("/authors/new")        #render route
def get_form_author():
    return render_template("author_form.html")

#So this is what happens when the URL reaches that ROUTE
@app.route('/authors/create',methods=['POST']) #action route
def create_author():
    user_id = MODEL.create(request.form)
    return redirect(f'/authors/{user_id}')


@app.route("/authors")        #render route
def view_author_all():
    context = {
        "targets" : MODEL.get_all(),
        "category": "Author",
        'form_fields': ['name'],
        'form_text': {"name" : "Name"}
    }
    return render_template("presentData.html", **context)

@app.route("/authors/<int:id>")
def view_author(id):
    context = {
        "authors" : MODEL.get_one_with_favs({"id": id}),
        "category": "author",
        "books": model_book.Book.get_all(),
        "my_id" : id
    }
    context['authors'] = (MODEL.get_one({"id": id}))
   
    return render_template("itemProfile.html", **context)


# @app.route("/authors/<int:id>/edit")
# def edit_author(id):
#     context = {
#         "authors" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE.html", **context)

# @app.route("/authors/<int:id>/update", methods=['POST'])
# def update_author(id):
#     nothing = MODEL.save(request.form)
#     return redirect(f"/authors/{id}")


# @app.route("/authors/<int:id>/delete", methods=['POST'])
# def delete_author(id):
#     nothing = MODEL.delete({"id":id})
#     return redirect("/")  #