document.getElementById("change_color").onclick = function () {
    if (window.getSelection() != 0) {
        // Get Selection
        sel = window.getSelection();
        if (sel.rangeCount && sel.getRangeAt) {
            range = sel.getRangeAt(0);
        }
        // Set design mode to on
        document.designMode = "on";
        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        // Colorize text
        document.execCommand("backColor", false, "fffd80");
        // Set design mode to off
        document.designMode = "off";
    }
}