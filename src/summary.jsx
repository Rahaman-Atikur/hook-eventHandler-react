const loadData = async () => {
    const response = fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}