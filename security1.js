
// function showPasswordChangeBox() {
//     document.getElementById("passwordChangeBox").style.display = "block";
// }

// function closePasswordChangeBox() {
//     document.getElementById("passwordChangeBox").style.display = "none";
// }

// function checkPasswordLength() {
//     const newPasswordInput = document.getElementById("newPasswordInput");
//     const passwordLengthError = document.getElementById("passwordLengthError");
//     if (newPasswordInput.value.length < 8) {
//         passwordLengthError.style.display = "block";
//     } else {
//         passwordLengthError.style.display = "none";
//     }
// }
// function changePassword() {
//     const currentPassword = document.getElementById("currentPasswordInput").value;
//     const confirmPassword = document.getElementById("confirmPasswordInput").value;
//     const newPassword = document.getElementById("newPasswordInput").value;

//     if (newPassword === "" || confirmPassword === "" || currentPassword === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (currentPassword !== confirmPassword) {
//         alert("Passwords do not match. Please try again.");
//         return;
//     }

//     if (currentPassword === newPassword) {
//         alert("New password cannot be the same as the current password. Please try again.");
//         return;
//     }

//     if (validatePass(newPassword)) {
//         alert("Password changed successfully.");
//         closePasswordChangeBox();
//         return;
//     }

//     // change pass
//     const userId = localStorage.getItem("id");
//     // test-api1-1.onrender.com
//     fetch("https://finsh-pro.onrender.com/api/user/update-password/" + userId, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//         body: JSON.stringify({
//             oldpassword: currentPassword,
//             newpassword: newPassword,
//         }),
//     }).then(function (response) {
//         if (!response.ok) {
//             alert("Error changing password. Please try again.");
//         }
//         return response.json();
//     }).then(function (data) {
//         alert("Password changed successfully.");
//         closePasswordChangeBox();
//         localStorage.setItem("token", data.data.token);
//     })

//     .catch((error) => {
//         console.error("Error changing password:", error);
//         alert("Error changing password:" + error);
//     });

// }
// function validatePass(pass) {
//     const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//     return pass.match(passw);
// }

// function saveChanges() {
//     // Implement your logic to save changes here
//     alert("Changes have been saved.");
// }

// // Add an event listener to the "Save changes" button
// document.getElementById("saveButton").addEventListener("click", function () {
//     saveChanges();
// }); 
// function toggleMenu() {
//     const submenu = document.getElementById("submenu");
//     submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
// } 
// document.getElementById("signOutButton").addEventListener("click", function () {
//     localStorage.removeItem("token");
//     localStorage.removeItem("id");
//     window.location.href = "login.html";
// });
// function discardChanges() {
//     alert("Changes have been discarded.");
// }
// document.getElementById("discardButton").addEventListener("click", function () {
//     discardChanges();
// });

// if (!window.location.href.includes("person.html")) {
//     document.getElementById("generalButton").addEventListener("click", function () {
//         functions.goToPage('person.html');
//     });
// } else {
//     document.getElementById("generalButton").addEventListener("click", function () {
//         console.log("Staying on the current page");
//     });
// }
// function goToPage(page) {
//     window.location.href = page;
// }
// // rate
// // let ratingValue;

// // function openRatingBox() {
// //     const ratingBox = document.getElementById("ratingBox");
// //     ratingBox.style.display = "block";
// // }

// // function closeRatingBox() {
// //     const ratingBox = document.getElementById("ratingBox");
// //     ratingBox.style.display = "none";
// //     console.log("تم حفظ التقييم:", ratingValue);
// // }

// // function saveRating(element) {
// //     const ratingValue = element.value;
// //     localStorage.setItem("rating", ratingValue);
// // }

// // document.getElementById('facebook-link').addEventListener('click', function() {
// //     window.open('https://www.facebook.com/', '_blank');
// // });
// // document.getElementById('twitter-link').addEventListener('click', function() {
// //     window.open('https://twitter.com/', '_blank');
// // });
// // document.getElementById('email-link').addEventListener('click', function() {
// //     window.open('https://gmail.com', '_blank');
// // });
// // document.getElementById('whatsapp-link').addEventListener('click', function() {
// //     window.open('https://whatsapp.com', '_blank');
// // });
// // document.getElementById('telegram-link').addEventListener('click', function() {
// //     window.open('https://web.telegram.org/a/', '_blank');
// // });
// // //2
// // document.addEventListener("DOMContentLoaded", function() {
// //     const viewBtn = document.querySelector(".view-modal");
// //     const popup = document.querySelector(".popup");
// //     const close = popup.querySelector(".close");
// //     const field = popup.querySelector(".field");
// //     const input = field.querySelector("input");
// //     const copy = field.querySelector("button");
  
