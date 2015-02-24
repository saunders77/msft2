Office.initialize = function (reason) {
    // might need to record somewhere if we haven't loaded it
    
    
    $(document).ready(function(){
        
        $("#stopPolling").click(function(){
            document.getElementById("setTicker").innerHTML = "clicked";
            Office.context.document.setSelectedDataAsync("Hello Worldp!",
                function (asyncResult) {
                    var error = asyncResult.error;
                    if (asyncResult.status === "failed"){
                    write(error.name + ": " + error.message);
                }
            });
        });
        
        document.getElementById("setTicker").innerHTML = "inside";
        function onDocumentSelectionChanged(eventArgs){
            document.getElementById("setTicker").innerHTML = "Hello WOrld!";
        }
        
        
        Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onDocumentSelectionChanged);
        
        
        
    });
}

