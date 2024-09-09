document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closebtn');

    function openSidebar() {
        sidebar.style.width = '250px';
    }

    function closeSidebar() {
        sidebar.style.width = '0';
    }

    // Open the sidebar when the burger icon is clicked
    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating
        openSidebar();
    });

    // Close the sidebar when the close button is clicked
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating
        closeSidebar();
    });

    // Close the sidebar if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== burgerMenu) {
            closeSidebar();
        }
    });
});