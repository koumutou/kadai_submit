if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  
  function buildHtml({
    key,
    statusText,
    todoText,
    deadlineText,
    inchargeText,
    nextText,
    noteText
  }) {
    return `
      <tr class="listItem">
      <td class="key">${key}</td>
      <td>${statusText}</td>
      <td>${todoText}</td>
      <td>${deadlineText}</td>
      <td>${inchargeText}</td>
      <td>${nextText}</td>
      <td>${noteText}</td>
      </tr>
    `;
  }
  
  
  function init() {
    const rawData = localStorage.getItem("data");
    const data = JSON.parse(rawData);
    for (let i = 0; i < data.length; i++) {
      const html = buildHtml(data[i]);
      $("#list").append(html);
    }
  }
  
  $("#save").on("click", function(){
    const data = JSON.parse(localStorage.getItem("data"));
    const lastKey = 0 < data.length ? data[data.length - 1].key : 0;
  
    const item = {
      key: lastKey + 1,
      statusText: $("#status").val(),
      todoText: $("#todo").val(),
      deadlineText: $("#deadline").val(),
      inchargeText: $("#incharge").val(),
      nextText: $("#nextstep").val(),
      noteText: $("#note").val(),
    }  
  
    localStorage.setItem("data", JSON.stringify([
      ...data,
      item,
    ]));
  
    const html = buildHtml(item);
    $("#list").append(html);
  });
  
  $("#list").on("click", 'tr.listItem', function (e) {
    const key = $(this).find('td.key').text();
    const data = JSON.parse(localStorage.getItem('data'));
  
    $(this).remove();
  
    let updated = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.key != key) {
        updated = [
          ...updated,
          item
        ]
      }
    }
  
    localStorage.setItem('data', JSON.stringify(updated));
  });
  
  init();