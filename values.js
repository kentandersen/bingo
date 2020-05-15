const values = [
    {
        name: 'Aryan',
        thumb: './img/aryan-thumb.jpg',
        img: './img/aryan.jpg',
    },
    {
        name: 'Calle',
        thumb: './img/calle-thumb.png',
        img: './img/calle.png',
    },
    {
        name: 'Caroline',
        thumb: './img/caroline-thumb.jpg',
        img: './img/caroline.jpg',
    },
    {
        name: 'Christian',
        thumb: './img/christian-thumb.jpg',
        img: './img/christian.jpg',
    },
    {
        name: 'Didrik',
        thumb: './img/didrik-thumb.png',
        img: './img/didrik.png',
    },
    {
        name: 'Jarle',
        thumb: './img/jarle-thumb.jpg',
        img: './img/jarle.jpg',
    },
    {
        name: 'Joel',
        thumb: './img/joel-thumb.png',
        img: './img/joel.png',
    },
    {
        name: 'Julie',
        thumb: './img/julie-thumb.jpg',
        img: './img/julie.jpg',
    },
    {
        name: 'Kent',
        thumb: './img/kent-thumb.jpg',
        img: './img/kent.jpg',
    },
    {
        name: 'Long',
        thumb: './img/long-thumb.png',
        img: './img/long.png',
    },
    {
        name: 'Mari',
        thumb: './img/mari-thumb.png',
        img: './img/mari.png',
    },
    {
        name: 'Marlin',
        thumb: './img/marlin-thumb.jpg',
        img: './img/marlin.jpg',
    },
    {
        name: 'Mats',
        thumb: './img/mats-thumb.jpg',
        img: './img/mats.jpg',
    },
    {
        name: 'Nicolai',
        thumb: './img/nicolai-thumb.jpg',
        img: './img/nicolai.jpg',
    },
    {
        name: 'Oystein',
        thumb: './img/oystein-thumb.png',
        img: './img/oystein.png',
    },
    {
        name: 'Sara',
        thumb: './img/sara-thumb.jpg',
        img: './img/sara.jpg',
    },
    {
        name: 'Simen',
        thumb: './img/simen-thumb.jpg',
        img: './img/simen.jpg',
    },
]


let pool = values
export function getRandomValue() {
    const index = Math.floor(Math.random() * pool.length);
    const value = pool[index]

    pool = [ ...pool.slice(0, index), ...pool.slice(index + 1) ]

    if (!pool.length) {
        pool = values
    }

    return value
}

export default values
