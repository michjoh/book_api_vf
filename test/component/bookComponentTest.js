const httpClient = require('supertest');
const app = require('../../src/app');
const assert = require('assert');

describe('Book inventory', function () {
    it('allows to stock up the items', async function () {
        const request = httpClient(app);

        const createResult = await request
            .post('/book')
            .send({
                title: "JavaScript in Action",
                authors: ["James Smith", "Kate Donovan"],
                isbn: "0123456789",
                description: "The ultimate JS book!"
            })
            .set('Content-Type', 'application/json')
            .expect(302);

        const readResult = await request.get(createResult.header.location)

        assert.deepStrictEqual(readResult.body, {
            title: "JavaScript in Action",
            slug: "javascript-in-action",
            authors: ["James Smith", "Kate Donovan"],
            isbn: "0123456789",
            description: "The ultimate JS book!"
        });
    })
});
