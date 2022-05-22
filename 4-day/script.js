const elText = "Hello World"
// const elTextTwo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse inventore perspiciatis illo officia neque ad amet sit asperiores magni. Esse adipisci voluptatibus repellendus quae cumque repudiandae, vel et nulla aut!"

let index = 0;

function writeText() {
    document.body.innerHTML = elText.slice(0, index);

    index++;

    if (index > elText.length - 0) {
        index = 0;
    }
    //  if (index > elTextTwo - 1) {
    //     index = 0;
    // }
}

setInterval(writeText, 200)