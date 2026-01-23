Cards:
  - I could dynamjically render each card depending upon what data i pull in instead of hard coding each but for now I am hard coding each individual card since I know I just using a three day forecast.

Context:
  - Context is not entirely necessary but I want to use it for practice/refresher, same goes for some light prop drilling. Could just grab location/searchData in App and prop drill the values to Form/Cards. Use the COntext file for all useEffects and other state that needs to be used in either component.

Currently:
  - Weather data is passed to the cards but it is all hard coded and should be generated dynamically depending on the length of the days array in weatherData.
  - Having a current temp for all days doesnt make sense since there is not current temp for tomorrow and the next day. I could change which data point gets pulled to the average for the day or do a check so that those days only show the average instead of the currenttemp. Though for those future days it might default to the data point being the average, or maybe its the projected tempature at this time 24/48 hours from now, because otherwise it wouldnt have anything to give me to begin with.