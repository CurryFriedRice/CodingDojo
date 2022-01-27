from flask import Flask, render_template

app = Flask(__name__)

@app.route("/play")
def playground():
    return render_template("playground.html", count=3)

@app.route("/play/<int:count>")
def playground2(count):
    return render_template("playground.html", count=count)

@app.route("/play/<int:count>/<string:color>")
def playground3(count, color):
    return render_template("playground.html", count=count,color=color)

if __name__ == '__main__':
    app.run(debug=True)