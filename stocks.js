Office.initialize = function (reason) {
    // might need to record somewhere if we haven't loaded it
    
    
    $(document).ready(function(){
        
        document.body.innerHTML = "inside";
        function onDocumentSelectionChanged(eventArgs){
            document.body.innerHTML = "Hello WOrld!";
        }
        
        ran0d = 7;
        Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onDocumentSelectionChanged);
        
        
        
    });
}

