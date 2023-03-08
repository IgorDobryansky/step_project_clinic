Завдання:

Розробити середу для створення карток-візитів до лікарів: терапевт, кардіолог, стоматолог.


**Склад групи:**

1. [Ігор Добрянський.](https://gitlab.com/ar4er)
2. [Олена Полянська.](https://gitlab.com/helenpolyanskaya)

**Завдання для студента №1:**
- _Клас [Login](https://gitlab.com/ar4er/step_project-clinic/-/tree/main/src/js/Components/Login), [Modal](https://gitlab.com/ar4er/step_project-clinic/-/blob/main/src/js/Components/Modal/Modal.js), [ModalLogin](https://gitlab.com/ar4er/step_project-clinic/-/blob/main/src/js/Components/Modal/ModalLogin.js)._
- _[Пошук по меті візиту, сортування за статусом та терміновісттю. Drag & drop карток](https://gitlab.com/ar4er/step_project-clinic/-/blob/main/src/js/draganddrop/draganddrop.js)._
**Завдання для студента №2:**

- _Клас [Visit](https://gitlab.com/ar4er/step_project-clinic/-/tree/main/src/js/Components/Visit) та всі дочірні класи._
- _Стилізація та структура елементів сайту._

Залишкові компоненти створювались парно.

[Проект](https://gitlab.com/ar4er/step_project-clinic) було розміщено на сервісі [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).

[Посилання на деплой проекту](https://ar4er.gitlab.io/step_project-clinic/)

Перелік npm команд та використаних плагінів у збірці [_webpack_](https://webpack.js.org/) можна переглянути у файлі [package.json](https://gitlab.com/ar4er/step_project-clinic/-/blob/main/package.json) у полях _scripts_ та _devDependencies_ відповідно.

З налаштуваннями [_webpack_](https://webpack.js.org/)-збірки можна ознайомитись у файлі [webpack.config.js](https://gitlab.com/ar4er/step_project-clinic/-/blob/main/webpack.config.js). Збірка не є унікальною, але написана повністтю власноруч з використанням офіційної документації.

Для пошуку, фільтрації та drag & drop'у була використана бібліотека [_Muuri_](https://docs.muuri.dev/).
