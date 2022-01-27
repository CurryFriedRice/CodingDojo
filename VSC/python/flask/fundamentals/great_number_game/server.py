from random import randint
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'm\x00\x06\xac~\\\xb1Qy6=\xbe\x08\x93\xfc\xa6'

def difference(a, b):
    return abs(a-b)

@app.route("/")
def thinking_of_number():
    if 'current_num' not in session: session['current_num'] = randint(1,100)
    if 'active_guesses' not in session: session['active_guesses'] = []
    if 'response' not in session: session['response'] = ["I'm thinkning of a number between 1 and 100", "Take a Guess!"]
    return render_template("index.html")


@app.route('/guess', methods=['POST']) #this is just to generate fun responses through a series of checks
def guess():
    # session.pop('response')
    session['response'] = []
    guess = request.form['guess']
    if not guess.isnumeric():#yell at the user for doing invalid input
        session['response'].append("HEY! I want a whole number! between 1 and 100!") 
        return redirect('/')
    elif int(guess) > 100 or int(guess) < 0: 
        session['response'].append("HEY! c'mon! between 1 and 100!")
        return redirect('/')
    guess = int(guess) #convert it to an int
    if guess in session['active_guesses']:
        session['response'].append(f"You already guessed {guess}!")
    elif guess not in session['active_guesses']:
        session['active_guesses'].append(guess)
    
    if guess > session['current_num']:
        session['response'].append(f"it's smaller than {guess}")
    elif guess < session['current_num']:
        session['response'].append(f"it's bigger than {guess}")
    distance_to_guess = difference(guess, session['current_num'])
    session["dist_to_guess"] = distance_to_guess
 
    if distance_to_guess == 0:
        session['response'].append(f"You got it! it was {session['current_num']}")
        session['response'].append(f"It only took you {len(session['active_guesses'])} guesses")
        #return redirect("/leaderboard")
    elif distance_to_guess < 2:
        session['response'].append(f"And you're really close!!")
    elif distance_to_guess < 5:
        session['response'].append(f"And you're kind of close!")
    elif distance_to_guess < 10:
        session['response'].append(f"And you're close...ish")
    
    return redirect("/")
    
@app.route('/add_to_board', methods=['POST']) #Add the score to the leaderboard
def update_leaderboard():
    print(request.form)
    newEntry = {"name": request.form['name'] , "guesses": len(session['active_guesses']), "real_num": session['current_num']}
    if request.form['name'] == '':
        session['name'] = "no name"
    else:
        session['name'] = request.form['name']
    print(newEntry)
    if 'leaderboard' not in session:
        session['leaderboard'] = [newEntry]
    else:
        session['leaderboard'].append(newEntry)

    return redirect("/leaderboard")

#render the leaderboard
@app.route('/leaderboard')
def display_leaderboard():
    return render_template("leaderboard.html", keys = session['leaderboard'][0].keys())

#clear the data that's needed to play the game
@app.route('/again')
def play_again():
    session.pop('current_num')
    session.pop('active_guesses')
    session.pop('response')
    session.pop('dist_to_guess')
    return redirect("/")

@app.route('/delete_cookies')
def reset():
    session.clear()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
