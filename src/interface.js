"use strict";
function startVideo(videoMeta) {
    console.log(`startVideo ${videoMeta.videourl} , ${videoMeta.videoname}`);
}
const videoObj = {
    videourl: "url~~",
    videoname: "videoname"
};
startVideo(videoObj);
function createSquare(config) {
    let newSquare = {
        color: "white", area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ width: 100, opacity: 0.5 });
