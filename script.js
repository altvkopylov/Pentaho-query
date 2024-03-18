// Спортбук + казино
// [Период.time].[2024].[2024.Q1].[2024.03].[2024.03.13]
// [Период.time].[2024].[2024.Q1].[2024.03]
// [Период.time].[2024].[2024.Q1]
// [Период.time].[2024]

// Статистика по игрокам:
// [date.period].[2024].[2024.Q1].[2024.03].[2024.03.14]
// [date.period].[2024].[2024.Q1].[2024.03]
// [date.period].[2024].[2024.Q1]
// [date.period].[2024]

// ID
// [userid].[100450388]

const users = document.querySelector('#users');

const getUsersList = document.querySelector('.get-users-list');
const clear = document.querySelector('.clear');

const pentahoQuery = document.querySelector('.pentaho-query');
const count = document.querySelector('.count');

getUsersList.addEventListener('click', () => {
    let result = [];
    const userList = users.value.split(' ');

    for (let user of userList) {
        if (user == ['']) {
            return
        }
        result.push(`[userid].[${user}]`)
    }
    result = result.join(', ');
    
    pentahoQuery.textContent = result;
    count.textContent = userList.length;
})

clear.addEventListener('click', () => {
    pentahoQuery.textContent = '';
    users.value = '';
})




const getDateBtn = document.querySelector('.get-date');
const dateFrom = document.querySelector('.date-from');
const dateTo = document.querySelector('.date-to');

getDateBtn.addEventListener('click', () => {
    const dateFromValue = new Date(dateFrom.value);
    const dateToValue = new Date(dateTo.value);
    const dayDiff = ((dateToValue - dateFromValue) / 24 / 60 / 60 / 1000) + 1;
    // 86400000
    console.log(dayDiff)

    for (let i = 0; i < dayDiff; i++) {
        console.log(new Date(dateFromValue.getTime() + 86400000 * i))
    }
})