const getPosts = () => {
    let fetchposts = fetch('https://jsonplaceholder.typicode.com/posts');

    let allposttitle = '';

    fetchposts.then((response) => {
        response.json().then((jsonData) => {
            //console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                let post = jsonData[i];
                //console.log(post);
                allposttitle = allposttitle + `<strong>Post Title:</strong> ${post.title}<br>  <strong>Post Body: </strong>${post.body}<br><hr>`

            }
            document.querySelector('#allposts').innerHTML = allposttitle;
        })
    })




}