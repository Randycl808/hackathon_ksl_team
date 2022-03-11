# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Monster.destroy_all 
m1= Monster.create(name:'Killer Clowns')
m2= Monster.create(name:'Vampires')
m3= Monster.create(name:'Werewolves')
m4= Monster.create(name:'Ghosts')
m5= Monster.create(name:'Mummies')
m6= Monster.create(name:'Slashers')
m7= Monster.create(name:'Zombies')
m8= Monster.create(name:'Alien')

m1.items.create(name:'Mask', description:'Useable clown masks', price:25.00)
m1.items.create(name:'Clown Shoes', description:'Huge clown shoes', price:35.00)
m1.items.create(name:'Clown Nose', description:'Red clown nose', price:7.00)

m2.items.create(name:'Cape', description:'Vampire cape', price:20.00)
m2.items.create(name:'Sunblock', description:'Sunblock: SPF:100', price:5.00)
m2.items.create(name:'Garlic Blocker', description:'Keeps away the garlic!', price:40.00)

m3.items.create(name:'Hairbrush', description:'Helps with annoying shedding and keeps your coat nice and shiny', price: 9.99)
m3.items.create(name:'Flea medicine', description: 'Gets rid of annoying fleas', price: 5.99)
m3.items.create(name:'Anti silver vitamin', description: 'Strengthens immune system towards silver', price: 25.99)

m4.items.create(name:'Visible cloak', description: 'When you are tired of being invisible and want to be seen', price: 23.99)
m4.items.create(name:'Rocks', description: 'When you want to hit people with rocks', price: 19.99)
m4.items.create(name:'Doll', description: 'When you are tired of being a ghost', price: 14.99)


m5.items.create(name:'Trench Coat', description:'To keep prying eyes away from your wraps.', price:32.50)
m5.items.create(name:'Cough Drops', description:'Expell that dusty feeling from your mouth with our tasty fruit drops!', price:5.70)
m5.items.create(name:'Tape', description:'To fix any rips or nics in your favorite bandages.', price:14.99)

m6.items.create(name:'Caltrops', description:'To ensure the protagonist falls every time.', price:16.40)
m6.items.create(name:'Mute Button', description:'Trying to sneak up on your victims? Try the mute button to silence that annoying theme music!', price:52.85)
m6.items.create(name:'Fool Proof Trap', description:'No way that protagonist is escaping from our high tech top of the line adamantine bear trap. Set it and forget it.', price:76.89)

m7.items.create(name:'Tactical Clothing', description: 'Help protect your decaying flesh with some new duds', price:50.00)
m7.items.create(name:'Raw Steak', description: 'Free range, chemical free. For those nights you do not feel like going out for dinner.', price: 25.00) 
m7.items.create(name:'Tactical helmet', description:'Extra protection to keep that zombie head from being whacked off', price: 75.00)

m8.items.create(name:'Flying saucer parts', description: 'Extra parts in case your flying saucer stops flying', price:500.00)
m8.items.create(name:'Laser output coupler', description: 'Helps create extra powerful laser beams for earthly battles', price:300.00)
m8.items.create(name:'Steel lab table', description:'High quality steel grade for all the lab experiments you will perform on your human captives', price:700.00)





puts "Monsters: #{Monster.all.size}"
puts "Items: #{Item.all.size}"
