let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Bebek goreng", gambar:"bebek.jpg", harga:13000},
    {idmenu:2, idkategori:1, menu:"Lemper", gambar:"lemper.jpg", harga:5000},
    {idmenu:3, idkategori:2, menu:"Lumpia", gambar:"lumpia.jpg", harga:5000},
    {idmenu:4, idkategori:2, menu:"Nasi goreng",gambar:"bebek.jpg", harga:13000},
    {idmenu:5, idkategori:3, menu:"Sate", gambar:"sate.jpg", harga:15000},
    {idmenu:6, idkategori:3, menu:"Seblak ceker", gambar:"seblakceker.jpg", harga:10000},
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
        <img src="images/${kolom.gambar}" alt=""/>
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>RP. ${kolom.harga}</h2>
    </div>;
    <div class="beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
    </div>`;

});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        //console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };   
}

//console.log(cart);