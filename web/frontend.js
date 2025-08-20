async function getUser() {
    const id = document.getElementById('userId').value;
    const response = await fetch(`/api/user?id=${id}`);
    const data = await response.json();
    document.getElementById('userInfo').innerHTML = data.name;  // ⚠ XSS
}
