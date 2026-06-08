const heading = document.getElementById("heading");
const input = document.getElementById("inputText");
const para = document.getElementById("para");
const statusText = document.getElementById("status");
const bgSelect = document.getElementById("bgSelect");

const changeTextBtn = document.getElementById("changeTextBtn");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");

const defaultState = {
    heading: "Welcome to JavaScript DOM",
    paragraph: "This is a sample paragraph. Use buttons to hide/show me and observe DOM changes instantly.",
    bodyBackground: "radial-gradient(circle at top, #ffffff 0%, #f8f6ef 65%, #efe8d6 100%)",
    headingSize: "2em"
};

let isParagraphVisible = true;

changeTextBtn.onclick = function () {
    const message = input.value.trim();

    if (!message) {
        statusText.textContent = "Please type something first.";
        return;
    }

    heading.innerText = message;
    statusText.textContent = "Heading updated successfully.";
};

colorBtn.addEventListener("click", function () {
    document.body.style.background = "#cfe8ff";
    statusText.textContent = "Background changed to quick blue.";
});

fontBtn.onmouseover = function () {
    heading.style.fontSize = "2.5em";
    statusText.textContent = "Heading enlarged on hover.";
};

fontBtn.onmouseleave = function () {
    heading.style.fontSize = defaultState.headingSize;
};

toggleBtn.addEventListener("click", function () {
    isParagraphVisible = !isParagraphVisible;
    para.style.display = isParagraphVisible ? "block" : "none";
    statusText.textContent = isParagraphVisible ? "Paragraph is visible now." : "Paragraph is hidden now.";
});

bgSelect.onchange = function () {
    const value = bgSelect.value;

    if (value === "sky") {
        document.body.style.background = "#dceeff";
        statusText.textContent = "Theme changed to Sky Blue.";
    } else if (value === "mint") {
        document.body.style.background = "#e6f7ea";
        statusText.textContent = "Theme changed to Mint Green.";
    } else if (value === "peach") {
        document.body.style.background = "#ffe9d6";
        statusText.textContent = "Theme changed to Peach.";
    } else {
        document.body.style.background = defaultState.bodyBackground;
        statusText.textContent = "Theme reset to Default Cream.";
    }
};

resetBtn.addEventListener("click", function () {
    heading.innerText = defaultState.heading;
    para.innerText = defaultState.paragraph;
    para.style.display = "block";

    document.body.style.background = defaultState.bodyBackground;
    heading.style.fontSize = defaultState.headingSize;

    input.value = "";
    bgSelect.value = "default";
    isParagraphVisible = true;

    statusText.textContent = "Everything reset to default state.";
});
