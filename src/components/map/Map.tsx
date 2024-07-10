import React, { useState, ChangeEvent, FormEvent } from "react";

const Map = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
    question: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: formData.name === "",
      phone: !/^\+?\d{10,14}$/.test(formData.phone),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      question: formData.question === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        question: "",
      });
    }
  };

  return (
    <div className="mt-16">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="90%"
            height="612"
            className="mb-10 ml-[25px] rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="h-[612px] w-full rounded-lg bg-white p-5 md:w-[650px]"
          >
            <h1 className="mb-5 text-2xl">Остались вопросы?</h1>
            <p className="mb-5 text-gray-600">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </p>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`h-12 w-full rounded-lg px-4 placeholder-transparent focus:outline-none ${
                  formErrors.name ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Ваше имя"
              />
              <label
                className={`absolute left-4 ${
                  formData.name ? "top-2" : "top-1/2"
                } -translate-y-1/2 transform text-gray-400 transition-all ${
                  formData.name
                    ? "text-xs text-blue-500"
                    : "text-base text-gray-400"
                }`}
                htmlFor="name"
              >
                Ваше имя
              </label>
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">
                  Это поле обязательно для заполнения.
                </p>
              )}
              <hr className="w-[420px]" />
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`h-12 w-full rounded-lg px-4 placeholder-transparent focus:outline-none ${
                  formErrors.phone ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Ваш телефон"
              />
              <label
                className={`absolute left-4 ${
                  formData.phone ? "top-2" : "top-1/2"
                } -translate-y-1/2 transform text-gray-400 transition-all ${
                  formData.phone
                    ? "text-xs text-blue-500"
                    : "text-base text-gray-400"
                }`}
                htmlFor="phone"
              >
                Ваш телефон
              </label>
              {formErrors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  Пожалуйста, введите действительный номер телефона.
                </p>
              )}
              <hr className="w-[420px]" />
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`h-12 w-full rounded-lg px-4 placeholder-transparent focus:outline-none ${
                  formErrors.email ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Ваш email"
              />
              <label
                className={`absolute left-4 ${
                  formData.email ? "top-2" : "top-1/2"
                } -translate-y-1/2 transform text-gray-400 transition-all ${
                  formData.email
                    ? "text-xs text-blue-500"
                    : "text-base text-gray-400"
                }`}
                htmlFor="email"
              >
                Ваш email
              </label>
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-500">
                  Пожалуйста, введите действительный адрес электронной почты.
                </p>
              )}
              <hr className="w-[420px]" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="relative mb-4">
              <input
                type="text"
                id="question"
                value={formData.question}
                onChange={handleChange}
                className={`h-12 w-full rounded-lg px-4 placeholder-transparent focus:outline-none ${
                  formErrors.question
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Ваш вопрос"
              />
              <label
                className={`absolute left-4 ${
                  formData.question ? "top-2" : "top-1/2"
                } -translate-y-1/2 transform text-gray-400 transition-all ${
                  formData.question
                    ? "text-xs text-blue-500"
                    : "text-base text-gray-400"
                }`}
                htmlFor="question"
              >
                Ваш вопрос
              </label>
              {formErrors.question && (
                <p className="mt-1 text-xs text-red-500">
                  Это поле обязательно для заполнения.
                </p>
              )}
              <hr className="w-[420px]" />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="h-10 w-32 rounded-lg bg-teal-600 text-white"
              >
                Отправить
              </button>
              <p className="text-xs text-gray-600">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных
                данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
