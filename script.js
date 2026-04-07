const token = "PASTE_YOUR_API_TOKEN_HERE";

function connect() {
    const ws = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=1089");

    ws.onopen = () => {
        ws.send(JSON.stringify({
            authorize: token
        }));
    };

    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        document.getElementById("output").innerText =
            JSON.stringify(data, null, 2);
    };
}
