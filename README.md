# Toggle items with number

A little script using HTML5 data attributes. Set how many items you want each list to show, and the script figures out how many should be hidden, hides them, and makes a button with the number of hidden items.

Set data attribute:
```
<div
  class="toggleable-list"
  data-max-visible-items="5">
```


## Example

A list with five items, but only three are visible. The last two will appear when we click the toggle button.

```
<div
  class="togglelist"
  data-max-visible-items="2">

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

  </div>

  <button class="toggle">
    <span>Show hidden items (<span class="number"></span>)</span>
  </button>

</div>
```


## What if maximum is larger than total items?

If a list has three items and a data-max-visible-items of 5, all items will be visible, and the toggle button will be hidden.

## Demo
https://karisabinemalmin.github.io/togglelist/
