var images = ["mainimage.jpg","fivemainpic,jpg", "humain.jpg", "redmainimage.jpg"];
var arrayImagesElement = document.getElementById("arrayImages");

function createImageNode() {
    var img = document.createElement('img');
    img.width = "300";
    img.style.margin = "15px";
    return img;
}

images.forEach(img => {
    arrayImagesElement.appendChild(createImageNode(img));
});