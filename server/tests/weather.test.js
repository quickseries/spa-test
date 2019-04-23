const request = require('supertest')
const {mongoose} = require('./fixtures/db')
const app = require('../src/app')
const Weather = require('../src/models/weather')
const temperatures = []

beforeAll( async() => {
    await Weather.deleteMany()
})

afterAll(async() => {
    await mongoose.connection.close()
})

test('Should be empty', async() => {
    const res = await request(app)
    .get('/weather')
    .send()
    .expect(200)

    expect(res.body.length).toEqual(0)
})

test('Should add first data', async() => {
    const res = await request(app)
    .post('/weather')
    .send({temperature: 10})
    .expect(201)
    expect(res.body.temperature).toEqual(10)
    temperatures.push(res.body)
})

test('Should be equal to one', async() => {
    const res = await request(app)
    .get('/weather')
    .send()
    .expect(200)
    expect(res.body.length).toEqual(1)
})

test('Should add second data', async() => {
    const res = await request(app)
    .post('/weather')
    .send({temperature: 38})
    .expect(201)
    temperatures.push(res.body)
    expect(res.body.temperature).toEqual(38)
})

test('Should be equal to two', async() => {
    const res = await request(app)
    .get('/weather')
    .send()
    .expect(200)

    expect(res.body.length).toEqual(2)
})

test('Should delete one', async() => {
    const temp = temperatures.pop()
    const res = await request(app)
    .delete('/weather/' + temp._id)
    .expect(200)

    expect(res.body.temperature).toEqual(temp.temperature)
})

test('Should be equal to one', async() => {
    const res = await request(app)
    .get('/weather')
    .send()
    .expect(200)
    expect(res.body.length).toEqual(1)
})

test('Should delete one', async() => {
    const temp = temperatures.pop()
    console.log('length', temperatures.length, 'id', temp._id)
    const res = await request(app)
    .delete('/weather/' + temp._id)
    .expect(200)

    expect(res.body.temperature).toEqual(temp.temperature)
})

test('Should be empty', async() => {
    const res = await request(app)
    .get('/weather')
    .send()
    .expect(200)

    expect(res.body.length).toEqual(0)
})
