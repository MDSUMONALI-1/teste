const loadBuddies = () => {
    fetch('https://openlibrary.org/search.json?q=html')
        .then(res => res.json())
        .then(data => console.log(data.docs[0].title));
}
loadBuddies();

// const displayBuddies = data => {
//     console.log(data);
//     const buddies = data.results;
//     const buddiesDiv = document.getElementById('buddies');
//     for (const buddy of buddies) {
//         const p = document.createElement('p');
//         p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
//         buddiesDiv.appendChild(p);
//     }
// }