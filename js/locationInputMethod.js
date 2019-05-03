var myLocation = context.entities.location;
var myLocMethod = "zip"; // Sane default

if (isNaN(myLocation)){
    myLocMethod = "city"; // Not a Zip code
}

UserSession.put("myLocMethod", myLocMethod, 2000);

// TODO: Could have far more robust input validation
//       (via regex for example)
