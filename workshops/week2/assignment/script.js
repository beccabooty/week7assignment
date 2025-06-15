console.log("Hello World!");

const images=[
{url:https://hilmaafklint.se/wp-content/uploads/Hak108.jpg;,
    alt:"The Ten Largest, Adulthood. By Hilma Af Klint";,
    srcSet: ;,
    imgName: ;,
    width: ;,
    height: ;
},
{src: "https://hilmaafklint.se/wp-content/uploads/Hak187.jpg",alt:"Altarpieces. By Hilma Af Klint"},
{src: "https://hilmaafklint.se/wp-content/uploads/Hak130.jpg",alt:"The US Series. By Hilma Af Klint"},
];

function createThumbnails(images){
    const thumbnail-container=document.querySelector('thumbnail-container');
images.array.forEachelement => {
    const img=document.createElement("img")
    img.src = https://hilmaafklint.se/wp-content/uploads/Hak108.jpg;
    img.alt = 'The Ten Largest, Adulthood. By Hilma Af Klint';
    if (.srcSet) {
      img.srcset = imageData.srcSet;
    }
    img.className = 'thumbnail';
});
}

thumbnail-container.appendChild(img);

img.addEventListener('click', function () {
    createFullscreenImage(img);
  });