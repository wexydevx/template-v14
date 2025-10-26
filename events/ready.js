module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} aktif ve hazır!`);
    }
};
//by wexydev.
