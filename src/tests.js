const fet = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=2');
        const data = await response.json();
        console.log(data);
}

fet();

