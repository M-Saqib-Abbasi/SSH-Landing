
$(document).ready(function () {
    // Disable right click
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
        alert("Right click is disabled on this page!");
    });

    // Disable specific key combinations
    $(document).on("keydown", function (e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+Shift+C
        if (
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
            (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Disable text selection
    $(document).on("selectstart", function (e) {
        e.preventDefault();
        return false;
    });

    // Disable copy, cut, paste
    $(document).on("copy cut paste", function (e) {
        e.preventDefault();
        alert("Copying or pasting is disabled!");
    });

    // Attempt to detect DevTools open
    function detectDevTools() {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = "<h2 style='text-align:center; color:red; margin-top:20%;'>Developer tools are not allowed.</h2>";
        }
    }

    // Check for DevTools every 1s
    setInterval(detectDevTools, 1000);

    // Console detection trick
    (function() {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                alert('Developer tools are not allowed!');
                document.body.innerHTML = "<h2 style='text-align:center; color:red; margin-top:20%;'>Access denied.</h2>";
            }
        });
        console.log('%c', element);
    })();
});

