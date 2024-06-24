let arr = [
    {
        brand: "ferrari",
        name: "Ferrari Portofino",
        price: "4 800 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari California T",
        price: "5 000 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari 488",
        price: "6 000 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari 488 Pista",
        price: "8 100 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari 458",
        price: "9 780 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari SF90 Stradale",
        price: "13 780 000 000",
        index: 7,
    },
    {
        brand: "ferrari",
        name: "Ferrari GTC4Lusso",
        price: "14 310 000 000",
        index: 7,
    },
    {
        brand: "bugatti",
        name: "La Voiture Noire",
        price: "20 000 000 000",
        index: 7,
    },
    {
        brand: "bugatti",
        name: "Bugatti Veyron",
        price: "31 000 000 000",
        index: 7,
    },
    {
        brand: "bugatti",
        name: "Bugatti Chiron",
        price: "85 130 000 000",
        index: 7,
    },
    {
        brand: "bugatti",
        name: "Bugatti Divo",
        price: "127 000 000 000",
        index: 7,
    },
    {
        brand: "bugatti",
        name: "Bugatti Centodieci",
        price: "209 000 000 000",
        index: 7,
    },
    {
        brand: "lamborghini",
        name: "Lamborghini Veneno",
        price: "7 000 000 000",
        index: 7,
    },
    {
        brand: "lamborghini",
        name: "Lamborghini Urus",
        price: "10 900 000 000",
        index: 7,
    },
    {
        brand: "lamborghini",
        name: "Huracan Evo",
        price: "18 000 000 000",
        index: 7,
    },
    {
        brand: "lamborghini",
        name: "Lamborghini Sian",
        price: "48 790 000 000",
        index: 7,
    },
    {
        brand: "lamborghini",
        name: "Lamborghini Aventador",
        price: "60 000 000 000",
        index: 7,
    },
    {
        brand: "koenigsegg",
        name: "Koenigsegg Agera R",
        price: "45 000 000 000",
        index: 7,
    },
    {
        brand: "koenigsegg",
        name: "Koenigsegg Regera",
        price: "45 000 000 000",
        index: 7,
    },
    {
        brand: "koenigsegg",
        name: "Koenigsegg Agera RS",
        price: "49 900 000 000",
        index: 7,
    },
    {
        brand: "koenigsegg",
        name: "Koenigsegg Jesko",
        price: "68 880 000 000",
        index: 7,
    },
    {
        brand: "koenigsegg",
        name: "Koenigsegg One 1",
        price: "226 000 000 000",
        index: 7,
    },
    {
        brand: "mclaren",
        name: "Mclaren P1",
        price: "54 430 000 000",
        index: 7,
    },
    {
        brand: "mclaren",
        name: "Mclaren 650s Spider",
        price: "7 930 000 000",
        index: 7,
    },
    {
        brand: "mclaren",
        name: "Mclaren 720S",
        price: "6 700 000 000",
        index: 7,
    },
    {
        brand: "pagani",
        name: "Pagani Zonda",
        price: "43 700 000 000",
        index: 7,
    },
    {
        brand: "pagani",
        name: "Pagani Huayra",
        price: "77 700 000 000",
        index: 7,
    },
]

function s1() {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let a = Number(arr[i].price.replace(/\s/g, ""));
            let b = Number(arr[j].price.replace(/\s/g, ""));
            if(a>b){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j]= tmp;
            }
        }
    }
    document.getElementById('contain-data').innerHTML = '';
    main();
}
function s2() {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let a = Number(arr[i].price.replace(/\s/g, ""));
            let b = Number(arr[j].price.replace(/\s/g, ""));
            if(a<b){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j]= tmp;
            }
        }
    }
    document.getElementById('contain-data').innerHTML = '';
    main();
}
const urlParams = new URLSearchParams(window.location.search);
const param1 = urlParams.get('b'); // Lấy giá trị của param1
console.log(param1);
if (param1 != null) {
    arr = arr.filter(function (x) {
        return x.brand == param1;
    })
}
function main() {
    for (let i = 0; i < 36; i++) {

        fetch('../themelist.html')
            .then(response => response.text())
            .then(html => {
                html = html.replace("prices", arr[i].price);
                html = html.replace('chiuthoikhongbiet', `inventory-page-single.html?q=${arr[i].name}`);
                html = html.replace('chiuthoikhongbiet', `inventory-page-single.html?q=${arr[i].name}`);
                html = html.replace('chiuthoikhongbiet', `inventory-page-single.html?q=${arr[i].name}`);
                html = html.replace('chiuthoikhongbiet', `inventory-page-single.html?q=${arr[i].name}`);

                html = html.replace("img1", `../Data/${arr[i].name} 2.jpg`);
                html = html.replace("img2", `../Data/${arr[i].name} 3.jpg`);
                html = html.replace("img3", `../Data/${arr[i].name} 4.jpg`);
                html = html.replace("names", arr[i].name);
                document.getElementById('contain-data').innerHTML = document.getElementById('contain-data').innerHTML + html; // Chèn nội dung vào phần tử có id là 'container'
            });
    }
}
main();

