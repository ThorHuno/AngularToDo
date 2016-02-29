app.controller('todoctrl', ['$scope', 'datashare', 'storagefact', '$log', function (scope, dataserv, fact, log) {

    scope.onDragComplete = function (data, evt) {
        // log.debug("drag success, data:", data);
        log.debug(evt);
    }
    scope.onDropComplete = function (data, evt, div) {
        var objRecibido = fact.getItemById(data.id);

        switch (div) {
            case 'div1':
                objRecibido.estado = 'pendiente'
                break;
            case 'div2':
                objRecibido.estado = 'proceso'
                break;
            case 'div3':
                objRecibido.estado = 'realizado'
                break;
        }
        
        fact.updateTarea(objRecibido);
        scope.datos = fact.getArr();
    }

    scope.datos = fact.getArr();
}]);