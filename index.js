function check() {
    let bDay = document.getElementById('bDay');
    let error = document.getElementById('error');
    let result = document.getElementById('result');

    const bDayDate = new Date(bDay.value);
    const today = new Date();
    const dayDifference = bDayDate - today;
    const dayTransform = Math.ceil(dayDifference / (1000 * 60 * 60 * 24));

    if (isNaN(bDayDate)) {
        error.textContent = 'Пожалуйста, введите вашу дату рождения';
        result.textContent = '';
    } else if (dayTransform < 0) {
        error.textContent = '';
        result.textContent = 'Ваш день рождения уже прошёл.';
    } else {
        error.textContent = '';

        let dayWord = 'день';
        if (dayTransform % 10 === 1 && dayTransform % 100 !== 11) {
            dayWord = 'день';
        } else if ([2, 3, 4].includes(dayTransform % 10) && ![12, 13, 14].includes(dayTransform % 100)) {
            dayWord = 'дня';
        } else {
            dayWord = 'дней';
        }
        result.textContent = `До вашего дня рождения осталось ${dayTransform} ${dayWord}.`;
    }
}