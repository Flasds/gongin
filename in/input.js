document.getElementById("noticeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var inputText = document.getElementById("noticeText").value;
    
    if (inputText.trim() !== "") {
        fetch('/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ notice: inputText })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("公告发布成功！");
                document.getElementById("noticeText").value = "";
            }
        });
    }
});
