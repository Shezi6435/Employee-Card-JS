
const defaultProfile = {
    name: 'John Doe',
    designation: 'Web Developer',
    picture: 'https://via.placeholder.com/150',
    backgroundColor: '#ffffff'
};


const profileCard = document.getElementById('profileCard');
const profilePic = document.getElementById('profilePic');
const profileName = document.getElementById('profileName');
const profileDesig = document.getElementById('profileDesig');
const inputField = document.getElementById('inputField');
const colorPicker = document.getElementById('colorPicker');


function changeName() {
    const newName = inputField.value.trim();
    if (newName !== '') {
        profileName.textContent = newName;
        inputField.value = ''; 
    }
}


function changeDesignation() {
    const newDesig = inputField.value.trim();
    if (newDesig !== '') {
        profileDesig.textContent = newDesig;
        inputField.value = ''; 
    }
}


function changePicture() {
    const newPicture = prompt('Enter the URL of the new profile picture:');
    if (newPicture) {
        profilePic.src = newPicture;
    }
}


function changeBackground() {
    const newColor = colorPicker.value;
    profileCard.style.backgroundColor = newColor;
}


function resetProfile() {
    profileName.textContent = defaultProfile.name;
    profileDesig.textContent = defaultProfile.designation;
    profilePic.src = defaultProfile.picture;
    profileCard.style.backgroundColor = defaultProfile.backgroundColor;
    inputField.value = ''; 
    colorPicker.value = '#ffffff'; 
}