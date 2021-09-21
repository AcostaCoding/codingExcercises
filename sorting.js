    //#1 - Sort 10 schools around your house by distance:
    const houseAddress =  {
        x:5,
        y:8
    }

    const schools = [[3,5],[5,13],[32,6],[22,5],[2,2],[3,4],[4,7],[4,9],[6,2],[4,5]]

    function sortDirections (places) {
        const casa = [houseAddress.x,houseAddress.y];
        const distances = [];

        places.forEach((place,i) => {
            distances.push({
                distance: calculateDistance(place,casa),
                school: i
            })        
        });        
        
        
        distances.sort(function(a, b){return a.distance-b.distance})

        return distances
    }

    function calculateDistance(XYa,XYb) {
        return Math.sqrt((XYa[0] - XYb[0])**2 + (XYa[1] - XYb[1])**2)
    }

    sortDirections(schools)

//#2 - eBay sorts listings by the current Bid amount:

//#3 - Sport scores on ESPN

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews

//#6 - Temperature Records for the past 50 years in Canada

//#7 - Large user name database needs to be sorted. Data is very random.

//#8 - You want to teach sorting for the first time
