document.addEventListener("DOMContentLoaded", function () {
    // Get all "Order Now" buttons
    const orderButtons = document.querySelectorAll(".order-now-btn");

    // Add click event listener to each button
    orderButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the parent product item
            const productItem = button.closest(".product-item");

            // Extract product details from data attributes
            const productName = productItem.querySelector(".title").getAttribute("data-name");
            const productPrice = productItem.querySelector(".new-price").getAttribute("data-price");
            const productImage = productItem.querySelector("img").getAttribute("data-image");

            // Construct the WhatsApp message with the image URL as a clickable link
            const message = `Hello, I would like to order the following product:\n\n*Product Name:* ${productName}\n*Price:* ₵${productPrice}\n*Image:* https://github.com/yello-lab/lawgeescloset/tree/main/${productImage}`;

            // Encode the message for the URL
            const encodedMessage = encodeURIComponent(message);

            // Open WhatsApp with the pre-filled message
            const whatsappUrl = `https://wa.me/+233549031201?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
        });
    });
});