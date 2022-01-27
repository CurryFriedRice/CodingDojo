#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
#then import the SAME relative file
from flask_app.models.model_book import Book #Importing the object we're manipulating
from flask_app.models import model_author
MODEL = Book
 
#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/books/new")        #render route
def get_form_book():
    return render_template("book_form.html")

#So this is what happens when the URL reaches that ROUTE
@app.route('/books/create',methods=['POST']) #action route
def create_book():
    user_id = MODEL.create(request.form)
    return redirect(f'/books/{user_id}')


@app.route("/books")        #render route
def view_book_all():
    context = {
        "targets" : MODEL.get_all(),
        "category": "Book",
        'form_fields': ['title', "num_of_pages"],
        'form_text': {"title" : "Title", "num_of_pages" : "Number of Pages"}
    }
    # context['form_fields'] = context["targets"][0].__dict__.keys()
    return render_template("presentData.html", **context)


@app.route("/books/<int:id>")
def view_book(id):
    context = {
        "books" : MODEL.get_one_with_favs({"id": id}),
        "category": "book",
        "authors": model_author.Author.get_all(),
        "my_id" : id
    }
    print(context)
    return render_template("itemProfile.html", **context)


# @app.route("/books/<int:id>/edit")
# def edit_book(id):
#     context = {
#         "books" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE.html", **context)

# @app.route("/books/<int:id>/update", methods=['POST'])
# def update_book(id):
#     nothing = MODEL.save(request.form)
#     return redirect(f"/book/{id}")


# @app.route("/books/<int:id>/delete", methods=['POST'])
# def delete_book(id):
#     nothing = MODEL.delete({"id":id})
#     return redirect("/")  #