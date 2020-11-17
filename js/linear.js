let sensor = new Accelerometer();
sensor.start();
// console.log("test1");
sensor.onreading = () => {
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
    // alert("test");
    // document.getElementById("x").textContent="Acceleration along X-axis: " + sensor.x;
    // document.getElementById("y").textContent="Acceleration along X-axis: " + sensor.y;
    document.getElementById("z").textContent="Acceleration along X-axis: " + sensor.z;
}

sensor.onerror = event => console.log(event.error.name, event.error.message);
