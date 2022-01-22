from flask_app import app
from flask_app.controllers import controller_book, controller_author, controller_favorites

if __name__=="__main__":
    app.run(debug=True)