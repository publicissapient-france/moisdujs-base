(function () {
    const slots = {
        1: [
            "npm: le couteau suisse d'un projet JS",
            "Gérer ses dépendances dans le code grâce à JSPM",
            "Webpack pour les packager tous, et dans le code les lier."
        ],
        2: [],
        3: [],
        4: []
    };
    const grid = document.querySelector('x-slot-grid');
    grid.onDataChanged(slots);

    document
        .querySelector('x-slot-form')
        .addEventListener('add-slot', function (event) {
            slots[event.detail.slot].push(event.detail.name);
            grid.setAttribute('data', JSON.stringify(slots));
        }, true);
})();
