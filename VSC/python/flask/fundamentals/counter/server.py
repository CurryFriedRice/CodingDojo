from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = '\tb\x92v\x13\x1d(\xfaK\x81\x81\xa2%\xdc-\xc7'  # set a secret key for security purposes

@app.route('/')
def visit():
    if 'visits' not in session:
        session['visits'] = 0
    session['visits'] = session['visits'] + 1 
    return render_template("counter.html")


@app.route("/add_two")
def add_two_visits():
    session['visits'] += 1
    return redirect("/")

@app.route('/destroy_session')
def clearSession():
    session.clear()
    #session.pop('visits')
    return redirect('/')

@app.route('/change_color/<string:color>')
def change_color(color):
    session['bg_color'] = color
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)