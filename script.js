
function toggleFaq(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.classList.remove('rotate');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.classList.add('rotate');
    }
}
