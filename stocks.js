Office.initialize = function (reason) {
    // might need to record somewhere if we haven't loaded it
    
    
    $(document).ready(function(){
        
        $("#stopPolling").click(function(){
            document.getElementById("setTicker").innerHTML = "clicked";
            window.location.href = "https://michael-saunders.com/stocksapp/xstaging/pages/stocks.html";
        });
        
        document.getElementById("setTicker").innerHTML = "inside";
        function onDocumentSelectionChanged(eventArgs){
            document.getElementById("setTicker").innerHTML = "Hello WOrld!";
        }
        
        
        Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onDocumentSelectionChanged);
        
        
        
    });
}

