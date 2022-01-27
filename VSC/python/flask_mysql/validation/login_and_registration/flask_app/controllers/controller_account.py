#import the app
from flask_app import app
#Then import the important flask responses
from flask import render_template,redirect,request,session,flash
from flask_bcrypt import Bcrypt

#then import the SAME relative file
from flask_app.models.model_account import Account #Importing the object we're manipulating
bcrypt = Bcrypt(app)

MODEL = Account

@app.route('/')
def index():
    return render_template("accountForm.html")

#Some of restful Routing
#Path should be '/TABLE_NAME/ID/ACTION'
#/User/new
#/user/create
#/user/<id>/edit
#/user/<id>/update
#/user/<id>/delete

@app.route("/account/new")        #render route
def get_form():
    return redirect ("/")

@app.route("/account/login", methods=['POST'])
def login():
    data = {
        "email" : request.form['email']
    }
    user_in_db = MODEL.get_one_with_email(data)

    if not user_in_db:
        flash("Invalid User/Password", "loginError")
        return redirect("/")
    
    if not bcrypt.check_password_hash(user_in_db[0].password, request.form['password']):
        flash("invalid Email/Password")
        return redirect("/")
    # DON'T DO THIS.... INSTEAD USE A UUID
    print(user_in_db[0].id)
    session['id'] = user_in_db[0].id
    
    return redirect("/account")

#So this is what happens when the URL reaches that ROUTE
@app.route('/account/create',methods=['POST']) #action route
def create():
    #Validate the data
    if not MODEL.validate(request.form):
        return redirect("/")
    
    #if the data is valid.... We need to recreate the dictionary
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    inputData = dict(request.form)
    inputData['password'] = pw_hash
    inputData['uuid'] = "N/A"
    user_id = MODEL.create(inputData)
    flash("Account Created Successfully!","success")
    return redirect('/')

# @app.route("/account/<int:id>")
# def view(id):
#     context = {
#         "items" : MODEL.get_one({"id": id})
#     }
#     return render_template("TABLE_edit.html", **context)

@app.route("/account")
def show_account():
    print(session)
    if not session:
        flash("User not logged in!", 'logout')
        return redirect('/')
    print("showing account " *10)
    print(session['id'])
    context = {
        "accounts" : MODEL.get_one({"id": session['id']})
    }
    print(context['accounts'])
    return render_template("profile.html", **context)

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

@app.route("/logout")
def logout():
    session.clear()
    flash ("Logout Successful", "logout")
    return redirect("/")