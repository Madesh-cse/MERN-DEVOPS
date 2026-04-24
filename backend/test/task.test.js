const request = require("supertest");
const {server, app} = require("../index");
const mongoose = require("mongoose")

describe('GET api/tasks',()=>{
    it("It should return 200 status", async()=>{
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);
    })
    it("It should return object   okk", async()=>{
        const res = await request(app).get('/api/tasks');
        expect(typeof res.body).toBe("object");
    })
})

afterAll( async()=>{
    await mongoose.connection.close();
    await server.close();
})