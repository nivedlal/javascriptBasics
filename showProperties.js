function showProperties(obj){
    for (key in obj)
        if(typeof obj[key] ===  'string')
            console.log(key,obj[key]);
}
const movie = {title: 'a', year:2018, rating:4.5, director:'b'};
showProperties(movie);