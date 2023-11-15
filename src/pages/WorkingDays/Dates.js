
import styles from './WorkingDays.module.scss'

export const daysStatusContents = [
    {
        id: 1,
        style: <div className={styles.D}>D</div>,
        name: "Dam olish kuni"
    },
    {
        id: 2,
        style: <div className={styles.M}>M</div>,
        name: "Mexnat Tatili"
    },
    {
        id: 3,
        style: <div className={styles.B}>B</div>,
        name: "Bayram kunlari"
    },
    {
        id: 4,
        style: <div className={styles.T}>T</div>,
        name: "O’z hisobidan tatil"
    },
    {
        id: 5,
        style: <div className={styles.X}>X</div>,
        name: "Besabab qoldirilgan kun"
    },
    {
        id: 6,
        style: <div className={styles.Tk}>T</div>,
        name: "Kasallik varaqasi"
    },
    {
        id: 6,
        style: <div className={styles.S}>S</div>,
        name: "Xizmat safari"
    },
]

export const createDaysFromUser = (came, went, workedHours, statusId) => {
    var date = new Date(2022, 10, 1);
    var days = [];
    while (date.getMonth() === 10) {
        days.push({
            date: new Date(date),
            went,
            came,
            statusId,
            workedHours,
        });
        date.setDate(date.getDate() + 1);
    }
    return days;

}
const salary = {
    salary: 4905760,
    surcharge_percentage: 49,
    plan: 10000000,
    actual_plan: 11000000,
    efficiency: -10,
    surcharge: 2850000,
    remaining_amount: 5856235,

}
export const userList = [
    {
        id: 1,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser("8:40", "17:50", 8, null),
        salary
    },
    {
        id: 2,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser("9:40", "17:50", 7, null),
        salary
    },
    {
        id: 3,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser("9:40", "17:50", null, 1),
        salary
    },
    {
        id: 3,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser(null, null, null, 2),
        salary
    },
    {
        id: 4,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser("9:40", "17:50", null, 3),
        salary
    },
    {
        id: 5,
        fio: 'Axmadjonov ilhomjon inomjonovich',
        inn: 'INN: 123456789',
        dayList: createDaysFromUser("9:40", "17:50", null, 4),
        salary
    },
];

export const getDays = () => {
    var date = new Date(2022, 10, 1);
    var days = [];
    while (date.getMonth() === 10) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;

}

export const allHours = [
    {
        id: 1,
        minutes: 180,
        came: "06:00",
        went: "08:45",
        active: false,
        satusId: 2
    },
    {
        id: 2,
        minutes: 240,
        came: "08:45",
        went: "12:55",
        active: true,
        satusId: 1
    },
    {
        id: 3,
        minutes: 65,
        came: "12:55",
        went: "14:00",
        active: false,
        satusId: 3
    },
    {
        id: 4,
        minutes: 240,
        came: "14:00",
        went: "18:00",
        active: true,
        satusId: 1
    },
    {
        id: 5,
        minutes: 360,
        came: "18:00",
        went: "24:00",
        active: false,
        satusId: 1
    },
]

export const getDaysFromUser = () => {
    var date = new Date(2022, 10, 1);
    var days = [];
    while (date.getMonth() === 10) {
        days.push(
            {
                date: new Date(date),
                allHours: allHours
            }
        );
        date.setDate(date.getDate() + 1);
    }
    return days;

}

export const daysStatuse = (id) => {
    let status;
    daysStatusContents.forEach((item) => {
        if (id == item.id) {
            status = item.style;
        }
    }
    );
    return status;
}