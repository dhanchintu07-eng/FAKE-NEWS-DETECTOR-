async function checkNews() {
    let text = document.getElementById("inputText").value;

    let res = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    let data = await res.json();
    document.getElementById("result").innerText = data.result;
}