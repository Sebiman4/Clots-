const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products =[
    {
        id: 1,
        title: "Ribrave T-shirt",
        price: 25,
        colors: [
            {
                code: "pink",
                img: "./img/Ribrave.png",
            },
            {
                code: "green",
                img: "./img/Ribravegreen.png",
            },
        ],
    },
    {
        id: 2,
        title: "Puma T-shirt",
        price: 30,
        colors: [
            {
                code: "white",
                img: "./img/Puma.png",
            },
            {
                code: "blue",
                img: "./img/Pumablue.png",
            },
        ],
    },
    {
        id: 3,
        title: "Adidas T-shirt",
        price: 30,
        colors: [
            {
                code: "black",
                img: "./img/adidas.png",
            },
            {
                code: "white",
                img: "./img/adidaswhite.png",
            },
        ],
    },
    {
        id: 4,
        title: "Polo T-shirt",
        price: 40,
        colors: [
            {
                code: "green",
                img: "./img/polo.png",
            },
            {
                code: "white",
                img: "./img/polowhite.png",
            },

        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor= choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";
    });
});

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})