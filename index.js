function handleLogin() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    if (username === 'AreebHassan' && password === 'A9580') {
        localStorage.setItem("authentication", true)
        window.location.href = "cv.html"
    }
    else {
        const errorBox = document.querySelector("#error")
        errorBox.classList.add("active")
    }
}