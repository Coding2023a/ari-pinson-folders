## HTML tags for reference

1. `<!DOCTYPE>`: This declaration defines the document type and version of HTML being used.

```html
<!DOCTYPE html>
```

2. `<html>`: The root element that contains all other HTML elements on the page.

```html
<html>
   <!-- other HTML elements go here -->
</html>
```

3. `<head>`: Contains meta-information about the document, such as the title and links to external resources.

```html
<head>
   <!-- meta-information goes here -->
</head>
```

4. `<title>`: Sets the title of the web page, which is displayed in the browser's title bar or tab.

```html
<title>Page Title</title>
```

5. `<meta>`: Provides metadata about the HTML document, such as character encoding and author information.

```html
<meta charset="UTF-8">
<meta name="author" content="Your Name">
```

6. `<link>`: Used to link external resources, like CSS stylesheets, to the HTML document.

```html
<link rel="stylesheet" href="styles.css">
```

7. `<style>`: Defines inline CSS styles for specific elements on the page.

```html
<style>
   /* CSS styles go here */
</style>
```

8. `<script>`: Used to include JavaScript code in the HTML document.

```html
<script>
   // JavaScript code goes here
</script>
```

9. `<body>`: Contains the visible content of the web page, including text, images, and other elements.

```html
<body>
   <!-- page content goes here -->
</body>
```

10. `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`: Headings of decreasing importance, with `<h1>` being the most important and `<h6>` the least.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<!-- ... -->
<h6>Heading 6</h6>
```

11. `<p>`: Represents a paragraph of text.

```html
<p>This is a paragraph of text.</p>
```

12. `<a>`: Creates hyperlinks to other web pages or resources.

```html
<a href="https://example.com">Visit Example.com</a>
```

13. `<img>`: Embeds images in the web page.

```html
<img src="image.jpg" alt="Description of the image">
```

14. `<ul>`: Defines an unordered list, often used with `<li>` elements.

```html
<ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <!-- ... -->
</ul>
```

15. `<ol>`: Defines an ordered list, where list items are automatically numbered.

```html
<ol>
   <li>First item</li>
   <li>Second item</li>
   <!-- ... -->
</ol>
```

16. `<li>`: List item element, used within `<ul>` and `<ol>` to define individual list items.

```html
<ul>
   <li>Item 1</li>
   <li>Item 2</li>
</ul>
```

17. `<div>`: A generic container element often used for grouping and styling content.

```html
<div>
   <!-- content goes here -->
</div>
```

18. `<span>`: A generic inline container element for applying styles or scripting to a specific portion of text.

```html
<span style="color: red;">This is red text.</span>
```

19. `<br>`: Inserts a line break, useful for breaking text onto the next line without starting a new paragraph.

```html
<p>This is some text.<br>And this is on a new line.</p>
```

20. `<hr>`: Creates a horizontal rule or line to separate content.

```html
<hr>
```

21. `<table>`: Defines a table, which can be populated with rows and cells.

```html
<table>
   <!-- table content goes here -->
</table>
```

22. `<tr>`: Represents a table row.

```html
<tr>
   <!-- table cells go here -->
</tr>
```

23. `<th>`: Defines a table header cell.

```html
<th>Header Cell</th>
```

24. `<td>`: Represents a table data cell.

```html
<td>Data Cell</td>
```

25. `<form>`: Used to create web forms for user input.

```html
<form action="/submit" method="post">
   <!-- form elements go here -->
</form>
```

26. `<input>`: An input field within a form, used for text, checkboxes, radio buttons, etc.

```html
<input type="text" name="username">
```

27. `<button>`: A clickable button often used in forms.

```html
<button type="submit">Submit</button>
```

28. `<textarea>`: A multiline text input field within a form.

```html
<textarea rows="4" cols="50">
   Enter text here...
</textarea>
```

29. `<label>`: Describes the purpose of an input element in a form.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

30. `<select>`: Creates a dropdown list within a form.

```html
<select>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
</select>
```

31. `<option>`: Represents an option in a `<select>` dropdown.

```html
<select>
   <option value="option1">Option 1</option>
   <option value="option2">Option 2</option>
</select>
```

## Basic CSS Properties for Web Styling

1. **Size and Spacing:**
   - `width`: Controls the width of an element.
   - `height`: Controls the height of an element.
   - `margin`: Sets the outer margin of an element.
   - `padding`: Sets the inner padding of an element.

```css
.example-element {
    width: 200px;
    height: 100px;       
    margin: 10px;
    padding: 20px;
} 
```

2. **Text Styling:**
   - `font-size`: Sets the size of the text.
   - `font-family`: Defines the type of font.
   - `color`: Specifies the color of the text.

```css
.example-text {
    font-size: 16px;
    font-family: "Arial", sans-serif;
    color: #333;
}
```

3. **Layout:**
   - `display`: Defines how an element is displayed (block, inline, etc.).
   - `float`: Positions an element to the left or right within its container.
```css
.layout-container {
    display: flex;
    float: right;
}

```

4. **Positioning:**
   - `position`: Sets the positioning method (static, relative, absolute, fixed).
```css
.positioned-element {
    position: relative;
    top: 20px;
    left: 30px;
}
```

5. **Border and Box Model:**
   - `border`: Sets the border of an element.
   - `box-sizing`: Defines how the width and height of an element are calculated.
```css
.bordered-element {
    border: 1px solid #000;
    box-sizing: border-box;
}
```

6. **Background:**
   - `background-color`: Sets the background color of an element.
   - `background-image`: Sets the background image of an element.
```css
.background-element {
    background-color: #f0f0f0;
    background-image: url('background.jpg');
}
```

7. **Text Alignment:**
   - `text-align`: Aligns text within its container.
```css
.aligned-text {
    text-align: center;
}
```

8. **List Styling:**
   - `list-style-type`: Sets the style of list items.
```css
.styled-list {
    list-style-type: square;
}
```

9. **Link Styling:**
   - `text-decoration`: Removes underlines from links (commonly set to `none`).
   - `hover`: Changes the style when the mouse hovers over a link.
```css
.styled-link {
    text-decoration: none;
}
.styled-link:hover {
    color: #FF5733; /* Example color change on hover */
}
```

10. **Visibility:**
    - `display: none`: Hides an element.
```css
.hidden-element {
    display: none;
}
```
## Basic terminal (ubuntu) commands
- **pwd**
  - *stands for:* print working directory
  - *means:* current location in Ubuntu

- **ls**
  - *stands for:* list
  - *means:* print all the folders and files in this directory 

- **clear**
  - *means:* clear screen

- **cd**
  - *means:* change directory

- **touch**
  - *means:* create a new file

- **mkdir**
  - *means:* create a new folder

- **explorer.exe**
  - *means:* open a file in the browser

- **tree**
  - *means:* shows the file structure


