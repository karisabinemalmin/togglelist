$( document ).ready(function() {

    const listItem = document.getElementsByClassName("togglelist");

    $('.toggle').on('click', function() {
      $(this).prev('.list').find('.list-item--hide').toggleClass('list-item--hidden');
    });

    for (var i = 0; i < listItem.length; i++) {
      const maxVisibleItems = $(listItem[i]).data('max-visible-items');
      const totalItems = $(listItem[i]).find(".list-item").length;
      const hiddenItems = totalItems - maxVisibleItems; // number of hidden items
      const toggle = $(listItem[i]).find('.toggle'); // the toggle button

      $(listItem[i]).find('.number').text(hiddenItems); // show number of hidden items

      if (totalItems > maxVisibleItems) { // if total number of items is less than max visible items
        const toggleItems = $(listItem[i]).find('.list-item:nth-last-child(-n+' + hiddenItems + ')'); // the hidden items
        toggle.css('display', 'block'); // show toggle button
        toggleItems.addClass('list-item--hide');
        toggleItems.addClass('list-item--hidden');
      } else {
        toggle.css('display', 'none'); // hide toggle button if totalItems is not larger than maxVisibleItems
      }
    }

});
