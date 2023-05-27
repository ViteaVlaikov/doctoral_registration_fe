# Используйте образ Node.js в качестве базового образа
FROM node:latest

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Скопируйте файлы package.json и package-lock.json в контейнер
COPY package*.json ./

# Установите зависимости проекта
RUN npm install

# Скопируйте все файлы проекта в контейнер
COPY . .

# Соберите проект React
RUN npm run build

# Укажите порт, на котором будет работать ваше приложение React
EXPOSE 3000

# Запустите команду, чтобы запустить ваше приложение React
CMD [ "npm", "start" ]
