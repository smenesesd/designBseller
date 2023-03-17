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
        
    }
]

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
    });
})
