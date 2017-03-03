# Togglelist

## Toggle items with number

This is a little script using HTML5 data attributes to make multiple toggle lists and give them different numbers of maximum visible items. Set how many items you want each list to show in the HTML, and the script figures out how many should be hidden, hides them, and makes a button with the number of hidden items.

## Example

```
<div
  class="togglelist"
  data-max-visible-items="3">

  <div class="list">

    <div class="list-item">
      List item 1
    </div>

    <div class="list-item">
      List item 2
    </div>

    <div class="list-item">
      List item 3
    </div>

    <div class="list-item">
      List item 4
    </div>

    <div class="list-item">
      List item 5
    </div>

    <div class="list-item">
      List item 6
    </div>

    <div class="list-item">
      List item 7
    </div>

    <div class="list-item">
      List item 8
    </div>

    <div class="list-item">
      List item 9
    </div>

    <div class="list-item">
      List item 10
    </div>

  </div>

  <button class="toggle">
    <span>Show hidden items (<span class="number"></span>)</span>
  </button>

</div>
```

## Demo
https://karisabinemalmin.github.io/togglelist/
