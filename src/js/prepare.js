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


export default class Visit2 {

  constructor(fullName, doctor) {
    this.fullName = fullName,
    this.doctor = doctor
  }

  renderVisit(){
    this.renderVisitBase();
  }


  renderVisitBase(){
    this._visitCard = document.getElementById("visits");
    this.visitDiv = document.createElement("div");
    this.button = document.createElement("div")
    this.buttonDiv = document.createElement("button");
    this.buttonDiv2 = document.createElement("button");
    this.buttonDiv3 = document.createElement("button");
    this.logoDone = document.createElement("div")
    this.id = Math.floor(Math.random() * 10000);
    this.buttonDiv.setAttribute('data-buttonid', `${this.id}`);
    this.buttonDiv.id =  `btn`+`${this.id}`;
    this.visitAddDiv = document.createElement("div");
    this.visitAddH2 = document.createElement("h2");
    this.visitAddH2.innerText = "Додаткова інформація:";
    this.visitAddDiv.id=`${this.id}`;
    this.visitDiv.className="visitDiv";
    this.button.className="button_wrapper";
    this.buttonDiv.className = "button";
    this.buttonDiv3.className = "button3";
    this.logoDone.className = "logo_done";
    this._visitCard.append(this.visitDiv);
    this.visitDiv.append(this._elFullName);
    this.visitDiv.append(this._elDoctor);  
    this.visitDiv.append(this.button);  
    this.button.append(this.buttonDiv);   
    this.button.append(this.logoDone);   
    this.buttonDiv.innerHTML = "Показати більше";
    this.visitDiv.append(this.visitAddDiv);
    this.visitAddDiv.append(this.visitAddH2);

    

    let btn = document.querySelector(".button");
    let visitId = this.visitAddDiv;
    let btnDiv = this.buttonDiv;
    let visit = this;
    visitId.style.display = "none"
    this.buttonDiv.addEventListener("click", function(){
      visit.showInfo();
    })

    this.buttonDiv2.addEventListener("click", function(){
      visit.hideInfo();

    }) 

    this.buttonDiv3.addEventListener("click", function(){
      visit.hideInfo(); 
    })

  }

showInfo(){
  if (this.visitAddDiv.style.display === "none") {
    this.visitAddDiv.style.display = "block";
    this.buttonDiv.style.display = "none";
  }
}  

hideInfo(){
  if (this.visitAddDiv.style.display === "block") {
    this.visitAddDiv.style.display = "none";
    this.buttonDiv.style.display = "block";
  } 
}

 

  get fullName(){
    return this._fullName
  }

  set fullName(value) {
    if (!this._elFullName) {
      this._elFullName = document.createElement('h1');
    }
    this._elFullName.innerText = `ПІБ: ${value};`;
    this._fullName = value;
  }

  get doctor(){
    return this._doctor
  }

  set doctor(value) {
    if (!this._elDoctor) {
      this._elDoctor = document.createElement('p');
    }
    this._elDoctor.innerText = `Лікар: ${value};`;
    this._doctor = value;
  }

}



class VisitTherapist extends Visit2 {
  constructor (fullName, doctor, age) {
    super (fullName, doctor),
    this.age = age
  }

  get age(){
    return this._age
  }

  set age(value) {
    if (!this._elAge) {
      this._elAge = document.createElement('p');
    }
    this._elAge.innerText = `Вік: ${value};`;
    this._age = value;
  }

  renderVisit(){
    this.renderVisitBase();
    this.visitAddDiv.append(this._elAge); 
    this.visitAddDiv.className="visit_addinfo";
    this.buttonDiv2.innerHTML = "Приховати";
    this.visitAddDiv.append(this.buttonDiv2);
    this.buttonDiv3.innerHTML = "Редагувати";
    this.visitAddDiv.append(this.buttonDiv3)
  }

}

class VisitDentist extends Visit2 {
  constructor (fullName, doctor, lastVisit) {
    super (fullName, doctor),
    this.lastVisit = lastVisit
  }

  get lastVisit(){
    return this._lastVisit
  }

  set lastVisit(value) {
    if (!this._elLastVisit) {
      this._elLastVisit = document.createElement('p');
    }
    this._elLastVisit.innerText = `Дата останнього відвідування: ${value};`;
    this._lastVisit = value;
  }

  renderVisit(){
    this.renderVisitBase();
    this.visitAddDiv.append(this._elLastVisit);  
    this.visitAddDiv.className="visit_addinfo";
    this.buttonDiv2.innerHTML = "Приховати";
    this.visitAddDiv.append(this.buttonDiv2);
    this.buttonDiv3.innerHTML = "Редагувати";
    this.visitAddDiv.append(this.buttonDiv3)
  }
} 

class VisitCardiologist extends Visit2 {
  constructor (fullName, doctor, pressure, bodyIndex, diseases, age) {
    super (fullName, doctor),
    this.pressure = pressure,
    this.bodyIndex = bodyIndex,
    this.diseases = diseases,      
    this.age = age
  }
  
    get pressure(){
      return this._pressure
    }
  
    set pressure(value) {
      if (!this._elPressure) {
        this._elPressure = document.createElement('p');
      }
      this._elPressure.innerText = `Тиск: ${value};`;
      this._pressure = value;
    }

    get bodyIndex(){
      return this._bodyIndex
    }
  
    set bodyIndex(value) {
      if (!this._elBodyIndex) {
        this._elBodyIndex = document.createElement('p');
      }
      this._elBodyIndex.innerText = `Індекс маси тіла: ${value};`;
      this._bodyIndex = value;
    }

    get diseases(){
      return this._diseases
    }
  
    set diseases(value) {
      if (!this._elDiseases) {
        this._elDiseases = document.createElement('p');
      }
      this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${value};`;
      this._diseases = value;
    }

    get age(){
      return this._age
    }
  
    set age(value) {
      if (!this._elAge) {
        this._elAge = document.createElement('p');
      }
      this._elAge.innerText = `Вік: ${value};`;
      this._age = value;
    }

    renderVisit(){
      this.renderVisitBase();
      this.visitAddDiv.append(this._elPressure, this._elBodyIndex, this._elDiseases, this._elAge);
      this.visitAddDiv.className="visit_addinfo";
      this.buttonDiv2.innerHTML = "Приховати";
      this.visitAddDiv.append(this.buttonDiv2);
      this.buttonDiv3.innerHTML = "Редагувати";
      this.visitAddDiv.append(this.buttonDiv3) 
    } 
}
   



let polyanskaya = new VisitTherapist ("Полянська Олена Михайлівна", "Терапевт", 23);
polyanskaya.renderVisit()
// polyanskaya.renderVisitTherapist()
// polyanskaya.pushButton()

let dobryanskyi = new VisitDentist("Добрянский Ігор Батьковіч", "Стоматолог", "10.09.2022")
dobryanskyi.renderVisit() 

let nazarenko = new VisitCardiologist("Назаренко Віктор Вікторовіч", "Кардіолог", "120/80", "8,5", "Не було", 39)
nazarenko.renderVisit() 

let ivanov = new VisitDentist("Іванов Іван Івановіч", "Стоматолог", "05.12.2021")
ivanov.renderVisit() 
