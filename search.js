<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Example</title>
    <style>
        #items-list {
            list-style-type: none;
            padding: 0;
        }
        #items-list li {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>Search Functionality</h1>
    <label for="search-input">Search for items:</label>
    <input type="text" id="search-input" placeholder="Search for items..." onkeyup="searchItems()">
    
    <ul id="items-list">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
        <li>Grapes</li>
        <li>Strawberry</li>
        <li>Blueberry</li>
        <li>Mango</li>
        <li>Pineapple</li>
    </ul>

    <script>
        function searchItems() {
            const input = document.getElementById("search-input").value.toLowerCase();
            const items = document.getElementById("items-list").getElementsByTagName("li");
            
            // Loop through all items and hide those that don't match the search query
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (input === "" || item.textContent.toLowerCase().includes(input)) {
                    item.style.display = "block";  // Show item
                } else {
                    item.style.display = "none";  // Hide item
                }
            }
        }
    </script>
</body>
</html>
