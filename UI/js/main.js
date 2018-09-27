/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown contents */
// const dropdown = document.getElementsByClassName('dropdown-btn');

// for (let i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//         let dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === 'block') {
//             dropdownContent.style.display = 'none';
//         } else {
//             dropdownContent.style.display = 'block';
//         }
//     });
// }


function redirect(url) {
    location.href = url;
}

let Name = '';
let Price = '';
let Quantity = '';

function sendItem(itemName, itemPrice, itemQty) {
    Name = itemName;
    Price = itemPrice * itemQty;
    Quantity = itemQty;
    const queryString = `?foodItemName=${Name}?price=${Price}?quantity=${Quantity}`;
    // alert(queryString);
    location.href = `delivery-detail.html${queryString}`;
}

// on button click for sending order
document.getElementsByClassName('send-order').addEventListener('click', sendItem);
