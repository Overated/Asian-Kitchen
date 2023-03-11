// Work in Progress
// const currencies = {
//     USD: "US Dollar",
//     YEN: "Japanese Yen",
//     KRW: "South Korea Won",
//     CNY: "Chinese Yuan Renminbi",
//     THB: "Thai Baht",
// };

// const primaryCurrency = document.getElementsByClassName("price");
// const secondaryCurrency = document.getElementsByClassName("exchange-price");
// primaryCurrency.innerHTML = getOption(currencies);
// secondaryCurrency.innerHTML = getOption(currencies);

// var currencies = {
//     USD: {
//         rate: 1,
//         sign: "$",
//     },
//     EUR: {
//         rate: 0.94043443,
//         sign: "€",
//     },
//     GBP: {
//         rate: 0.83068244,
//         sign: "",
//     },
//     CAD: {
//         rate: 1.3593654,
//         sign: "",
//     },
//     JPY: {
//         rate: 135.78331,
//         sign: "",
//     },
//     THB: {
//         rate: 34.564223,
//         sign: "",
//     },
//     KRW: {
//         rate: 1296.3761,
//         sign: "",
//     },
//     CNY: {
//         rate: 6.9082538,
//         sign: "",
//     },
//     TRY: {
//         rate: 18.847991,
//         sign: "",
//     },
// }



// function updatePrices(){
//     var elements = document.getElementById("price");
//     updatePrices.forEach((prices, index) => {
//         elements[index].innerHTML = prices * currencies.rate
//     });
// }
// document.getElementById("selector").onchange = function () {
//     updatePrices(currencies[this.value]);
// }
// updatePrices(currencies.USD);



  // var array2 = [
    //     6.55,
    //     12.01,
    //     3.05,
    //     9.01,
    //     12.01,
    //     14.55,
    //     4.05,
    //     29.55,
    //     2.95,
    //     11.85,
    //     7.45,
    //     7.45,
    //     3.85,
    //     15.01,
    //     2.05,
    //     9.55,
    //     6.85,
    //     2.55,
    //     1.05,
    //     1.55,
    //     1.55,
    //     1.55,
    //     1.55,
    // ];

    // const array1 = {
    //     USD: {
    //         rate: 1,
    //         sign: "$",
    //     },
    //     EUR: {
    //         rate: 0.94043443,
    //         sign: "€",
    //     },
    //     GBP: {
    //         rate: 0.83068244,
    //         sign: "£",
    //     },
    //     CAD: {
    //         rate: 1.3593654,
    //         sign: "$",
    //     },
    //     JPY: {
    //         rate: 135.78331,
    //         sign: "¥",
    //     },
    //     THB: {
    //         rate: 34.564223,
    //         sign: "฿",
    //     },
    //     KRW: {
    //         rate: 1296.3761,
    //         sign: "₩",
    //     },
    //     CNY: {
    //         rate: 6.9082538,
    //         sign: "¥",
    //     },
    //     TRY: {
    //         rate: 18.847991,
    //         sign: "₺",
    //     },
    // }

    // var first = array1.CAD.rate;
    // var second = array1.CNY.rate;
    // var third = array1.EUR.rate;
    // var fourth = array1.JPY.rate;
    // var fifth = array1.KRW.rate;
    // var sixth = array1.THB.rate;
    // var seventh = array1.TRY.rate;
    // var eight = array1.USD.rate;

    // function selected () {
    //     if (document.getElementById("selector").this = CAD) {
    //         elements[index].innerHTML = array1.CAD.sign + (parseFloat(price * first))
    //     } else if (document.getElementById("selector").this = CNY) {
    //         elements[index].innerHTML = array1.CNY.sign + (parseFloat(price * second))
    //     } else if (document.getElementById("selector").onselect = EUR) {
    //         elements[index].innerHTML = array1.EUR.sign + (parseFloat(price * third))
    //     } else if (document.getElementById("selector").onselect = JPY) {
    //         elements[index].innerHTML = array1.JPY.sign + (parseFloat(price * fourth))
    //     } else if (document.getElementById("selector").onselect = KRW) {
    //         elements[index].innerHTML = array1.KRW.sign + (parseFloat(price * fifth))
    //     } else if (document.getElementById("selector").onselect = THB) {
    //         elements[index].innerHTML = array1.THB.sign + (parseFloat(price * sixth))
    //     } else if (document.getElementById("selector").onselect = TRY) {
    //         elements[index].innerHTML = array1.TRY.sign + (parseFloat(price * seventh))
    //     } else if (document.getElementById("selector").onselect = USD) {
    //         elements[index].innerHTML = array1.USD.sign + (parseFloat(price * eight))
    //     } else {
    //         return;
    //     }
    // }

    // function updatePrices(ratess){
    // var elements = document.getElementsByClassName("price");
    // array2.forEach((price, index) => {
    //     elements[index].innerHTML = array1.CAD.sign + (parseFloat(price * array1.CAD.rate))
    // });
    // }
    // document.getElementById("selector").onchange = function () {
    //     updatePrices(array1[this.values]);
    // };
    // updatePrices(array1.USD);


// https://stackoverflow.com/questions/66058671/change-all-prices-in-the-html-page-from-one-currency-to-another    

// function updatePrices(rates){
//     var elements = document.getElementById("change");
//     updatePrices.foreach((prices, index) => {
//         elements[index].innerHTML = prices * rates
//     });
// }
// document.getElementById("selector").onchange = function () {
//     updatePrices(rates[this.value]);
// }
// updatePrices(rates.USD);

//item.sign + parseFloat(price * currency.rate) + currency.currency2
    
  