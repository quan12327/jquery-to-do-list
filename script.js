$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  let addCloseBtn = () => {
    $("li").append("<span class='close'>x</span>");
  }
  addCloseBtn();

  // Xử lý sự kiện click vào nút [x]
  let delNode = () =>{
      $(".close").click(function () {
      // Xóa bỏ thẻ li là cha của nút [x] này
      $(this).parent().remove();
    });
  }
  delNode();

  // Xử lý sự kiện click vào mỗi li
  let checkNode = () =>{
    $("#to-do-list>li").click(function () {
      // Chuyển qua lại class "checked" cho li này
      $(this).toggleClass("checked");
    });
  }
  checkNode();

  // Xử lý sự kiện click vào nút [Add]
  $(".btn-add").click(function () {
    // Lấy string trong input text
    let string = $("#input").val();

    // Xác thực dữ liệu: Không được để trống input text
    const lengthOfInput = string.length;

    if(lengthOfInput < 1){
      alert("vui long khong de trong");
      return;
    }

    // Tạo thẻ "li" với text content là value
    let newLi = $("<li></li>").text(string);
    newLi.css("opacity","0.15");
    newLi.fadeTo("slow", 1);
    // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
    $("#to-do-list").prepend(newLi);

    // Reset lại value của input text là rỗng
    $("#input").val("");

    // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    addCloseBtn();

    // Xử lý sự kiện khi nhấn nút close
    delNode();

    // Xử lý sự kiện khi nhấn vào li
    checkNode();
  });
});
