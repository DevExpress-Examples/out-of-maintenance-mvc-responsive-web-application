(function () {
    function adjustMapContainer() {
        var container = document.getElementById('mapContainer');
        // calculate available page content height
        var footerWrapperHeight = document.getElementById('footerWrapper').offsetHeight;
        var height = window.innerHeight - footerWrapperHeight - headerPanel.GetHeight();
        // correct height of map container
        container.height = height;
    }

    function onMapInit(s, e) {
        AddAdjustmentDelegate(adjustMapContainer); // this delegate method is called when available page content area resized (browser resized, expanded/collapsed left area, etc)
    }

    window.onMapInit = onMapInit;
})();