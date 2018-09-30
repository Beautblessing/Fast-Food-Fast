const orders = [
    {
        id: 1,
        foodItemName: 'Chicken pizza',
        itemAmount: '2000',
        itemQuantity: 1,
        nameOfCustomer: 'Bunmi Thomas',
        email: 'bubu@yahoo.com',
        phone: '09087654367',
        address: 'ushafa',
        orderStatus: 'accepted',
        date: 'Sun, 30 Sep 2018 09:00:16 GMT',
        completed: true,
    },

    {
        id: 2,
        foodItemName: 'Beef burger',
        itemAmount: 3000,
        itemQuantity: 2,
        nameOfCustomer: 'Bode Briggs',
        email: 'bbriggs@yahoo.com',
        phone: '09023455667',
        address: 'Apapa',
        orderStatus: 'pending',
        date: (new Date()).toUTCString(),
        completed: false,
    },
];


export default orders;
