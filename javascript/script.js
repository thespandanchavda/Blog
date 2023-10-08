document.addEventListener("DOMContentLoaded", function() {
    // Sample blog data
    var blogs = [
        {
            title: "My First Blog",
            date: "October 8, 2023",
            content: "Myself Spandan Chavda and this is my first blog"
        },
        {
            title: "Exploring JavaScript",
            date: "October 15, 2023",
            content: "JavaScript is a versatile language. From client-side development in the browser to server-side work with Node.js, it provides a wide range of possibilities."
        }
        // Add more blogs as desired
    ];

    // Get the blogs section element
    var blogsSection = document.getElementById("blogs");
      
    // Loop through each blog and add it to the HTML
    blogs.forEach(function(blog) {
        var blogElement = `
            <article class="mb-5">
                <h3>${blog.title}</h3>
                <p><em>${blog.date}</em></p>
                <p>${blog.content}</p>
            </article>
        `;
        blogsSection.innerHTML += blogElement;
    });
});
