// src/index.js

// Функция для создания модального окна
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;

    const modalText = document.createElement('p');
    modalText.textContent = content;

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}

// Функция для обработки клика на ссылку "GitHub"
function handleProjectClick(event) {
    event.preventDefault();
    const projectTitle = event.target.closest('.projects__item').querySelector('h3').textContent;
    const projectDescription = event.target.closest('.projects__item').querySelector('p').textContent;
    createModal(projectTitle, projectDescription);
}

// Добавляем обработчик событий на все ссылки "GitHub"
document.querySelectorAll('.projects__item a').forEach(link => {
    link.addEventListener('click', handleProjectClick);
});