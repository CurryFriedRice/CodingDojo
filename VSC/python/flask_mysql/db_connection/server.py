from flask import Flask, render_template, redirect, request
# import the class from friend.py
from friend import Friend


app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    return redirect("/user")
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", friends=friends) 

@app.route("/update_friend", methods=['POST'])
def update_name():
    print('*'*80)
    print(request.form)
    Friend.update_friend(dict(request.form)) #this is just a mono call to see if it'll pass in
    return redirect('/')


@app.route("/user")
def display_users():
    friends = Friend.get_all()
    return render_template("read.html", friends=friends)


@app.route("/user/new")
def get_new_user_form():
    return render_template("create.html")
    
@app.route("/user/create", methods=['POST'])
def add_new_user():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "occupation": request.form['occupation']
    }
    Friend.add(data)
    return redirect('/user')


if __name__ == "__main__":
    app.run(debug=True)