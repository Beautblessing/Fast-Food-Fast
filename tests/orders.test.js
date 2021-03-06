import request from 'supertest';
import app from '../server/app';

// Testing get all orders

describe('GET /orders', () => {
    it('should retreive all orders', (done) => {
        request(app)
            .get('/api/v1/orders')
            .expect(200, done);
    });
});
/**
 * Testing post order
 */
describe('POST /orders', () => {
    const order = {
        foodItemName: 'Beef burger',
        itemAmount: 1500,
        itemQuantity: 1,
        nameOfCustomer: 'Bunmi Thomas',
        email: 'bubu@yahoo.com',
        phone: '09087654367',
        address: 'ushafa',
        date: '2018-09-15',
        paymentType: 'Cash/POS',
    };

    it('respond with 201 created. Your order is being processed', (done) => {
        request(app)
            .post('/api/v1/orders')
            .send(order)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });
});


/**
 * Return welcome
 */

describe('GET /', () => {
    it('respond with welcome page', (done) => {
        request(app)
            .get('/api/v1/')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });
});


/**
 * Testing get a specific order
 */

describe('GET /order/:id', () => {
    it('respond with order retrieved successfully', (done) => {
        request(app)
            .get('/api/v1/orders/1')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });
    it('respond with such order does not exist', (done) => {
        request(app)
            .get('/api/v1/orders/6')
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });
});

// Testing update order status

describe('PUT /orders/:id', () => {
    const orderStatus = {
        foodItemName: 'Beef burger',
        itemAmount: 1500,
        itemQuantity: 1,
        nameOfCustomer: 'Bunmi Thomas',
        email: 'bubu@yahoo.com',
        phone: '09087654367',
        address: 'ushafa',
        date: '2018-09-15',
        orderStatus: 'declined',
        paymentType: 'Cash/POS',
    };

    const orderStatusNotpassed = {
        itemAmount: 1500,
        itemQuantity: 1,
        nameOfCustomer: 'Bunmi Thomas',
        email: 'bubu@yahoo.com',
        phone: '09087654367',
        address: 'ushafa',
        date: '2018-09-15',
        paymentType: 'Cash/POS',
    };

    it('respond with 200 updated. item updated successfully', (done) => {
        request(app)
            .put('/api/v1/orders/1')
            .send(orderStatus)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });

    it('respond with present order status is required for update', (done) => {
        request(app)
            .put('/api/v1/orders/1')
            .send(orderStatusNotpassed)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
                return true;
            });
    });
});
