function startVideo(videoMeta:{videourl:string,videoname:string}){
    console.log(`startVideo ${videoMeta.videourl} , ${videoMeta.videoname}`);
}

const videoObj = {
    videourl:"url~~",
    videoname:"videoname"
}

startVideo(videoObj)