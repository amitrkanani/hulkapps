 <!DOCTYPE html>
<html>
<title>RPPAY</title>
<head>
    <script>
        function initFreshChat() {
            window.fcWidget.setExternalId("{{$mobile}}");
            window.fcWidget.user.setFirstName("{{$name}}");
            window.fcWidget.user.setProperties({
              plan: "Estate",                 
              status: "Active"                
            });  
            window.fcWidget.init({
              token: "996d2fe9-e3fe-4a73-bb26-3c08d80c629c",
              host: "https://wchat.in.freshchat.com"
            });
        }
        function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
        function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
    </script>
</head>
<body>

</body>
</html> 