from flask_app import app
from flask_app.controllers import controller_account, controller_meal

if __name__=="__main__":
    app.run(debug=True)