
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("23");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm_password").value;
        let terms = document.getElementById("terms").checked;

        let message = "";

        if (username.length < 3) {
            message += "Username must be at least 3 characters long.\n";
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message += "Please enter a valid email address.\n";
        }

        if (password.length < 8) {
            message += "Password must contain at least 8 characters.\n";
        }

        if (password !== confirmPassword) {
            message += "Passwords do not match.\n";
        }

        if (!terms) {
            message += "You must agree to the Terms and Conditions.\n";
        }

        if (message !== "") {
            alert(message);
            return;
        }

        alert(
            "Registration Successful!\n\n" +
            "Username: " + username +
            "\nEmail: " + email
        );

        form.reset();
    });

});

function buyProduct(productName, productPrice) {

    // Store selected product
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);

    // Redirect to purchase page
    window.location.href = "purchasebox.html";
}
window.onload = function () {

    const product = localStorage.getItem("productName");
    const price = localStorage.getItem("productPrice");

    if (product && price) {

        document.getElementById("product").textContent = product;
        document.getElementById("price").textContent = price;

    }
};

window.onload = function () {

    const product = localStorage.getItem("productName");
    const price = localStorage.getItem("productPrice");

    if (product && price) {

        document.getElementById("product").textContent = product;
        document.getElementById("price").textContent = price;

    }
};

function buyProduct(productName, productPrice) {

    alert(productName + " added for purchase!");

    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);

    window.location.href = "purchasebox.html";
}

function buyProduct(name, price, description) {

    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productDescription", description);

    window.location.href = "purchasebox.html";
}

document.addEventListener("DOMContentLoaded", function () {

    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");

    if (productName) {
        productName.textContent = localStorage.getItem("productName");
    }

    if (productPrice) {
        productPrice.textContent =
            "Price: " + localStorage.getItem("productPrice");
    }

    if (productDescription) {
        productDescription.textContent =
            localStorage.getItem("productDescription");
    }

});

document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");
    let total = 0;

    if (cartItems) {

        cart.forEach(function(item) {

            cartItems.innerHTML +=
                "<p>" +
                item.name +
                " - R" +
                item.price +
                "</p>";

            total += item.price;
        });

        document.getElementById("total").innerHTML =
            "Total Amount: R" + total;
    }
});

function completePurchase() {

    let payment =
        document.getElementById("paymentMethod").value;

    if (payment === "") {
        alert("Please select a payment method.");
        return;
    }

    alert(
        "Purchase Successful!\nPayment Method: " +
        payment
    );

    localStorage.removeItem("cart");
}
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let subject = document.getElementById("subject").value.trim();
            let message = document.getElementById("message").value.trim();

            let feedback = document.getElementById("feedback");

            // Validation
            if (
                name === "" ||
                phone === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                feedback.innerHTML =
                    "❌ Please complete all fields.";

                feedback.style.color = "red";

                return;
            }

            // Email Validation
            let emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                feedback.innerHTML =
                    "❌ Please enter a valid email address.";

                feedback.style.color = "red";

                return;
            }

            // Phone Validation
            let phonePattern =
                /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {

                feedback.innerHTML =
                    "❌ Phone number must contain 10 digits.";

                feedback.style.color = "red";

                return;
            }

            // Success Message
            feedback.innerHTML =
                "✅ Thank you " +
                name +
                "! Your message has been sent successfully.";

            feedback.style.color = "green";

            // Save messages locally
            let contacts =
                JSON.parse(localStorage.getItem("contacts")) || [];

            contacts.push({
                name,
                phone,
                email,
                subject,
                message,
                date: new Date().toLocaleString()
            });

            localStorage.setItem(
                "contacts",
                JSON.stringify(contacts)
            );

            form.reset();
        });

    }

});

const messageBox = document.getElementById("message");

if(messageBox){

    messageBox.addEventListener("input", function(){

        document.getElementById("counter").textContent =
        this.value.length;

    });

}
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("23");

    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            alert("Sign Up Successful!");

            window.location.href = "about.html";

        });

    }

});

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("23");

    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            alert("Sign Up Successful!");

            window.location.href = "about.html";

        });

    }

});