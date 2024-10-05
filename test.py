a = '1:2,2:3,3:4'
a_l = a.split(",")
print(a_l)
a_l = [i.split(':') for i in a_l]
print(a_l)
prods = {}
for i in a_l:
    prods.update({int(i[0]):int(i[1])})

print(prods)