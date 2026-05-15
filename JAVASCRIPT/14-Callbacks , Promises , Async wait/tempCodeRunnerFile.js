 const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await comments.json();
        console.log(data);