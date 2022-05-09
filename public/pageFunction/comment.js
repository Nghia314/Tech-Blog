async function commentPostHandler(event) {
    event.preventDefault();

    const comment_text= document.querySelector('input[name="post-comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.string({
                post_id, commentText
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.status.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = 'block';
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit',commentPostHandler);