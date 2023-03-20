const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/air.png",
            },
            {
                code: "grey",
                img: "/img/air2.png"
            },
        ],
    },
    {
        id:2,
        title: "Nike Dunk",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/nikeDunk.png",
            },
            {
                code: "grey",
                img: "/img/nikeDunk2.png",
            },
        ],
    },
    {
        id:3,
        title: "Jordan",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/jordan.png",
            },
            {
                code: "grey",
                img: "/img/jordan2.png",
            },
        ],
    },
    {
        id:4,
        title: "New Balance",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/550.png",
            },
            {
                code: "grey",
                img: "/img/5502.png",
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
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent= choosenProduct.title;
        currentProductPrice.textContent= "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;

        })
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
