console.log('connected')


const commentSystem = document.querySelector('#comment-system');
const comments = document.querySelector('.comments');


commentSystem.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit');

    const nicknameInput = document.querySelector('input[name=nickname]');
    const commentInput = document.querySelector('input[name=comment]');
    console.log(nicknameInput, commentInput);
    console.log(nicknameInput.value, commentInput.value); // input 요소의 value를 가져옴

    const nickname = nicknameInput.value;
    const comment = commentInput.value;

    // 만약 빈 문자열이 들어왔을 때 li로 추가하고 싶지 않다면
    if (nickname !== '') {
        if (comment !== '') {
            const newComment = document.createElement('li');
            newComment.innerHTML = `<strong>${nickname}</strong> - ${comment}`; //append와 동일한 기능
            comments.append(newComment)
         
               // 입력창 초기화
               nicknameInput.value = '';
               commentInput.value = '';
        }
        else { alert('댓글을 입력해주세요') }
    } else {
        alert('아이디를 입력해주세요')
    }
});

