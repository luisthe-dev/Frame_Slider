# Frame_Slider

A library to create pages that slide on button clicks.

## Installation

No special installation required

## Languages

HTML, CSS, JavaScript (jQuery)

## Usage

To use, create a div tag with the class-name **.slide-container**

```html
    <div class="slide-container"></div>
```

All divs containing elements for the slide pages should be put between the above div tag and must have the **attribute slide equating to a valid number**

```html
    <div class="slide-container">
        <div slide="1"></div>
        <div slide="2"></div>
    </div>
```

The starting slide can be set by adding a **current-slide** attribute to the **.slide-container**, if not set, it is automatically set as 1

```html
    <div class="slide-container" current-slide="2">
        <div slide="1"></div>
        <div slide="2"></div>
    </div>
```

Next and Previous buttons must be placed directly inside div tag to take effect, and must have IDs of Next and Previous respectively

```html
    <div class="slide-container" current-slide="2">
        <div slide="1">
            <button id="Previous"> Previous </button> <button id="Next"> Next </button>
        </div>
        <div slide="2">
            <button id="Previous"> Previous </button> <button id="Next"> Next </button>
        </div>
    </div>
```

**Previous buttons are hidden on the first slide (on mobile devices) and on even-numbered slides (on desktop devices)**

**Next buttons are hidden on the last slide (on mobile devices) and on odd-numbered slides (on desktop devices)**

### Editting Preset Scripts And Styles

Caution : Script is fragile and be handled with care.
Editting should be avoided until extremely necessary.

Stylesheet can be editted to effect on button display incase of change or need.

### Contributions

Pull requests are appreciated, and will be reviewed. If everything works well, it will be accepted and merged.
