import values from '../values.js'

// preload
values.forEach(({ img: imgSrc }) => {
    const img = new Image()
    img.src = imgSrc
})

function setSmoothing(ctx, smoothing) {
    ctx.msImageSmoothingEnabled = smoothing;
    ctx.mozImageSmoothingEnabled = smoothing;
    ctx.webkitImageSmoothingEnabled = smoothing;
    ctx.imageSmoothingEnabled = smoothing;
}

export default function createPixelation(canvas) {
    const ctx = canvas.getContext('2d');
    
    return (imgSrc) => {
        const img = new Image();
        setSmoothing(ctx, false);


        let size = 8;
        const setValue = (v = size) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const size = v * 0.01;
            const w = canvas.width * size;
            const h = canvas.height * size;
            
            ctx.drawImage(img, 0, 0, w, h);
            ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
        }
        
        let intervalId
        img.onload = () => {
            setValue();
            
            intervalId = setInterval(() => {
                setValue(++size);
            }, 250);
        }
        
        img.src = imgSrc;
       

        return () => {
            clearInterval(intervalId)
            setSmoothing(ctx, true);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }
}
