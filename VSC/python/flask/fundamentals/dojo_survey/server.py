from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Find a good Key"

@app.route("/")
def render_form():
    if 'uuid' not in session:
        session['uuid'] = "0"
    return render_template("index.html")

@app.route("/set/<string:number>")
def set_uuID(number):
    session['uuid'] = number
    print(session['uuid'])
    return redirect("/")

@app.route("/process", methods=['POST'])
def process_results():
    
    if 'submission' not in session:
        session['submission'] = {}
    
    session["uuid"] = request.form['uuid']
    session['submission'][request.form['uuid']] = {**request.form}
    #print(session['submission'][session['uuid']])
    
    return redirect("/results")

@app.route("/results")
def render_results():
    return render_template("results.html")

@app.route('/cleanse')
def clear():
    session.clear()
    return redirect('/')

@app.route('/get')
def get_all():
    return session['submission']

@app.route('/get/<string:uuid>')
def get_data(uuid):
    session['uuid'] = uuid
    return redirect('/results')

if __name__ == "__main__":
    app.run(debug=True)