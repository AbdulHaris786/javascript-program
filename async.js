async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        const names = users.map(user => user.name);
        console.log("User Names:", names);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();