interface LabeledValue{
    videourl:string;
    videoname:string
}
function startVideo(videoMeta: LabeledValue){
    console.log(`startVideo ${videoMeta.videourl} , ${videoMeta.videoname}`);
}

const videoObj = {
    videourl:"url~~",
    videoname:"videoname"
}

startVideo(videoObj)

interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {
        color: "white", area: 100
    }
    if(config.color){
        newSquare.color = config.color
    }

    if(config.width){
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);