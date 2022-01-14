from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    #data =request.form
    print(request.form)
    #print(data["strawberry"])
    
    return render_template("checkout.html", data=request.form)

@app.route('/fruits')         
def fruits():
    fruits = ('strawberry','blackberry','raspberry','apple')
    return render_template("fruits.html", fruits=fruits)

if __name__=="__main__":   
    app.run(debug=True)    

# ImmutableMultiDict([('strawberry', '2'), ('raspberry', '4'), ('apple', '0'), 
# ('first_name', ''), ('last_name', ''), ('student_id', '')])
