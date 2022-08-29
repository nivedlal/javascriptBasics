const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        });
    }
}
video.showTags();

function playVideo(a,b){
    console.log(this.name+ " " + a + " " + b);
}
playVideo.call({name: 'Nived'}, 1,2);
playVideo.apply({name: 'John'}, [2,3]);
const fn = playVideo.bind({name: 'Brad'});
fn();
playVideo();

const video1 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}
video1.showTags();