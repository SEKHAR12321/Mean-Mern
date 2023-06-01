const data=[
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"biryani king",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"Dada's biryani",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"Biryani by kilos",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"biryani house",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"Royal biryani",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=ImgDet&rs=1",
        name:"Behrouz biryani",
        ingredients:"",
    }
];
const hotel1=document.getElementById("hotel");
data.forEach((el)=>{
    const div=document.createElement("div");

    const image=document.createElement("img");
    image.src=el.image;

    const name= document.createElement("h1");
    name.innerText=el.name;

    const ingredients=document.createElement("p"); 
    ingredients.innerText=el.ingredients;
    const button1=document.createElement("button");
    button1.innerText="show more";
    const button2=document.createElement("button");
    button2.innerText="show less";
    button1.addEventListener("click",() =>{
        ingredients.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, explicabo. Magnam ut accusantium perferendis vitae qui dolore fugit tempora vel illum rem, a quod. Corporis ipsam omnis voluptatum possimus tenetur";
    })
    button2.addEventListener("click",() =>{
        ingredients.innerText="";
    })
    div.append(image,name,ingredients,button1,button2);
    hotel1.append(div);
});