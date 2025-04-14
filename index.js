// Array of fruit data with original URLs as specified in the assignment
let hannafruits = [
  {
    fruit: "apple",
    color: "green",
    image:
      "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=acFVqLYdwzZQ4WQRre3MUKW9PCMewLldoMVEXLyplkM=",
    descr:
      "An apple is a round, edible fruit produced by an apple tree (Malus domestica), a domesticated member of the rose family, and is one of the most widely cultivated tree fruits. Apples are known for their juicy green or red fruit and are used in various forms, including fresh eating, baking, and making juice, cider, and other products.",
  },
  {
    fruit: "pear",
    color: "green",
    image:
      "https://media.istockphoto.com/id/529401513/photo/pears.jpg?s=612x612&w=0&k=20&c=zNq9f0q1rgrPEkdYPlFRge9j_B-6kqkSqpQxbOuOocA=",
    descr:
      "Pears are fruits produced and consumed around the world, growing on a tree and harvested in late summer into mid-autumn. The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name.",
  },
  {
    fruit: "mango",
    color: "red",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPIBinNB5oWN0LzKgAKESNgrbZW5bdN9HlJ1wom0q0h4nsyNOn30-anlhMovU9Of--2o&usqp=CAU",
    descr:
      "Mangoes are tropical stone fruits, part of the drupe family, known for their sweet, juicy flesh and are native to Southeast Asia. They are a good source of vitamins A and C, and are enjoyed worldwide.",
  },
];

// Class for color blocks (buttons)
class ColorBlock {
  constructor(color) {
    this.color = color;
    this.element = this.createBlock();
  }

  createBlock() {
    // Using jQuery to create a button element
    const block = $("<button>");

    // Using jQuery to set CSS properties
    block.css({
      backgroundColor: this.color,
      width: "30px",
      height: "30px",
      margin: "5px",
      border: "none",
      cursor: "pointer",
    });

    // Using jQuery to add a data attribute
    block.attr("data-color", this.color);

    return block;
  }

  // Method to add the button to a container using jQuery
  appendTo(container) {
    $(container).append(this.element);
    return this;
  }
}

// Class for Fruit components
class Fruit {
  constructor(fruitData) {
    this.data = fruitData;
  }

  // Method to render the fruit information using jQuery
  render() {
    // Using jQuery to create and add class
    const fruitElement = $("<div>").addClass("fruit-item");

    // Using jQuery to create and set text content
    const nameElement = $("<h2>").text(this.data.fruit);

    // Using jQuery to create and set attributes
    const imageElement = $("<img>")
      .attr({
        src: this.data.image,
        alt: this.data.fruit,
      })
      .css({
        width: "50px",
        height: "auto",
        margin: "10px 0",
      });

    // Using jQuery to create and set text
    const descrElement = $("<p>").text(this.data.descr);

    // Using jQuery to append elements
    fruitElement.append(nameElement, imageElement, descrElement);

    // Using jQuery to set a data attribute
    fruitElement.attr("data-color", this.data.color);

    return fruitElement;
  }
}

// Function to generate color buttons based on unique colors in the fruits data
function generateColorButtons() {
  // Using jQuery to select the element
  const colorPanel = $("#colorPanel");

  // Extract unique colors from the fruits data
  const colors = [...new Set(hannafruits.map((fruit) => fruit.color))];

  // Create and append color blocks for each unique color
  colors.forEach((color) => {
    const colorBlock = new ColorBlock(color);
    colorBlock.appendTo(colorPanel);
  });
}

// Function to initialize the fruit display
function initFruitDisplay() {
  // Using jQuery to select the element
  const fruitDescContainer = $("#fruitDesc");

  // Using jQuery to clear any existing content
  fruitDescContainer.empty();

  // Create and render all fruits initially
  hannafruits.forEach((fruitData) => {
    const fruit = new Fruit(fruitData);
    const fruitElement = fruit.render();

    // Using jQuery to initially hide the elements
    fruitElement.hide();

    // Using jQuery to append to the container
    fruitDescContainer.append(fruitElement);
  });
}

// Function to set up event delegation for color button clicks using jQuery
function setupEventHandlers() {
  // Using jQuery for event delegation
  $("#colorPanel").on("click", "button", function () {
    // Using jQuery to get data attribute
    const selectedColor = $(this).data("color");

    // Using jQuery to modify CSS
    $("#colorPanel button").css("box-shadow", "none");
    $(this).css("box-shadow", "0 0 5px 3px rgba(0,0,0,0.3)");

    // Using jQuery to hide elements
    $(".fruit-item").hide();

    // Using jQuery to show specific elements
    $(`.fruit-item[data-color="${selectedColor}"]`).show();
  });
}

// Initialize the application when the document is ready using jQuery
$(document).ready(function () {
  // Generate color buttons
  generateColorButtons();

  // Initialize fruit display
  initFruitDisplay();

  // Set up event handlers
  setupEventHandlers();
});
