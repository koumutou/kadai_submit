
/* 入力項目をテーブルへ転記 */

$("#save").on("click", function(){
    let statusselect = document.getElementById("status");
    let statusoption = statusselect.selectedIndex;
    let statustext = statusselect.options[statusoption].text;
    localStorage.setItem("status",statustext);

    let todotext = $("#todo").val();
    localStorage.setItem("todo",todotext);

    let deadlinetext = document.getElementById("deadline").value;
    localStorage.setItem("deadline",deadlinetext);

    let inchargetext = $("#incharge").val();
    localStorage.setItem("incharge",inchargetext);

    let nextselect = document.getElementById("nextstep");
    let nextoption = nextselect.selectedIndex;
    let nexttext = nextselect.options[nextoption].text;
    localStorage.setItem("nextstep",nexttext);

    let notetext = $("#note").val();
    localStorage.setItem("note",notetext);

    // let deleteButton = document.createElement('button');
    // deleteButton.innerHTML = 'Delete';
    // $("#list").append(deleteButton);
    // deleteButton.addEventListener('click', evt => {
    //     evt.preventDefault();
    //     deleteTasks(deleteButton);
    // });

    const html = `
        <tr>
            <td>${statustext}</td>
            <td>${todotext}</td>
            <td>${deadlinetext}</td>
            <td>${inchargetext}</td>
            <td>${nexttext}</td>
            <td>${notetext}</td>
        </tr>
        `;
    $("#list").append(html);

    
 
    
});

//*　各項目を削除する */ 
// $("#delete").on("click",function(){
//     localStorage.clear();
//     $("#list").empty();
// });


/*更新時のデータ呼び出し→keyが単品でしか作れず*/ 

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); 
    let value = localStorage.getItem(key);
    const html = `
            <td>${value}</td>
        `;
    $("#list").append(html);
};


/*削除データが一括選択に*/ 
$("#list").on("click", function () {
    const key2 = $(this).children('td').text();
    localStorage.removeItem(key2);
    $(this).empty();
      });
