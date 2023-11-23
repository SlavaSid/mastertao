export const addCommest = () => {
    const div = document.querySelector('.comment');
    const form = document.querySelector('.comments');
    const input = document.querySelector('input');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        div.innerHTML += `<p>${input.value}</p>`

    })
}