// //     viewBtn.addEventListener("click", function() {
// //       popup.classList.toggle("show");
// //     });
  
// //     close.addEventListener("click", function() {
// //       viewBtn.click();
// //     });
  
// //     copy.addEventListener("click", function() {
// //       input.select();
// //       document.execCommand("copy");
// //       this.innerText = "Copied!";
// //       setTimeout(() => {
// //         this.innerText = "Copy";
// //       }, 2000);
// //     });
// //   });
  
// //explore
//   document.addEventListener("DOMContentLoaded", function() {
//     var exploreLink = document.getElementById("explore-link");
//     var exploreDropdown = document.getElementById("explore-dropdown");

//     exploreLink.addEventListener("mouseenter", function() {
//         exploreDropdown.style.display = "block";
//     });
//     exploreDropdown.addEventListener("mouseleave", function() {
//         exploreDropdown.style.display = "none";
//     });
//     document.addEventListener("click", function() {
//         exploreDropdown.style.display = "none";
//     });
//     exploreDropdown.addEventListener("click", function(event) {
//         event.stopPropagation();
//     });
// });
// //contact
// document.addEventListener("DOMContentLoaded", function() {
//     var exploreLink = document.getElementById("contact-link");
//     var exploreDropdown = document.getElementById("dropdown");

//     exploreLink.addEventListener("mouseenter", function() {
//         exploreDropdown.style.display = "block";
//     });
//     exploreDropdown.addEventListener("mouseleave", function() {
//         exploreDropdown.style.display = "none";
//     });
//     document.addEventListener("click", function() {
//         exploreDropdown.style.display = "none";
//     });
//     exploreDropdown.addEventListener("click", function(event) {
//         event.stopPropagation();
//     });
// });

// const baseUrl = "http://localhost:4000/api/user/";
const baseUrl = "https://finsh-pro.onrender.com/api/user/";

checkId();
getUserDetails();

function checkId() {
    if (!localStorage.getItem("id")) {
        window.location.href = "login.html";
    }
}

function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu");
}

//discard
document.getElementById('discardButton').addEventListener('click', function () {
    const inputsToClear = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="url"]');

    inputsToClear.forEach(function (input) {
        input.value = '';
    });
});

//password
function generateRandomPassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function showPasswordChangeBox() {
    document.getElementById("passwordChangeBox").style.display = "block";
}

function closePasswordChangeBox() {
    document.getElementById("passwordChangeBox").style.display = "none";
}

function checkPasswordLength() {
    var newPasswordInput = document.getElementById("newPasswordInput");
    var passwordLengthError = document.getElementById("passwordLengthError");
    if (newPasswordInput.value.length < 8) {
        passwordLengthError.style.display = "block";
    } else {
        passwordLengthError.style.display = "none";
    }
}

function changePassword() {
    var currentPassword = document.getElementById("currentPasswordInput").value;
    var newPassword = document.getElementById("newPasswordInput").value;

    if (currentPassword === "") {
        alert("Please enter your current password.");
        return;
    }
}

// update image , username &email in dropdown for profile
function updateUserDetails() {
    var userName = document.getElementById("user-name-input").value;
    var userEmail = document.getElementById("user-email-input").value;
    var userImage = document.getElementById("user-image-input").value;

    // Check if all fields are filled
    if (userName && userEmail && userImage) {
        // Update user details
        document.getElementById("user-name").innerText = userName;
        document.getElementById("user-email").innerText = userEmail;
        document.getElementById("user-image").src = userImage;

        // Show the submenu
        document.getElementById("submenu").style.display = "block";

        // Hide the input fields after updating
        document.getElementById("user-name-input").style.display = "none";
        document.getElementById("user-email-input").style.display = "none";
        document.getElementById("user-image-input").style.display = "none";

        // Show the sub-menu
        document.querySelector(".sub-menu").style.display = "block";
    } else {
        // Hide the submenu if any field is empty
        document.getElementById("submenu").style.display = "none";
        // Hide the sub-menu
        document.querySelector(".sub-menu").style.display = "none";
    }
}

function saveChanges() {
    // Implement your logic to save changes here
    alert("Changes have been saved.");
}

