from inspect import Parameter
from flask import Flask, render_template, request, redirect, session
from datetime import datetime
import random 

app = Flask(__name__)
app.secret_key = "Find a good Key"


gold_source =   {"farm": {"min" : 10, "max":20}, 
                "cave":{"min": 5, "max": 10},
                "house":{"min": 2, "max": 5}, 
                "casino":{"min":-50, "max": 50} }

def generate_message(work):
    message = "<li"
    if work['building'] == 'casino' and work['amount'] > 0:
        message += f" class='text-success'>Walked into a {work['building']} and made {work['amount']} Gold WOO JACKPOT! - {work['timestamp']}"
    elif  work['building'] == 'casino' and work['amount'] < 0:
        message += f" class='text-danger'>Walked into a {work['building']} and lost {work['amount']} Gold ....ouch - {work['timestamp']}"
    elif  work['building'] == 'casino' and work['amount'] == 0:
        message += f" class='text-primary'>Walked into a {work['building']} and didn't lose or gain gold Gold - {work['timestamp']}"
    elif work['amount'] > 0:
        message += f" class='text-success'>Earned {work['amount']} gold from the {work['building']} - {work['timestamp']}"
    elif work['amount'] < 0: 
        message += f" class='text-danger'>Lost {work['amount']} gold from the {work['building']} - {work['timestamp']}"
    
    message += "</li>"
    
    return message

@app.route('/')
def index():
    if 'balance' not in session : session['balance'] = 0
    if 'recipts' not in session : session['recipts'] = []
    recipt_len = len(session['recipts'])
    if recipt_len > 50: session['recipts'].pop()

    message = '<ul>'
    for work in range(len(session['recipts'])-1,-1,-1):
        message += generate_message(session['recipts'][work])
    message += '</ul>'

    print(gold_source.keys())
    return render_template("index.html", building_keys=gold_source.keys() ,buildings=gold_source, message=message)



@app.route('/process_money', methods=['POST'])
def process_money():
    processed_recipt = {"amount" : random.randint(gold_source[request.form['building']]['min'], gold_source[request.form['building']]['max']), 
            "building": request.form['building'],
            "timestamp": datetime.now()}

    session['balance'] += processed_recipt['amount']
    session['recipts'].append(processed_recipt)
    return redirect('/')


@app.route('/cleanse')
def clear_cookies():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)