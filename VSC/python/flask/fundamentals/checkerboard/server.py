from json.tool import main
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/<int:x>")
@app.route("/<int:x>/<int:y>")
@app.route("/<int:x>/<int:y>/<string:colorA>/<string:colorB>")
def createBoard(x, y = None, colorA = None, colorB = None):
    if y == None: y = x
    return render_template("checkers.html",x=x,y=y,cA=colorA,cB=colorB)

if __name__ == "__main__":
    app.run(debug=True)