function delayedMessage(message, delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message); 
        }, delay);
    });
}

console.log("Mulai");

delayedMessage("Pesan ini akan muncul setelah 2 detik", 2000)
    .then(function(message) {
        console.log(message); 
        return delayedMessage("Pesan ini akan muncul setelah 1 detik", 1000);
    })
    .then(function(message) {
        console.log(message); 
        console.log("Selesai");
    })
    .catch(function(error) {
        console.error("Terjadi kesalahan:", error);
    });
