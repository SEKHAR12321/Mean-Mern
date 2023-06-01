const button=document.getElementById("myid");
const button1=document.getElementById("clickable");
const button2=document.getElementById("unclickable");
const textarea=document.getElementById("myarea");
const button3=document.getElementById("table");
const Table=document.querySelector("tbody");
button.addEventListener("click",() =>{
    const div=document.getElementById("mydiv");
    const image=document.createElement("img");
    image.src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
    div.append(image);
    })
button1.addEventListener("click",() =>{
    textarea.innerText="This is my text";
})
button2.addEventListener("click",() =>{
    textarea.innerText="";
})
button3.addEventListener("click",() =>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="Sekhar";
    const td2=document.createElement("td");
    td2.innerText="20beea86";
    const td3=document.createElement("td");
    td3.innerText="22";
    tr.append(td1,td2,td3);
    Table.append(tr);
})