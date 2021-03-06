app.factory('storagefact', function () {
    var factory = {};

    factory.crearBd = function (tarea) {
        localStorage.setItem('BD', tarea);
    };

    factory.verificarBd = function () {
        var bd = localStorage.getItem('BD');

        if (bd == undefined || bd == null) {
            return false;
        } else {
            return true;
        }
    };

    factory.getArr = function () {
        return JSON.parse(localStorage.getItem('BD'));
    }

    factory.getItemById = function (idTarea) {
        var bd = localStorage.getItem('BD');

        var obj = JSON.parse(bd);

        var objFiltrado = _.find(obj, function (item) {
            return item.id == idTarea;
        });

        return objFiltrado;
    }

    factory.updateTarea = function (obj) {
        var bd = localStorage.getItem('BD');

        var objGuardado = JSON.parse(bd);

        var objFiltrado = _.find(objGuardado, function (item) {
            return item.id == obj.id;
        });

        objFiltrado.estado = obj.estado;
        
        localStorage.setItem('BD', JSON.stringify(objGuardado));
    }

    return factory;
});