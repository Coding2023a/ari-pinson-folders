const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

// Load the HTML file into JSDOM
const html = fs.readFileSync("index.html", "utf-8");
const dom = new JSDOM(html);

// Extract relevant DOM elements
const document = dom.window.document;

describe("HTML Structure", () => {
  test("(number 1)The page title should contain the text 'My First Web Page'", () => {
    expect(document.title).toBe("My First Web Page");
  });

  test("(number 2)The div with the class header should contain an h1 element with the text 'Welcome to My Web Page'", () => {
    const header = document.querySelector(".header");
    const h1 = header.querySelector("h1");
    expect(h1.textContent).toBe("Welcome to My Web Page");
  });

  test("(number 3)The div with the class nav should contain three list items", () => {
    const nav = document.querySelector(".nav");
    const listItems = nav.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });

  test("(number 4)The div with the class main should contain one h2 and one p element", () => {
    const main = document.querySelector(".main");
    const h2 = main.querySelector("h2");
    const p = main.querySelector("p");
  
    expect(main).not.toBeNull(); // Check if .main exists
    expect(h2).not.toBeNull();  // Check if h2 exists
    expect(p).not.toBeNull();   // Check if p exists
  });

  test("(number 5)The div with the class lists should contain two list elements (ol and ul)", () => {
    const lists = document.querySelector(".lists");
    const ol = lists.querySelector("ol");
    const ul = lists.querySelector("ul");
  
    expect(ol).not.toBeNull(); // Check if ol exists
    expect(ul).not.toBeNull(); // Check if ul exists
  });

});
