//if the function is part of an object, it is called 
//a method.
//if the function is a method in an object,
// "this" references that object itself. Examples:
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
}
video.stop = function(){
    console.log(this);
}
video.play();
video.stop();

//if the function is a regular one, ie not part of an 
//object,"this" references to global object .
//ie(window in browser) and (global in node).
//Examples:
function playVideo(){
    console.log(this);
}
function Video(title){ // construction function
    this.title= title;
    console.log(this);
}
const video1 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(tag);
        });
    }
}
const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this);
    }
}

playVideo();
const v = new Video('a');
video1.showTags();
video2.showTags();