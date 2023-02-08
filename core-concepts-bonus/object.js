// what you can do with javascript object
const hero = {
    name: 'Hero Alom',
    address: 'Cinema Movie',
    id: 199,
    isSingle: true,
    friends: ['apu', 'raaz', 'salman', 'aamir'],
    movies: [{ name: 'no. 1', year: 2000 }, { name: 'goriber hero', }],
    act: function () {
        console.log('acting like manna');
    },
    car: {
        brand: 'tesla',
        price: 300000000,
        made: 2023,
        manufacturer: {
            name: 'tesla',
            ceo: 'elon musk'
        }
    }
}

// console.log(hero.act());
hero.act();