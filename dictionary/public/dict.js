$(document).ready(function () {
  $('#dic-form').submit(search);
});

function search(e) {
  e.preventDefault();
  const query = $('#search-input').val();
  $('#result').empty();
  $.get('/search?word=' + query, function (data) {
    $.each(data, function (index, item) {
      $('#result').append(`
        <div>
          <strong>${item.word} </strong><em>(${item.wordtype})</em>:
          <p>${item.definition}</p>
        </div>`);
    });
  }).fail(function (xhr) {
    if (xhr.status == 404) {
      $('#result').html('<div class="alert alert-info">Word not found</div>');
    }
  });
}
