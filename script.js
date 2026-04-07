const token = ";igvYx5yFD584JTn"

function connect() {
    const ws = new WebSocket("wss://ws.derivws.com/websockets/v3?app_id=1089");

    ws.onopen = () => {
        console.log("Connected to Deriv");
        ws.send(JSON.stringify({
            authorize: token
        }));
    };

    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);

        if (data.error) {
            document.getElementById("output").innerText =
                "Error: " + data.error.message;
        } else {
            document.getElementById("output").innerText =
                JSON.stringify(data, null, 2);
        }
    };

    ws.onerror = (error) => {
        document.getElementById("output").innerText =
            "Connection error. Check internet or token.";
    };
}
