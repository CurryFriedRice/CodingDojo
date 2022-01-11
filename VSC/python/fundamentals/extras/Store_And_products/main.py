
from product import product
from store import store

jeans = product("jeans", 25.99, 384145, "clothing")
shirt = product("T Shirt", 25.99, 482895, "clothing")
TV  = product("Television", 4825.99, 123475, "electronics")
speakers = product("Speakers", 25.99, 903458, "electronics")



gap = store("The Gap")
kroger = store("Fred Meyers")
bb = store("Best Buy")

gap.add_product(jeans).add_product(shirt).sell_product(jeans.id)
kroger.add_product(jeans).add_product(shirt).add_product(TV).add_product(speakers).inflation(2).sell_product(TV.id)
bb.add_product(TV).add_product(speakers).set_clearance("electronics", 12).sell_product(TV.id)