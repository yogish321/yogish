const USER_API = "https://jsonplaceholder.typicode.com/users";

let data = [];

// ATTACHING EVENT LISTENER TO SEARCH USER
const searchInput = document.getElementById("searchUser");
searchInput.addEventListener("keyup", (e) => {
  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  clearContactContainer();
  renderUsersContactList(filteredData);
});

function createContact(contact = {}) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6 col-sm-12 col-xs-12";
  col.innerHTML = `<div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-2">
                                    <img class="user-avatar"
                                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                        alt="user-avatar" />
                                </div>
                                <div class="col-10">
                                    <h5 class="card-title sliced-text" id="name" style="width: 100%;">${contact.name}</h5>
                                    <p class="card-subtitle mb-2 text-body-secondary contact_email" id="email">${contact.email}</p>
                                    <p class="contact_address sliced-text" id="address" style="width: 100%;"><span class="me-1"><i class='bx bx-map'></i></span>${contact.address.street}, ${contact.address.city}</p>
                                </div>
                            </div>
                        </div>`;
  return col;
}

function clearContactContainer() {
  const container = document.getElementById("contacts-list-container");
  container.innerHTML = "";
}

function renderUsersContactList(data = []) {
  const contactNodes = [];
  const container = document.getElementById("contacts-list-container");
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      contactNodes.push(createContact(data[i]));
    }
  }
  container.append(...contactNodes);
}

async function getAllUsers() {
  const response = await fetch(USER_API);
  data = await response.json();
  renderUsersContactList(data);
}

getAllUsers();