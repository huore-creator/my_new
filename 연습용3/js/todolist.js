document.addEventListener('DOMContentLoaded', function () {
  const inputButton = document.getElementById('inputButton')
  inputButton.addEventListener('click', function () {
    const newItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '20px';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.style.backgroundColor = 'whitesmoke';
    textInput.style.border = 'none';
    textInput.style.width = '200px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // 버튼에 표시될 텍스트
    deleteButton.style.marginLeft = '10px'; // 체크박스와의 간격을 위해 왼쪽 여백 설정
    deleteButton.style.padding = '5px';

    // 삭제 버튼 클릭 이벤트 리스너 추가
    deleteButton.addEventListener('click', function() {
      mainList.removeChild(newItem); // 현재 아이템을 메인 리스트에서 제거
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(textInput);
    newItem.appendChild(deleteButton); // 삭제 버튼을 목록 아이템에 추가



    // 새 항목을 메인 리스트에 추가합니다.
    const mainList = document.querySelector('.mainList');
    mainList.appendChild(newItem);

    // 추가된 항목의 순서를 관리합니다.
    const items = document.querySelectorAll('.mainList li');
    items.forEach(function (item, index) {
      item.setAttribute('data-index', index + 1);
    });

    // 텍스트 입력 필드에 포커스 주기
    textInput.focus();
  });
});