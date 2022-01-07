# 1. TASK: print "Hello World"
print( "Hello World" )
# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print( "Hello", name )	# with a comma
print( "Hello " + name )	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print( "Hello", name )	# with a comma
print( "Hello " + str(name) )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "fried fice"
print( "I love to eat {} and {} ".format(fave_food1, fave_food2)) # with .format()
print( f"I love to eat {fave_food1} and {fave_food2}") # with an f string

game = "eternal return"
test_subject = "mai"
healing_item = "Fish and Chips"
armor = "Phantom Jacket"

print ( f"Let's play {game}. There's a build I want to try on " + test_subject + ". It includes {}".format(armor) + " and has", healing_item, "to keep us healthy")

