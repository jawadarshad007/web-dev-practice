    // await keyword is used to wait for a promise to resolve. (dont use it outside of an async function because is sa JS wait kre ga next lines ko execute nai kre ga jis sa  app ka UI freeze ho skahta hai)
    // always use await inside an async function
    // here also event loop concept is applied.
    async function gitbubUsers(){
        console.log("Hello g")
        try{
        const responce = await fetch("https://api.github.com/users");
        if (!responce.ok){
            throw new Error("Something went wrong");
        }
        const data = await responce.json();
        console.log(data)
        const parent = document.getElementById("first")
        for (let user of data){
          const element = document.createElement("div");
          element.classList.add("user")

          const image = document.createElement("img");
          image.src = user.avatar_url;


          const userName = document.createElement("h2")
          userName.textContent = user.login;


          const anchor = document.createElement("a");
          anchor.href = user.html_url; 
          anchor.target = "_blank"; // Open the link in a new tab
          anchor.textContent = "Visit Profile"


        

          element.append(image , userName, anchor)
          parent.append(element);


        }

      }
      catch(error){
        console.log("Error is ", error)
      }
    }
    gitbubUsers();
    console.log("I am separate task ...")


  