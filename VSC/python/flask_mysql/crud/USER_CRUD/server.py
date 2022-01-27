from flask import Flask, render_template, redirect, request
# import the class from friend.py
from friend import Friend


app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    return redirect("/user")

@app.route("/user")
def display_users():
    friends = Friend.get_all()
    return render_template("user_list.html", friends=friends)

@app.route("/user/new")
def get_new_user_form():
    return render_template("create.html")

@app.route("/user/create", methods=['POST'])
def add_new_user():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "occupation": request.form['occupation']
    }
    Friend.add(data)
    return redirect('/user')

@app.route('/user/<int:id>')
def show_user(id):
    friend = Friend.get_by_id({'id': id})
    return render_template("user.html", friend=friend)

@app.route('/user/<int:id>/edit')
def edit_user(id):
    context = {
        'friend' : Friend.get_by_id({'id': id})
    }
    return render_template('edit.html', **context)

@app.route("/user/update", methods=['POST'])
def update_user():
    Friend.update_friend(dict(request.form)) #this is just a mono call to see if it'll pass in
    return redirect('/user')


@app.route("/user/<int:id>/delete")
def confirm_delete(id):
    Friend.delete_by_id({'id':id})
    return redirect("/user")



if __name__ == "__main__":
    app.run(debug=True)