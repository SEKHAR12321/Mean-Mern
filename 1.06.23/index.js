// fetch("http://localhost:8080/myData",{
//     method:'GET',
// }).then((response)=>response.json())
//     .then((data)=>console.log(data));

// const show=document.getElementById("show");
// function renderdata(data) {  data.array.forEach((el) => {
//     const div = document.createElement("div") ;
//     const image = document.createElement("img");
//     image.src=el.image;
//     image.style.width="100px";
//     image.style.height="100px";
//     div.append(image);
//     show.append(div);
//  });
// }

function submitData(){
    const takenemail=document.getElementById("email");
    const takenpassword=document.getElementById("password");
    if(takenemail.value !=="" && takenpassword.value !==""){
        const obj={
            id:Date.now(),
            email: takenemail.value,
            password: takenpassword.value,
        };
        fetch("http://localhost:8080/myData",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            alert("create account");
        })
        .catch((err)=>console.log(err));
    } else{
        alert("fill it up");
    }
    }