// Add an event listener to the "Save changes" button
document.getElementById("saveButton").addEventListener("click", function () {
    saveChanges();
});
document.getElementById("signOutButton").addEventListener("click", function () {
    // Perform sign out action here
    alert("You have been signed out!");
    // You can redirect the user to the logout page or perform any other necessary actions here
});
// الصوره
// التحقق مما إذا كان هناك صورة مخزنة مسبقًا في local storage
const storedProfileImage = localStorage.getItem('profileImage');
if (storedProfileImage) {
    // تحديث عنصر الصورة في صفحة security
    document.querySelector('.rounded-circle').src = storedProfileImage;
}
// 
document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action of the link
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// إضافة مسمعلة أخرى لإخفاء القائمة المنسدلة إذا تم النقر على أي مكان آخر في الصفحة
document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('dropdown');
    if (!event.target.matches('#contact-link')) {
        dropdown.style.display = 'none';
    }
});
//
////
/////
// share
function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
}

document.getElementById('discardButton').addEventListener('click', function () {
    // قم بتحديد العناصر التي تحتوي على البيانات التي ترغب في مسحها
    const inputsToClear = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="url"]');

    // قم بمسح القيم المدخلة في العناصر
    inputsToClear.forEach(function (input) {
        input.value = '';
    });
});
// function updateUserDetails() {
// var userName = document.getElementById("user-name-input").value;
// var userEmail = document.getElementById("user-email-input").value;
// var userImage = document.getElementById("user-image-input").value;

// // Check if all fields are filled
// if (userName && userEmail && userImage) {
// // Update user details
// document.getElementById("user-name").innerText = userName;
// document.getElementById("user-email").innerText = userEmail;
// document.getElementById("user-image").src = userImage;

// // Show the submenu
// document.getElementById("submenu").style.display = "block";

// // Hide the input fields after updating
// document.getElementById("user-name-input").style.display = "none";
// document.getElementById("user-email-input").style.display = "none";
// document.getElementById("user-image-input").style.display = "none";

// // Show the sub-menu
// document.querySelector(".sub-menu").style.display = "block";
// } else {
// // Hide the submenu if any field is empty
// document.getElementById("submenu").style.display = "none";
// // Hide the sub-menu
// document.querySelector(".sub-menu").style.display = "none";
// }
// }
document.getElementById("signOutButton").addEventListener("click", function () {
    // Perform sign out action here
    alert("You have been signed out!");
    // You can redirect the user to the logout page or perform any other necessary actions here
});

function discardChanges() {
    // Implement your logic to revert changes here
    alert("Changes have been discarded.");
}

// Add an event listener to the "Discard" button
document.getElementById("discardButton").addEventListener("click", function () {
    discardChanges();
});

// Add event listeners
document.getElementById("saveButton").addEventListener("click", functions.saveChanges);

if (!window.location.href.includes("person.html")) {
    document.getElementById("generalButton").addEventListener("click", function () {
        functions.goToPage('person.html');
    });
} else {
    document.getElementById("generalButton").addEventListener("click", function () {
        console.log("Staying on the current page");
    });
}

// الزرار
if (!window.location.href.includes("person.html")) {
    document.getElementById("generalButton").addEventListener("click", function () {
        goToPage('person.html');
    });
} else {
    document.getElementById("generalButton").addEventListener("click", function () {
        console.log("Staying on the current page");
    });
}

function goToPage(page) {
    window.location.href = page;
}

// document.getElementById('uploadButton').addEventListener('click', function() {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.setAttribute('accept', 'image/*');
//     input.setAttribute('capture', 'gallery');

//     input.addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 // Display preview of the selected image
//                 document.querySelector('.card img').src = e.target.result;

//                 // Update the user's profile image
//                 updateUserProfileImage(e.target.result, file);
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     input.click();
// });

// Function to update the user's profile image
function updateUserProfileImage(imageData, imageFile) {
    // Update the src attribute of the user's profile image
    document.getElementById('user-image').src = imageData;

    // Send the image data to the server
    updateProfileImage(imageFile);
}

// Function to send image data to the server and update the profile
function updateProfileImage(imageFile) {
    // Create FormData object to send file data
    const formData = new FormData();
    formData.append('profileImage', imageFile);

    // Send AJAX request to the server
    fetch('https://your-server-url/update-profile-image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server
        console.log('Profile image updated successfully:', data);
        // Optionally, you can update the user's profile image displayed on the page
    })
    .catch(error => {
        console.error('Error updating profile image:', error);
    });
}

