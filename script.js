function submitForm() {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Append values to the table
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];

    for (let i = 0; i < cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = cells[i];
    }

    // Clear form fields
    document.getElementById("myForm").reset();
}
