let element = [];
let tableId = document.getElementById('displayTable');
let listItem;

function addItem() {
    let addNew = document.getElementById('input-product').value;
    let btnEdit = "<td class='btnCustom'>" + "<button type='button' onclick='editItem(this)'>Edit</button>" + "</td>";
    let btnDelete = "<td class='btnCustom'>" + "<button type='button' onclick='deleteItem(this)'>Delete</button>" + "</td>";
    let nameProduct = "<td class='nameCustom'>" + "<input type='text' class='nameSp' value=" + addNew + " disabled>" + "</td>";
    let data = [nameProduct, btnEdit, btnDelete];
    element.push(data);

    alert(addNew + ' đã đuơc thêm vào dữ liệu!');
    showItem();
}

function showItem() {
    listItem = "<table cellspacing='0' cellpadding='1'>" + "<tr>" + "<th style='text-align: left'>" + "Product Name" + "</th>"
        + "<th style='text-align   : right; color: darkred' colspan='2'>" + element.length + " products" + "</th>" + "</tr>";
    for (let i = 0; i < element.length; i++) {
        listItem += "<tr id=" + i + ">";
        for (let j = 0; j < 3; j++) {
            listItem += element[i][j];
        }
        listItem += "</tr>";
    }
    listItem += "</table>";
    tableId.innerHTML = listItem;
}

function editItem(val) {
    // let elementInput = val.parentElement.parentElement.firstChild.firstChild;
    // elementInput.removeAttribute('disabled');

    let editText = prompt('Nhập tên sản phẩm: ');
    let indexEdit = parseInt(val.parentElement.parentElement.id);
    element[indexEdit][0] = "<td class='nameCustom'>" + "<input type='text' class='nameSp' value=" + editText + " disabled>" + "</td>";
    console.log(element);
    showItem();
}

function deleteItem(val) {
    val.parentElement.parentElement.remove();
    let indexDel = parseInt(val.parentElement.parentElement.id);
    element.splice(indexDel, 1);
    showItem();
}