document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('maint');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('maint-date').value;
    row.insertCell(1).innerHTML = document.getElementById('nitrate').value;
    row.insertCell(2).innerHTML = document.getElementById('nitrite').value;
    row.insertCell(3).innerHTML = document.getElementById('ammonia').value;
    row.insertCell(4).innerHTML = document.getElementById('pH').value;
    row.insertCell(5).innerHTML = document.getElementById('notes').value;
    document.getElementById('maint-date').value = '';
    document.getElementById('nitrate').value = '';
    document.getElementById('nitrite').value = '';
    document.getElementById('ammonia').value = '';
    document.getElementById('pH').value = '';
    document.getElementById('notes').value = '';
});