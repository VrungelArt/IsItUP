class Message {
    static get didntUnderstand() {
        return `Вибачте, я не зрозумів, що ви написали! Спробуйте написати URL-адресу. ` +
            `або скористайтеся командою \/help`;
    }

    static get verifyHowToUse() {
        return `Щоб використовувати команду /verify, потрібно написати URL-адресу. ` +
            `Наприклад: /verify telegram.org`;
    }

    static get trackHowToUse() {
        return `Щоб використовувати команду /track, потрібно передати URL-адресу для відстеження. ` +
            `Наприклад: /track telegram.org`;
    }

    static welcomeFirstStep(username) {
        return `Привіт ${username}, я бот, моя місія — розповісти вам` +
            ` якщо будь-який веб-сайт працює чи не працює.`;
    }

    static get welcomeSecondStep() {
        return `Ми можемо спілкуватися за допомогою цих команд:\n` +
            `\/verify yourdomain.com - Перевірити, чи URL-адреса активна чи неактивна \n` +
            `\/track yourdomain.com - Відстежувати URL-адресу та відправити сповіщення, якщо статус буде змінено\n` +
            `\/track_list - Отримайти список усіх відстежуваних URL-адрес\n` +
            `\/track_delete - Видалити URL-адресу зі списку треків\n` +
            `Ви також можете просто ввести URL-адресу, щоб дізнатися, працює сайт чи ні.`;
    }

    static successStatus(url) {
        return `${url} працює \u{1F604}`;
    }

    static errorStatus(url) {
        return `${url} не працює \u{1F633}`;
    }

    static clientOrServerErrorStatus(url, statusCode) {
        return `${url} працює, але код статусу` +
            ` це ${statusCode} \u{1F914}`;
    }

    static addedToTrackList(url) {
        return `${url} додано до списку відстеження.` +
            ` Ви отримуватимете сповіщення кожного разу, коли статус сайту буде змінено.`;
    }

    static get trackListHowToUse() {
        return `Щоб переглянути список відстежуваних URL-адрес, введіть: /track_list`;
    }

    static get checkedAt() {
        let moment = require('moment');
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss A');
        let timezone = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1];

        return ` перевірено ${currentTime} ${timezone}. `;
    }

    static get urlNotFound() {
        return `У вас немає жодної відстежуваної URL-адреси, щоб відстежити використання URL-адреси` +
            ` застосуйте команду відстеження. Наприклад: /track domain.com`;
    }

    static get deleteSuccess() {
        return `Цей URL видалено. ${Message.trackListHowToUse}`;
    }

    static get deleteError() {
        return `Вибачте, я не можу видалити цю URL-адресу. ${Message.trackListHowToUse}`;
    }

    static getListMessage(urls) {
        switch (urls.length) {
            case 0:
                return Message.urlNotFound;

            case 1:
                return `Ваш відстежуваний URL-адрес: ${urls[0]}`;

            default:
                return `Ваші відстежувані URL-адреси:\n${urls.join("\n")}`;
        }

    }
}

module.exports = Message;
