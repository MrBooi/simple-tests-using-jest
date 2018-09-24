const googleSearch = require('./script.js');
const dbWebsite = [
    'dog.com',
    'aya.com',
    'cars.com',
    'animals.com',
    'dogpictures.com',
    'myfavouritedogs.com'
]


describe('Google Search', () => {
    it('is searching google', () => {
        expect(googleSearch('aya', dbWebsite)).toEqual(['aya.com'])
        expect(googleSearch('.com', dbWebsite).length).toEqual(3)
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbWebsite)).toEqual([])
        expect(googleSearch(null, dbWebsite)).toEqual([])
    })

    it('does not ruturn more than 3 matches', () => {
        expect(googleSearch('.com', dbWebsite).length).toEqual(3)
    })
})