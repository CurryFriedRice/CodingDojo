from distutils.log import debug
from flask import Flask
app = Flask(__name__)
@app.route('/') # targets the function immediately following
def hello_world():
    return'Hello_World'

@app.route("/success")
def success():
    return "SUCCESS"


@app.route('/hello/<string:vars>/<int:count>')
def hello(vars, count):
    return f"Hello {vars}"*count


if __name__=="__main__":
    app.run(debug=True)