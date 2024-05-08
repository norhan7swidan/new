// explore
   document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.getElementById("explore-link");
    var exploreDropdown = document.getElementById("explore-dropdown");

    exploreLink.addEventListener("mouseenter", function() {
        exploreDropdown.style.display = "block";
    });
    exploreDropdown.addEventListener("mouseleave", function() {
        exploreDropdown.style.display = "none";
    });
    document.addEventListener("click", function() {
        exploreDropdown.style.display = "none";
    });
    exploreDropdown.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
//
//contact
document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.getElementById("contact-link");
    var exploreDropdown = document.getElementById("dropdown");

    exploreLink.addEventListener("mouseenter", function() {
        exploreDropdown.style.display = "block";
    });
    exploreDropdown.addEventListener("mouseleave", function() {
        exploreDropdown.style.display = "none";
    });
    document.addEventListener("click", function() {
        exploreDropdown.style.display = "none";
    });
    exploreDropdown.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
//
    function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
}
    function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
}
//
//share
document.getElementById('facebook-link').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
});
document.getElementById('twitter-link').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
});
document.getElementById('email-link').addEventListener('click', function() {
    window.open('https://gmail.com', '_blank');
});
document.getElementById('whatsapp-link').addEventListener('click', function() {
    window.open('https://whatsapp.com', '_blank');
});
document.getElementById('telegram-link').addEventListener('click', function() {
    window.open('https://web.telegram.org/a/', '_blank');
});
//2
document.addEventListener("DOMContentLoaded", function() {
    const viewBtn = document.querySelector(".view-modal");
    const popup = document.querySelector(".popup");
    const close = popup.querySelector(".close");
    const field = popup.querySelector(".field");
    const input = field.querySelector("input");
    const copy = field.querySelector("button");
  
    viewBtn.addEventListener("click", function() {
      popup.classList.toggle("show");
    });
  
    close.addEventListener("click", function() {
      viewBtn.click();
    });
  
    copy.addEventListener("click", function() {
      input.select();
      document.execCommand("copy");
      this.innerText = "Copied!";
      setTimeout(() => {
        this.innerText = "Copy";
      }, 2000);
    });
  });
  // rate
  var ratingValue; 
  function openRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "block";
  }
  function closeRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "none";
      console.log("تم حفظ التقييم:", ratingValue);
  }
function saveRating(element) {
  var ratingValue = element.value;
  localStorage.setItem("rating", ratingValue);
}
getUserDetails();

function toggleMenu() {
    const submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // إضافة/إزالة فئة .open-menu
}

document.getElementById("discardButton").addEventListener("click", function () {
    // قم بتحديد العناصر التي تحتوي على البيانات التي ترغب في مسحها
    const inputsToClear = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="number"], input[type="url"]',
    );

    // قم بمسح القيم المدخلة في العناصر
    inputsToClear.forEach(function (input) {
        input.value = "";
    });
});

// get user by details
function getUserDetails() {
    let userId = getUserId();

    if (!userId) {
        alert("User not found. Please sign in again.");
        window.location.href = "login.html";
        return;
    }
    const url = "https://finsh-pro.onrender.com/api/user/" + userId;
    console.log("Fetching user details from:", url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const user = data.data.users;
        console.log("User details fetched successfully:", user);
        document.getElementById("user-name").innerText = user.fullname;
        document.getElementById("user-email").innerText = user.email;
        document.getElementById("user-image").src = user.avatar;
        document.getElementById("placeholder-image").src = user.avatar;

    })
    .catch((error) => {
        console.error("Error fetching user details:", error);
        alert("Error fetching user details. Please try again.");
    });
}
