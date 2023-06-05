fetch("http://localhost:3000/myrecipe")
  .then((response) => response.json())
  .then((data) => {
    //const myrecipe = data.myrecipe;
    const dishesContainer = document.getElementById("hotel");
    data.forEach((recipe) => {
      const div = document.createElement("div");
      const image = document.createElement("img");
      image.src = recipe.link;
      const dishTitle = document.createElement("h1");
      dishTitle.innerText = recipe.dish;
      const desc = document.createElement("p");
      desc.innerText = recipe.description;
      const button1 = document.createElement("button");
      button1.innerText = "show Description";
      button1.addEventListener("click", () => {
        desc.innerText = recipe.description;
        localStorage.setItem("id", JSON.stringify(recipe.id));
      });
      const button2 = document.createElement("button");
      button2.innerText = "click for Hide";
      button2.addEventListener("click", () => {
        desc.innerText = "";
      });
      const updatebutton = document.createElement("button");
      updatebutton.innerText = "UPDATE";
      updatebutton.addEventListener("click", () => {
        const updatetitle = prompt("");
        const newobj = {
          dish: updatetitle,
          link: recipe.link,
          description: recipe.description,
        };
        fetch(`http://localhost:8080/myrecipe/${recipe.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newobj),
        })
          .then((res) => {
            alert("updated title successfully");
          })
          .catch((err) => {
            alert("error occurred while updating" + err);
          });
      });
      const deletebutton = document.createElement("button");
      deletebutton.innerText = "DELETE";
      deletebutton.addEventListener("click", () => {
        fetch(`http://localhost:8080/myrecipe/${recipe.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            alert("Deleted the item");
          })
          .catch((err) => {
            alert("error occurred while deleting" + err);
          });
      });

      div.append(image, dishTitle, desc, button1, button2, updatebutton, deletebutton);
      dishesContainer.append(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching recipe data:", error);
  });

