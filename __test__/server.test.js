'use strict';
const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
});

describe('testing my server', () => {
   
    it('404 on a bad route', async () => {
        const response = await mockServerMethods.get('/no');
        expect(response.status).toBe(404);
    });
    
    it('should return 404 on a bad method', async () => {
    const response = await mockServerMethods.post('/');
    expect(response.status).toBe(404);
    });

    it('Create a record using POST', async () => {
        const response = await mockServerMethods.post('/food').send({
            FoodName: 'mansaf',
        });
        expect(response.status).toBe(201);
    });
    it('Read a list of records using GET', async () => {
        const response = await mockServerMethods.get('/food');
        expect(response.status).toBe(201);
    });
    it('Read a record using GET', async () => {
        const response = await mockServerMethods.get('/food/1');
        expect(response.status).toBe(200);
    });
    it('Update a record using PUT', async () => {
        const response = await mockServerMethods.put('/food/1');
        expect(response.status).toBe(201);
    });
    it('Destroy a record using DELETE', async () => {
        const response = await mockServerMethods.delete('/food/1');
        expect(response.status).toBe(204);
    });
    //////////////////////////////////////////////////////////////////////////////////
//     it('Create a record using POST', async () => {
//         const response = await mockServerMethods.post('/clothes').send({
//             ClothesName: 'T-shirt',
//         });
//         expect(response.status).toBe(201);
//     });
//     it('Read a list of records using GET', async () => {
//         const response = await mockServerMethods.get('/clothes');
//         expect(response.status).toBe(201);
//     });
//     it('Read a record using GET', async () => {
//         const response = await mockServerMethods.get('/clothes/1');
//         expect(response.status).toBe(200);
//     });
//     it('Update a record using PUT', async () => {
//         const response = await mockServerMethods.put('/clothes/1');
//         expect(response.status).toBe(201);
//     });
//     it('Destroy a record using DELETE', async () => {
//         const response = await mockServerMethods.delete('/clothes/1');
//         expect(response.status).toBe(204);
//     });
});

afterAll(async () => {
    await db.drop();
});


