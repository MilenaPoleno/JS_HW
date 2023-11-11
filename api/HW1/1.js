const text = document.querySelector('.orientation');
screen.orientation.addEventListener('change', () => {
    if (screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary'){
        text.textContent = 'Теперь экран в портретной ориентации :)'
    } else{
        text.textContent = 'Теперь экран в ландшафтной ориентации :)'
    }
})