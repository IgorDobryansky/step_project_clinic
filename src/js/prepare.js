// Classes

// Class Button - создает кнопку "Войти". После нажатия открывается модальное окно: ввод почты -> ввод пароля -> кнопка Войти. Ниже "или Зарегистрироваться".
// Потом!!! Отправляем запрос с проверкой почты и пароля. Если зарегистрирован - вернет "токен". Если нет, вывести текст "Проверьте введённые данные или зарегистрируйтесь по ссылке ниже".
// Если авторизован (пришел "токен"), записать "токен" в локалсторедж для последующей работы со всеми запросами на АПИ.
// Кнопку "Войти" заменить на кнопку "Создать визит". Добавить кнопку "Выйти".
// По нажатию на кнопку "Выйти": удалить "токен" и вернуть кнопку "Войти". Кнопку "Создать визит" - удалить. Поле с визитами очистить.

// Class Visit. Родительский класс карточек. Имеет стандартные поля:
// цель визита
// краткое описание визита
// выпадающее поле - срочность (обычная, приоритетная, неотложная)
// ФИО
//      Class VisitDentist:
//      дата последнего посещения

//      VisitCardiologist:
//      обычное давление
//      индекс массы тела
//      перенесенные заболевания сердечно-сосудистой системы
//      возраст

//     VisitTherapist:
//      возраст

// Классы узких специалистов будут расширены за счет класса Visit.
// Класс создает карточку визита.
// Внутри каждого класса врача нужно прописать в конструкторе структуру HTML. В методах - логику.
// Логика:
// Метод "Удалить карточку"
// Метод "Редактировать карточку"
// Метод "Сохранить изменения"
// Отменить изменения и оставить старую версию карточки.
// Метод "Отметить визит как выполненый" ??? Подумать над реализацией!!! "Визит выполнен: "Крестик" и "Галочка"".
// По умолчанию "Галочка" полупрозрачная. После нажатия на "Галочку" она становится непрозрачной, а "Крестик" - полупрозрачный.
// ДрагЕндДроп ???

// Структура класса Visit:

//export default
// class Visit {
//   constructor(des,) {

// export default class Visit {
//   constructor() {

//     this._visit = document.createElement("div");
//     this._visit.className = "visit-card";
//     this.visitPurpose = document.createElement("p");
//     this.visitPurpose.innerText = "Болить голова";
//     this.visitDescription = document.createElement("p");
//     this.visitDescription.innerText = "Дуже сильно болить голова";

//     this._elVisitDescrP = document.createElement("p");
//     this.visit2Description = "Babah"

//     this.isUrgency = document.createElement("select");
//     this.urgencyNormal = document.createElement("option");
//     this.urgencyNormal.innerText = "Середня";
//     this.urgencyLow = document.createElement("option");
//     this.urgencyLow.innerText = "Низька";
//     this.urgencyHight = document.createElement("option");
//     this.urgencyHight.innerText = "Висока";
//     this.isUrgency.append(
//       this.urgencyLow,
//       this.urgencyNormal,
//       this.urgencyHight
//     );

//     this.fullName = document.createElement("p");
//     this.fullName.innerText = "Ігор Добрянський"
//     this._visit.append(
//       this.visitPurpose,
//       this.visitDescription,
//       this.isUrgency,
//       this.fullName
//     );
//   }

//   render() {
//     return this._visit;

//   }
// }



class Modal extends Visit2 {
  constructor(doctor, fullName){
    s
  }
}








