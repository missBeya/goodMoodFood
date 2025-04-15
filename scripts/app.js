const menu = document.getElementById("menu");

const randomPrice = () => (Math.random() * (20 - 5) + 5).toFixed(2);
const randomTime = () => Math.floor(Math.random() * (60 - 15) + 15);

async function loadMenu() {
  const querySnapshot = await getDocs(collection(db, "foods"));
  querySnapshot.forEach((doc) => {
    const food = doc.data();
    const price = randomPrice();
    const time = randomTime();

    const card = `
      <div class="food-card">
        <img src="${food.imageUrl || 'https://via.placeholder.com/150'}" alt="${food.name}">
        <h3>${food.name}</h3>
        <p>${food.category || 'Uncategorized'}</p>
        <p>Price: $${price}</p>
        <p>Delivery: ${time} min</p>
      </div>
    `;
    menu.innerHTML += card;
  });
}

loadMenu();