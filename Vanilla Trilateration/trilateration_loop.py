
from testA import testAData


def trilateration(x1,y1,r1,x2,y2,r2,x3,y3,r3):
    A = 2*x2 - 2*x1
    B = 2*y2 - 2*y1
    C = r1**2 - r2**2 - x1**2 + x2**2 - y1**2 + y2**2
    D = 2*x3 - 2*x2
    E = 2*y3 - 2*y2
    F = r2**2 - r3**2 - x2**2 + x3**2 - y2**2 + y3**2
    x = round((C*E - F*B) / (E*A - B*D), 2)
    y = round((C*D - A*F) / (B*D - A*E), 2)
    return x,y

final_xy_coordinates = []

for test in testAData:
    individual_coordinate = []
    x1 = test[0][0]
    y1 = test[0][1]
    r1 = test[0][2]
    x2 = test[1][0]
    y2 = test[1][1]
    r2 = test[1][2]
    x3 = test[2][0]
    y3 = test[2][1]
    r3 = test[2][2]
    try:
        individual_coordinate.append(trilateration(x1,y1,r1,x2,y2,r2,x3,y3,r3)[0])
        individual_coordinate.append(trilateration(x1,y1,r1,x2,y2,r2,x3,y3,r3)[1])
    except:
        pass
    if individual_coordinate:
        final_xy_coordinates.append(individual_coordinate)




with open("vanilla_trilateration_xy.py", "w") as output:
    output.write(str(final_xy_coordinates))





