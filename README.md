# Дипломная работа MyCloud online-Storage
Это веб-приложение для управление файлами пользователя, разработанное на Django и React Js.

## Требование 
Убедитесь, что в вашей системе установлены Python и Node js:
- [Python version 3.11.0](https://www.python.org/downloads/release/python-3913/) 
- [Node version 16.17.1](https://nodejs.org/en/download/)


## Установка проекта
- Склонируйте репозиторий в локальную папку
   ```sh
    git clone https://github.com/ValentinSilivankov/Diplom_MyCloud.git
    ```
    
## backend - Django, серверная часть.

### Запуск

Для запуска **backend**-а у вас должен быть установлен **Python 3.11.0.**

- Создайте виртуальную среду Python для серверной части
  ```sh
    python -m venv venv
    ```

- Активировать виртуальную среду
  ```sh
  # для winodws
    venv\Scripts\activate
  # для linux
    source myvenv/bin/activate
    ```

- Установить библиотеки Python
  ```sh
   cd backend
   pip install -r requirements.txt
    ```

- Установите PostgreSQL. Создайте базу данных PostgreSQL.

- Cоздайте файл `.env` рядом с `manage.py` и запишите туда данные в таком формате: `ПЕРЕМЕННАЯ=значение`.

  Доступны следущие переменные:
  ```
  - `ADMIN_PASSWORD` - пароль для супер пользователя
  - `DEBUG` — дебаг-режим. Поставьте `True`, чтобы увидеть отладочную информацию в случае ошибки. Выключается значением `False`
  - `SECRET_KEY` — секретный ключ проекта. Например: `fx49389f43xf3984xf9384`
  - `DB_NAME` - имя  базы данных
  - `DB_USER` - имя пользователя базы данных
  - `DB_PASSWORD` - пароль пользователя базы днных
  - `DB_HOST` - сервер на котором находиться БД. Например: `127.0.0.1`
  - `PORT` - порт БД. Например: `5432`
  ```

- Выполнить миграции
  ```
  (env) $ python manage.py makemigrations
  (env) $ python manage.py migrate
  ```

- Запустите Django server
  ```sh
   python manage.py runserver
    ```

После этого переходите по ссылке [127.0.0.1:8000](http://127.0.0.1:8000/admin/), вы увидите главную страницу.


## frontend - React App, клиенская  часть.

Данный проект создан с помощью [Create React App](https://github.com/facebook/create-react-app).

- Откройте новый терминал и перейдите в каталог внешнего интерфейса.
  ```sh
   cd frontend/
    ```
- Установите библиотеки, используя npm
  ```sh
   npm install
    ```
- Запуск Node сервера
  ```sh
   npm start
    ```
- После запуска  вы можете получить доступ к приложению на http://localhost:3000/