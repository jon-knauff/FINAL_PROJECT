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
document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => document.getElementById('overlay').style.opacity = 1, 10);
});

document.getElementById('closebtn').addEventListener('click', function() {
    closeSidebarAndOverlay();
});

document.getElementById('overlay').addEventListener('click', function() {
    closeSidebarAndOverlay();
});

function closeSidebarAndOverlay() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').style.opacity = 0;
    setTimeout(() => document.getElementById('overlay').style.display = 'none', 300); // Match transition time
}

document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // Show the first slide initially
    setInterval(nextSlide, 7000); // Change slide every 7 seconds (should match the duration of the animation)
});

