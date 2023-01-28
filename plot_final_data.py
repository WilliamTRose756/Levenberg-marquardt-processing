import plotly.express as px
import matplotlib as plt
from final_data import *


x = []
y = []
for i in final_data:
    x.append(i[0])
    y.append(i[1])
    plt.scatter(x=x,y=y)
    plt.show()