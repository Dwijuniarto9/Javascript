document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json";
    fetch(url);
    .then(function (res) {
        return res.json();
    })
}
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th> <th>Harga</th> <th>Warna</th>"
        data.forEach(element => {
            output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                    <td>${element.warna[0]}</td>
            </tr>`
        });
        output += "</table>";
        document.querySelector("$isi").innerHTML="<h1>DATA MENU</h1>";
    })


// let tblmenu = [
//     {
//     "idmenu" : 1,
//     "idkategori" : 1,
//     "menu" : "Bebek goreng",
//     "harga" : 13000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null
// },

//     {
//     "idmenu" : 2,
//     "idkategori" : 1,
//     "menu" : "Lemper",
//     "harga" : 5000,
//     "warna" : ["merah", "kuning"],
//     "stok" : false,
//     "keterangan" : null
// }  
// ]

// console.log(tblmenu[0].menu);
