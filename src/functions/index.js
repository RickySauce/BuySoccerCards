const routeWithConventions = (name) => {
    var route = "/"
    if(name !== 'Home') {
     name.split('').forEach((letter, index) => {
         if (letter === name[0]){
              route = route + letter.toLowerCase()
         } else if (letter === letter.toLowerCase()) {
             route = route + letter
         } else {
             route = route + "-" + letter.toLowerCase()
         }
     })
    }
    return route
 }

 export default routeWithConventions