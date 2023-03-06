!(function () {
  var e = {
      593: function () {},
      91: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                t.hash && (e += t.hash),
                t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e)
                  ? '"'.concat(e, '"')
                  : e)
              : e
          );
        };
      },
      941: function (e, t, i) {
        "use strict";
        e.exports = i.p + "img/clinic_logod246adac946c88922100.png";
      },
      560: function (e, t, i) {
        "use strict";
        e.exports = i.p + "img/daily-health-app (1)1ae85221a6de4854d20e.png";
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var o = (t[s] = { exports: {} });
    return e[s](o, o.exports, i), o.exports;
  }
  (i.m = e),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, { a: t }), t;
    }),
    (i.d = function (e, t) {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var t = i.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var s = t.getElementsByTagName("script");
        s.length && (e = s[s.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e + "../");
    })(),
    (i.b = document.baseURI || self.location.href),
    (function () {
      "use strict";
      var e,
        t,
        s,
        n = i(91),
        o = i.n(n),
        r = new URL(i(941), i.b),
        a = new URL(i(560), i.b);
      o()(r), o()(a);
      class d {
        constructor(e) {
          this._visit = e;
        }
        static async postVisit(e) {
          let t = await fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
              body: JSON.stringify({ ...e, status: "open" }),
            }),
            i = await t.json();
          return this.visits.push(i), console.log(d.visits), i;
        }
        static async putVisit(e) {
          let t = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${e.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
              body: JSON.stringify({ ...e }),
            }
          );
          return await t.json();
        }
        static async deleteVisit(e) {
          let t = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${e.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }
          );
          return await t.json();
        }
        static async getVisit(e) {
          let t = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${e.id}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }
          );
          return await t.json();
        }
        static async deleteAllVisit() {
          let e = await fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
            },
          });
          (await e.json()).map((e) => {
            this.deleteVisit(e.id);
          });
        }
        static async getAllVisits() {
          let e = await fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }),
            t = await e.json();
          return (
            t.map((e) => {
              this.visits.push(e);
            }),
            console.log(d.visits),
            t
          );
        }
      }
      (e = d),
        (s = []),
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, "string");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == typeof t ? t : String(t);
        })((t = "visits"))) in e
          ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = s),
        i(560);
      class l {
        constructor() {
          (this._modalWrapper = document.createElement("div")),
            this._modalWrapper.addEventListener("click", (e) => {
              let t = e.target,
                i = t === this._modal || this._modal.contains(t),
                s = t === this._closeButton;
              (i && !s) ||
                (this._modalWrapper.classList.add("hide"),
                (this._modalWrapper.onanimationend =
                  this._modalWrapper.remove));
            }),
            (this._modalWrapper.className = "modal-window-wrapper"),
            (this._modal = document.createElement("form")),
            (this._modal.className = "modal-window"),
            (this._closeButton = document.createElement("span")),
            (this._closeButton.className = "modal-close-button"),
            this._modal.append(this._closeButton),
            this._modalWrapper.append(this._modal);
        }
        render() {
          document.body.contains(
            document.querySelector(".modal-window-wrapper")
          ) || document.body.prepend(this._modalWrapper);
        }
      }
      class c extends l {
        constructor() {
          super(),
            (this._loginEmailFieldset = document.createElement("fieldset")),
            (this._loginEmailFieldset.className =
              "login-fieldset email-fieldset"),
            (this._loginEmailLabel = document.createElement("label")),
            (this._loginEmailLabel.className = "label email-label"),
            (this._loginEmailLabel.innerText = "Емейл"),
            (this._emailInput = document.createElement("input")),
            (this._emailInput.type = "email"),
            (this._emailInput.className = "input email-input"),
            (this._emailInput.id = "email"),
            (this._emailInput.name = "email"),
            (this._emailInput.placeholder = "example@email.ua"),
            this._emailInput.addEventListener("input", () => {
              this._errorMessage.innerHTML = "";
            }),
            this._loginEmailFieldset.append(
              this._emailInput,
              this._loginEmailLabel
            ),
            (this._loginPasswordFieldset = document.createElement("fieldset")),
            (this._loginPasswordFieldset.className =
              "login-fieldset password-fieldset"),
            (this._loginPasswordLabel = document.createElement("label")),
            (this._loginPasswordLabel.className = "label password-label"),
            (this._loginPasswordLabel.for = "password"),
            (this._loginPasswordLabel.innerText = "Пароль"),
            (this._passwordInput = document.createElement("input")),
            (this._passwordInput.type = "password"),
            (this._passwordInput.className = "input password-input"),
            (this._passwordInput.id = "password"),
            (this._passwordInput.name = "password"),
            (this._passwordInput.placeholder = "example password"),
            this._passwordInput.addEventListener("input", () => {
              this._errorMessage.innerHTML = "";
            }),
            this._loginPasswordFieldset.append(
              this._passwordInput,
              this._loginPasswordLabel
            ),
            (this._errorMessage = document.createElement("span")),
            (this._errorMessage.className = "modal-error"),
            (this._enterButton = document.createElement("button")),
            (this._enterButton.className = "button-check-data"),
            (this._enterButton.innerText = "Увійдіть"),
            (this._enterButton.tabIndex = "0"),
            this._enterButton.addEventListener("click", (e) => {
              this.loginRequest();
            }),
            (this._orText = document.createElement("span")),
            (this._orText.className = "or-text"),
            (this._orText.innerText = "або"),
            (this._registerLink = document.createElement("a")),
            (this._registerLink.className = "register-link"),
            (this._registerLink.target = "_blank"),
            (this._registerLink.tabIndex = "0"),
            (this._registerLink.href =
              "https://ajax.test-danit.com/front-pages/cards-register.html"),
            (this._registerLink.innerText = "Зареєструйтесь"),
            this._modal.append(
              this._loginEmailFieldset,
              this._loginPasswordFieldset,
              this._errorMessage,
              this._enterButton,
              this._orText,
              this._registerLink
            );
        }
        async loginRequest() {
          const e = this._emailInput.value,
            t = this._passwordInput.value;
          (this._enterButton.disabled = !0),
            this._errorMessage.classList.remove("show");
          try {
            let i = await fetch(
              "https://ajax.test-danit.com/api/v2/cards/login",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e, password: t }),
              }
            );
            if (!(await i).ok)
              throw "Перевірте правильність емейлу чи паролю або зареєструйтесь.";
            {
              let e = await i.text();
              this._modalWrapper.remove(),
                localStorage.setItem("clinic-token", `${e}`),
                (y.loginStatus = !0),
                new y().render();
            }
          } catch (e) {
            (this._enterButton.disabled = !1),
              (this._errorMessage.innerHTML = e),
              this._errorMessage.classList.add("show");
          }
        }
      }
      class h extends l {
        constructor() {
          super(),
            (this._createVisitHeader = document.createElement("h2")),
            (this._createVisitHeader.innerText = "Створення візиту"),
            (this._doctorSelectFieldset = document.createElement("fieldset")),
            (this._doctorSelectFieldset.className = "fieldset doctor-fieldset"),
            (this._doctorSelectLegend = document.createElement("legend")),
            (this._doctorSelectLegend.innerText = "Оберіть лікаря"),
            (this._doctorSelect = document.createElement("select")),
            (this._doctorSelect.name = "doctor"),
            this._doctorSelectFieldset.append(
              this._doctorSelectLegend,
              this._doctorSelect
            ),
            this._doctorSelect.addEventListener("input", (e) => {
              const t = this._doctorSelect.value;
              (this._visitFormFields.innerHTML = ""),
                "Терапевт" === t
                  ? this._visitFormFields.append(
                      this._visitPurposeFieldset,
                      this._visitDescriptionFieldset,
                      this._urgencySelectFieldset,
                      this._fullNameInputFieldset,
                      this._ageFieldset
                    )
                  : "Стоматолог" === t
                  ? this._visitFormFields.append(
                      this._visitPurposeFieldset,
                      this._visitDescriptionFieldset,
                      this._urgencySelectFieldset,
                      this._fullNameInputFieldset,
                      this._lastVisitDateFieldset
                    )
                  : this._visitFormFields.append(
                      this._visitPurposeFieldset,
                      this._visitDescriptionFieldset,
                      this._urgencySelectFieldset,
                      this._fullNameInputFieldset,
                      this._bodyPressureFieldset,
                      this._bodyIndexFieldset,
                      this._diseasesFieldset,
                      this._ageFieldset
                    ),
                !this._visitForm.contains(this._createVisitButton) &&
                  this._visitForm.append(this._createVisitButton);
            }),
            (this._visitFormFields = document.createElement("div")),
            (this._visitFormFields.className = "visit-form-fields"),
            (this._visitForm = document.createElement("form")),
            (this._visitForm.className = "form visit-form"),
            (this._visitForm.name = "visitFields"),
            (this._optionDoctorEmpty = document.createElement("option")),
            (this._optionDoctorEmpty.innerText = "..."),
            (this._optionDoctorEmpty.disabled = !0),
            (this._optionDoctorEmpty.selected = !0),
            (this._optionDoctorTherapist = document.createElement("option")),
            (this._optionDoctorTherapist.innerText = "Терапевт"),
            (this._optionDoctorDentist = document.createElement("option")),
            (this._optionDoctorDentist.innerText = "Стоматолог"),
            (this._optionDoctorCardiologist = document.createElement("option")),
            (this._optionDoctorCardiologist.innerText = "Кардіолог"),
            this._doctorSelect.append(
              this._optionDoctorEmpty,
              this._optionDoctorCardiologist,
              this._optionDoctorDentist,
              this._optionDoctorTherapist
            ),
            (this._visitPurposeFieldset = document.createElement("fieldset")),
            (this._visitPurposeFieldset.className =
              "fieldset purpose-fieldset"),
            (this._visitPurposeLegend = document.createElement("legend")),
            (this._visitPurposeLegend.innerText = "Мета візиту"),
            (this._visitPurpose = document.createElement("input")),
            (this._visitPurpose.name = "title"),
            (this._visitPurpose.title =
              "Вкажіть мету візиту. Мінімум 10 символів."),
            (this._visitPurpose.pattern = ".{10,}"),
            (this._visitPurpose.required = !0),
            this._visitPurposeFieldset.append(
              this._visitPurposeLegend,
              this._visitPurpose
            ),
            (this._visitDescriptionFieldset =
              document.createElement("fieldset")),
            (this._visitDescriptionFieldset.className =
              "fieldset description-fieldset"),
            (this._visitDescriptionLegend = document.createElement("legend")),
            (this._visitDescriptionLegend.innerText = "Опис візиту"),
            (this._description = document.createElement("textarea")),
            (this._description.name = "description"),
            (this._description.maxLength = "50"),
            (this._description.required = !0),
            this._visitDescriptionFieldset.append(
              this._visitDescriptionLegend,
              this._description
            ),
            (this._urgencySelectFieldset = document.createElement("fieldset")),
            (this._urgencySelectFieldset.className =
              "fieldset urgency-fieldset"),
            (this._urgencySelectLegend = document.createElement("legend")),
            (this._urgencySelectLegend.innerText = "Терміновість"),
            (this._urgencySelect = document.createElement("select")),
            (this._urgencySelect.name = "urgency"),
            (this._urgencySelectEmpty = document.createElement("option")),
            (this._urgencySelectEmpty.innerText = "..."),
            (this._urgencySelectEmpty.disabled = !0),
            (this._urgencySelectEmpty.selected = !0),
            (this._optionUrgencyHigh = document.createElement("option")),
            (this._optionUrgencyHigh.innerText = "Висока"),
            (this._optionUrgencyNormal = document.createElement("option")),
            (this._optionUrgencyNormal.innerText = "Нормальна"),
            (this._optionUrgencyLow = document.createElement("option")),
            (this._optionUrgencyLow.innerText = "Низька"),
            this._urgencySelect.append(
              this._urgencySelectEmpty,
              this._optionUrgencyHigh,
              this._optionUrgencyNormal,
              this._optionUrgencyLow
            ),
            this._urgencySelectFieldset.append(
              this._urgencySelectLegend,
              this._urgencySelect
            ),
            (this._ageFieldset = document.createElement("fieldset")),
            (this._ageFieldset.className = "fieldset age-fieldset"),
            (this._ageLegend = document.createElement("legend")),
            (this._ageLegend.innerText = "Вік"),
            (this._age = document.createElement("input")),
            (this._age.name = "age"),
            this._ageFieldset.append(this._ageLegend, this._age),
            (this._lastVisitDateFieldset = document.createElement("fieldset")),
            (this._lastVisitDateFieldset.className =
              "fieldset last-visit-fieldset"),
            (this._lastVisitDateLegend = document.createElement("legend")),
            (this._lastVisitDateLegend.innerText = "Дата останнього візиту"),
            (this._lastVisitDate = document.createElement("input")),
            (this._lastVisitDate.name = "lastVisitDate"),
            (this._lastVisitDate.type = "date"),
            this._lastVisitDateFieldset.append(
              this._lastVisitDateLegend,
              this._lastVisitDate
            ),
            (this._fullNameInputFieldset = document.createElement("fieldset")),
            (this._fullNameInputFieldset.className = "fieldset name-fieldset"),
            (this._fullNameInputLegend = document.createElement("legend")),
            (this._fullNameInputLegend.innerText = "Прізвище Ім'я По-батькові"),
            (this._fullNameInput = document.createElement("input")),
            (this._fullNameInput.name = "fullName"),
            this._fullNameInputFieldset.append(
              this._fullNameInputLegend,
              this._fullNameInput
            ),
            (this._bodyPressureFieldset = document.createElement("fieldset")),
            (this._bodyPressureFieldset.className =
              "fieldset presure-fieldset"),
            (this._bodyPressureLegend = document.createElement("legend")),
            (this._bodyPressureLegend.innerText = "Артеріальний тиск"),
            (this._bodyPressureUpper = document.createElement("input")),
            (this._bodyPressureUpper.name = "bpUpper"),
            (this._delimiter = document.createElement("span")),
            (this._delimiter.innerText = "/"),
            (this._bodyPressureLower = document.createElement("input")),
            (this._bodyPressureLower.name = "bpLower"),
            this._bodyPressureFieldset.append(
              this._bodyPressureLegend,
              this._bodyPressureUpper,
              this._delimiter,
              this._bodyPressureLower
            ),
            (this._bodyIndexFieldset = document.createElement("fieldset")),
            (this._bodyIndexFieldset.className =
              "fieldset bodu-index-fieldset"),
            (this._bodyIndexLegend = document.createElement("legend")),
            (this._bodyIndexLegend.innerText = "Індекс маси тіла"),
            (this._bodyIndex = document.createElement("input")),
            (this._bodyIndex.name = "bodyIndex"),
            this._bodyIndexFieldset.append(
              this._bodyIndexLegend,
              this._bodyIndex
            ),
            (this._diseasesFieldset = document.createElement("fieldset")),
            (this._diseasesFieldset.className = "fieldset bodu-index-fieldset"),
            (this._diseasesLegend = document.createElement("legend")),
            (this._diseasesLegend.innerText = "Перенесені захворювання"),
            (this._diseases = document.createElement("textarea")),
            (this._diseases.name = "diseases"),
            this._diseasesFieldset.append(this._diseasesLegend, this._diseases),
            (this._createVisitButton = document.createElement("button")),
            (this._createVisitButton.className = "create-visit"),
            (this._createVisitButton.innerText = "Створити"),
            this._createVisitButton.addEventListener("click", (e) => {
              e.preventDefault();
              const t = Object.fromEntries(new FormData(this._visitForm));
              (this._createVisitButton.disabled = !0), d.postVisit(t);
            }),
            this._visitForm.append(
              this._doctorSelectFieldset,
              this._visitFormFields
            ),
            this._modal.append(this._createVisitHeader, this._visitForm);
        }
      }
      var u = i(593),
        p = i.n(u);
      class m {
        constructor(e) {
          (this._visitDiv = document.createElement("div")),
            (this._visitDiv.className = "visit-container"),
            (this._fullName = document.createElement("p")),
            (this._fullName.innerText = e.fullName),
            (this._doctor = document.createElement("p")),
            (this._doctor.innerText = e.doctor),
            (this._showMoreButton = document.createElement("button")),
            (this._showMoreButton.innerText = "Показати більше"),
            (this._hidenFields = document.createElement("div")),
            (this._description = document.createElement("p")),
            (this._description.innerText = e.description),
            (this._urgency = document.createElement("p")),
            (this._urgency.innerText = e.urgency),
            this._visitDiv.append(
              this._fullName,
              this._doctor,
              this._showMoreButton,
              this._hidenFields
            ),
            this._hidenFields.append(this._description, this._urgency),
            (this._visitParentlement = document.getElementById("visits")),
            (this.responseObject = e),
            (this.fullName = e.fullName),
            (this.doctor = e.doctor),
            (this.title = e.title),
            (this.description = e.description),
            (this.urgency = e.urgency),
            (this._visitCard = document.getElementById("visits")),
            (this.visit = document.createElement("div")),
            (this.visitTitle = document.createElement("div")),
            (this.visitTitlePart1 = document.createElement("div")),
            (this.buttonShow = document.createElement("button")),
            (this.buttonHide = document.createElement("button")),
            (this.buttonEdit = document.createElement("button")),
            (this.buttonStatus = document.createElement("button")),
            (this.logoDone = document.createElement("div")),
            (this.visitAdd = document.createElement("div")),
            (this.visitAddTitle = document.createElement("div")),
            (this.visit.className = "visitDiv"),
            (this.visitTitle.className = "visitTitle"),
            (this.visitTitlePart1.className = "visit_title1"),
            (this.visitAdd.className = "visit_addinfo"),
            (this.buttonShow.className = "button_show"),
            (this.buttonEdit.className = "button_edit"),
            (this.logoDone.className = "logo_done"),
            (this.visitAddTitle.className = "visit_addtitle"),
            this.buttonEdit.setAttribute("id", "buttonEditId"),
            (this.visitAddTitle.innerText = "Додаткова інформація:"),
            (this.buttonShow.innerHTML = "Показати більше"),
            (this.buttonHide.innerHTML = "Приховати"),
            (this.buttonEdit.innerHTML = "Редагувати"),
            (this.buttonStatus.innerHTML = "В"),
            this._visitCard.append(this.visit),
            this.visit.append(this.visitTitle),
            this.visitTitle.append(this.visitTitlePart1),
            this.visitTitlePart1.append(this._elFullName),
            this.visitTitlePart1.append(this._elDoctor),
            this.visitTitle.append(this.logoDone),
            this.visit.append(this.visitAdd),
            this.visit.append(this.buttonShow),
            this.visitAdd.append(this.visitAddTitle),
            this.visitAdd.append(this._elTitle),
            this.visitAdd.append(this._elDescription),
            this.visitAdd.append(this._elUrgency),
            (this.visitAdd.style.display = "none");
        }
        render() {
          this.renderVisitBase();
        }
        renderVisitBase() {
          let e = this;
          this.buttonShow.addEventListener("click", function () {
            e.showInfo();
          }),
            this.buttonHide.addEventListener("click", function () {
              e.hideInfo();
            }),
            this.buttonEdit.addEventListener("click", (e) =>
              console.log((editor = new (p())(responseObject)))
            );
        }
        showInfo() {
          "none" === this.visitAdd.style.display &&
            ((this.visitAdd.style.display = "block"),
            (this.buttonShow.style.display = "none"));
        }
        hideInfo() {
          "block" === this.visitAdd.style.display &&
            ((this.visitAdd.style.display = "none"),
            (this.buttonShow.style.display = "block"));
        }
        get fullName() {
          return this._fullName;
        }
        set fullName(e) {
          this._elFullName || (this._elFullName = document.createElement("p")),
            (this._elFullName.innerText = `Пацієнт: ${e}`),
            (this._fullName = e);
        }
        get doctor() {
          return this._doctor;
        }
        set doctor(e) {
          this._elDoctor || (this._elDoctor = document.createElement("p")),
            (this._elDoctor.innerText = `Лікар: ${e}`),
            (this._doctor = e);
        }
        get title() {
          return this._title;
        }
        set title(e) {
          this._elTitle || (this._elTitle = document.createElement("p")),
            (this._elTitle.innerText = `Мета: ${e};`),
            (this._title = e);
        }
        get description() {
          return this._description;
        }
        set description(e) {
          this._elDescription ||
            (this._elDescription = document.createElement("p")),
            (this._elDescription.innerText = `Опис: ${e};`),
            (this._description = e);
        }
        get urgency() {
          return this._urgency;
        }
        set urgency(e) {
          this._elUrgency || (this._elUrgency = document.createElement("p")),
            (this._elUrgency.innerText = `Терміновість: ${e};`),
            (this._urgency = e);
        }
      }
      class _ extends m {
        constructor(e) {
          super(e),
            (this.bpLower = e.bpLower),
            (this.bpUpper = e.bpUpper),
            (this.bodyIndex = e.bodyIndex),
            (this.diseases = e.diseases),
            (this.age = e.age);
        }
        get bpLower() {
          return this._pressure;
        }
        set bpLower(e) {
          this._elBpLower || (this._elBpLower = document.createElement("p")),
            (this._elBpLower.innerText = `Нижній артеріальний тиск: ${e};`),
            (this._bpLower = e);
        }
        get bpUpper() {
          return this._pressure;
        }
        set bpUpper(e) {
          this._elBpUpper || (this._elBpUpper = document.createElement("p")),
            (this._elBpUpper.innerText = `Верхній артеріальний тиск: ${e};`),
            (this._bpUpper = e);
        }
        get bodyIndex() {
          return this._bodyIndex;
        }
        set bodyIndex(e) {
          this._elBodyIndex ||
            (this._elBodyIndex = document.createElement("p")),
            (this._elBodyIndex.innerText = `Індекс маси тіла: ${e};`),
            (this._bodyIndex = e);
        }
        get diseases() {
          return this._diseases;
        }
        set diseases(e) {
          this._elDiseases || (this._elDiseases = document.createElement("p")),
            (this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${e};`),
            (this._diseases = e);
        }
        get age() {
          return this._age;
        }
        set age(e) {
          this._elAge || (this._elAge = document.createElement("p")),
            (this._elAge.innerText = `Вік: ${e};`),
            (this._age = e);
        }
        render() {
          this.renderVisitBase(),
            this.visitAdd.append(
              this._elBpUpper,
              this._elBpLower,
              this._elBodyIndex,
              this._elDiseases,
              this._elAge
            ),
            this.visitAdd.append(this.buttonHide),
            this.visitAdd.append(this.buttonEdit),
            this.visitAdd.append(this.buttonStatus);
        }
      }
      class g extends m {
        constructor(e) {
          super(e), (this.lastVisit = e.lastVisitDate);
        }
        get lastVisit() {
          return this._lastVisit;
        }
        set lastVisit(e) {
          this._elLastVisit ||
            (this._elLastVisit = document.createElement("p")),
            (this._elLastVisit.innerText = `Дата останнього відвідування: ${e};`),
            (this._lastVisit = e);
        }
        render() {
          this.renderVisitBase(),
            this.visitAdd.append(this._elLastVisit),
            this.visitAdd.append(this.buttonHide),
            this.visitAdd.append(this.buttonEdit);
        }
      }
      class v extends m {
        constructor(e) {
          super(e), (this.age = e.age);
        }
        get age() {
          return this._age;
        }
        set age(e) {
          this._elAge || (this._elAge = document.createElement("p")),
            (this._elAge.innerText = `Вік: ${e};`),
            (this._age = e);
        }
        render() {
          this.renderVisitBase(),
            this.visitAdd.append(this._elAge),
            this.visitAdd.append(this.buttonHide),
            this.visitAdd.append(this.buttonEdit);
        }
      }
      class y {
        constructor() {
          (this._loginButton = document.createElement("button")),
            (this._loginButton.className = "button-enter"),
            (this._loginButton.innerText = "Увійти"),
            this._loginButton.addEventListener("click", (e) => {
              this.getLogin();
            }),
            (this._logoutButton = document.createElement("button")),
            (this._logoutButton.innerText = "Вийти"),
            (this._logoutButton.className = "button logout-button"),
            this._logoutButton.addEventListener("click", (e) => {
              localStorage.removeItem("clinic-token"),
                (y.loginStatus = !1),
                new y().render(),
                (document.getElementById("visits").innerHTML = "");
            }),
            (this._createVisit = document.createElement("button")),
            (this._createVisit.innerText = "Створити візит"),
            this._createVisit.addEventListener("click", (e) => {
              e.preventDefault(), new h().render();
            });
        }
        static isLogged() {
          new y().render();
        }
        render() {
          const e = document.getElementById("login-status");
          return (
            (e.innerHTML = ""),
            localStorage.getItem("clinic-token")
              ? ((y.loginStatus = !0),
                e.append(this._createVisit, this._logoutButton),
                (async function () {
                  let e = await fetch(
                      "https://ajax.test-danit.com/api/v2/cards",
                      {
                        method: "GET",
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "clinic-token"
                          )}`,
                        },
                      }
                    ),
                    t = await e.json();
                  (document.getElementById("visits").innerHTML = ""),
                    await t.map((e) => {
                      "Терапевт" === e.doctor
                        ? new v(e).render()
                        : "Стоматолог" === e.doctor
                        ? new g(e).render()
                        : "Кардіолог" === e.doctor && new _(e).render();
                    });
                })(),
                !0)
              : ((y.loginStatus = !1), e.append(this._loginButton), !1)
          );
        }
        getLogin() {
          new c().render();
        }
      }
      !(function (e, t, i) {
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, "string");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i);
      })(y, "loginStatus", void 0),
        document.createElement("img"),
        !y.loginStatus && y.isLogged(),
        d.getAllVisits();
    })();
})();
