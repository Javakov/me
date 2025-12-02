const details = document.querySelectorAll('details');

details.forEach((item) => {
    const summary = item.querySelector('summary');
    if (!summary) {
        return;
    }

    summary.addEventListener('click', (event) => {
        event.preventDefault();

        const isCurrentlyOpen = item.hasAttribute('open');
        const openItem = document.querySelector('details[open]');

        if (openItem && openItem !== item) {
            openItem.removeAttribute('open');
        }

        if (isCurrentlyOpen) {
            item.removeAttribute('open');
        } else {
            item.setAttribute('open', '');
        }
    });
});
