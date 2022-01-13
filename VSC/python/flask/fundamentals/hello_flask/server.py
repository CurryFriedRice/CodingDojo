from distutils.log import debug
from flask import Flask, render_template


app = Flask(__name__)
@app.route('/') # targets the function immediately following
def hello_world():
    return render_template("index.html")

@app.route("/success")
def success():
    return "SUCCESS"


@app.route('/hello/<string:val>/<int:count>')
def hello(val, count):
    return render_template("repeat.html", val=val, count=count)



if __name__=="__main__":
    app.run(debug=True)