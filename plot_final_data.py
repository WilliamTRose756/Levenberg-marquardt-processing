import plotly.express as px
import matplotlib.pyplot as plt
from final_data import final_data

# Final data file will be created when trilateration process is complete
# Will need to name the list as 'final_data'

x = []
y = []
for i in final_data:
    x.append(i[0])
    y.append(i[1])
plt.scatter(x=x,y=y)
plt.show()