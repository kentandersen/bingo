import values from '../values.js'

// preload
values.forEach(({ img: imgSrc }) => {
    const img = new Image()
    img.src = imgSrc
})

export default function createPixelation(canvas) {
    const ctx = canvas.getContext('2d');
    
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    return (imgSrc) => {
        const img = new Image();

        const setValue = (v = 0) => {
            const size = v * 0.01;
            const w = canvas.width * size;
            const h = canvas.height * size;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, w, h);
            ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
        }
        
        let intervalId
        img.onload = () => {
            setValue();
            
            let size = 8;
            intervalId = setInterval(() => {
                setValue(size++);
            }, 700);
        }
        
        img.src = imgSrc;
       

        return () => {
            clearInterval(intervalId)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }
}
