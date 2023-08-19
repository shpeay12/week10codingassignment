let id = 0; //sets id to zero

document.getElementById("add").addEventListener("click", () => { //allows element to be added by a click
    let table = document.getElementById("potluck-list");
    let row = table.insertRow(1);

    let isFoodSelected = document.getElementById('food').checked; //variable for radio button food
    let isDrinkSelected = document.getElementById('drink').checked; //variable for radio button drink
    let type = ''; //sets type to empty

    if(isFoodSelected) { //if/else statement to check if food or drink is clicked
        type = "Food";
    } else {
        type = "Drink";
    }

    row.insertCell(0).innerHTML = document.getElementById('name').value; //inserts name into table
    row.insertCell(1).innerHTML = document.getElementById('email-address').value; //inserts email address into table
    row.insertCell(2).innerHTML = type; //inserts food or drink based on if/else statement into table
    row.insertCell(3).innerHTML = document.getElementById('item').value; //inserts item into table
    row.insertCell(4).innerHTML = document.getElementById('quantity').value; //inserts quantity of items into table
    let deleteRow = row.insertCell(5); //variable declared that allows a delete button to be inserted into column 5 in table
    row.id = `item-${id}`;
    deleteRow.appendChild(createDeleteButton(id++)); //creates delete button
    document.getElementById('name').value = ''; //The following should empty out fields after new form is submitted
    document.getElementById('email-address').value = '';
    document.getElementById('food').value = false;
    document.getElementById('drink').value = false;
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
})

function createDeleteButton(id) { //function to create delete button
    let dbtn = document.createElement('button');
    dbtn.id = id;
    dbtn.innerHTML = 'Delete';
    dbtn.onclick = () => { //function that removes a row when delete button is clicked
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return dbtn;
}