const values = [
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
        name: 'Kent',
        thumb: './img/kent-thumb.jpg',
        img: './img/kent.jpg',
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
        name: 'Oystein',
        thumb: './img/oystein-thumb.png',
        img: './img/oystein.png',
    },
    {
        name: 'Sara',
        thumb: './img/sara-thumb.jpg',
        img: './img/sara.jpg',
    }
]

function getRandomIndex(pool) {
    return Math.floor(Math.random() * pool.length);
}

export function getRandomValue(pool = values) {
    const index = getRandomIndex(pool)
    return pool[index]
}

export function createGetRandomValue(initialPool = values) {
    let pool = initialPool
    return () => {
        const index = getRandomIndex(pool)
        const value = pool[index]

        pool = [ ...pool.slice(0, index), ...pool.slice(index + 1) ]
console.log(pool.length);

        if (!pool.length) {
            pool = initialPool
        }

        return value
    }
}

export default values
