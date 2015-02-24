Office.initialize = function (reason) {
    // might need to record somewhere if we haven't loaded it
        document.body.innerHTML = "outside!";
    
    

        function onDocumentSelectionChanged(eventArgs){
            document.body.innerHTML = "Hello WOrld!";
        }
        
        
        Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onDocumentSelectionChanged);
        
        
        
    
}

