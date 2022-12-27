'use strict';

const data = [
    {id: 1, name: 'Nikita', age: 37, beauty: true},
    {id: 2, name: 'Dan', age: 27, beauty: false},
    {id: 3, name: 'Lulu', age: 5, beauty: true},
    {id: 4, name: 'Asya_suka', age: 155, beauty: true},
    {id: 5, name: 'Fil', age: 10, beauty: true}
];

// Функция создания элемента и присоединения его к "родителю"
function createEl(elType, appendToEl) {
    const createdEl = document.createElement(elType);
    appendToEl.append(createdEl); 
    return createdEl;
};
// Функция (в данном контексте Компонента) создания "поля"
function createInput(props) {
    const input = document.createElement('input');
    input.placeholder = props.label;
    input.addEventListener('input', () => {props.onInput(input.value)});
    return input;
}
// Функция (в данном контексте Компонента) создания "HTML"-элемента для вывода ТЕКСта
function createMessage(props) {
    const elMessage = document.createElement('div');
    elMessage.textContent = props.textMess;
    elMessage.className = 'message';
    return elMessage;
}


// ----- Заголовок -----
// Функция (в данном контексте Компонента) создания ячейки (th) заголовка таблицы
// function createTh(dataTh) {
//     let th = document.createElement('th');
//     th.innerHTML = dataTh;
//     return th;
// }
function createTh(props) {
    const th = document.createElement('th');
    th.innerHTML = props.dataTh;
    return th;
}
// Функция (в данном контексте Компонента) создания заголовка таблицы
// function createHeaderTable(arrData) {
//     const headTable = document.createElement('tr');
//         for (let key in arrData[0]) {
//             headTable.append(createTh({dataTh: key}));
//         }
//     return headTable; 
// };
function createHeaderTable(props) {
    const headTable = document.createElement('tr');
        for (let key in props.arrData_0) {
            headTable.append(createTh({dataTh: key}));
        }
    return headTable; 
};


// ----- Строка/ячейка -----
// Функция (в данном контексте Компонента) создания ячейки (td) таблицы
// function createTd(dataTd) {
//     let td = document.createElement('td');
//     td.innerHTML = dataTd;
//     return td;
// };
function createTd(props) {
    const td = document.createElement('td');
    td.innerHTML = props.dataTd;
    return td;
}
// Функция (в данном контексте Компонента) создания строки (tr) таблицы
// function createTr(dataTr) {
//     let tr = document.createElement('tr');
//     for (let key in dataTr) {
//         tr.append(createTd({dataTd: dataTr[key]}));
//     }
//     return tr;
// }
function createTr(props) {
    const tr = document.createElement('tr');
    for (let key in props.dataTr) {
        //const dataTd = props.dataTr[key];
        tr.append(createTd({dataTd: props.dataTr[key]}));
    }
    return tr;
}


//   ----- создание Таблицы -----
// function createTable(arrData) {
//     let table
//     if (arrData.length != null) {
//         table = document.createElement('table');
//         let headTable = createHeaderTable({arrData_0: data[0]});
//         table.append(headTable);
//         arrData.forEach((currentValue, index, array) => {
//             table.append(createTr(currentValue));   
//         })
//     }
//     return table;
// };
function createTable(props) {
    let table
    if (props.arrData.length !== 0) {
        table = document.createElement('table');
        let headTable = createHeaderTable({arrData_0: props.arrData[0]});
        table.append(headTable);
        props.arrData.forEach((currentValue, index, array) => {
            table.append(createTr({dataTr: currentValue}));   
        })
    } else {
        return createMessage({textMess: 'Никита сказал написать "Нет данных" в красной, нет - в серой рамочке.'});
        // table = document.createElement('div');     // - Работающий вариант 1, предыдущий
        // table.textContent = 'Никита сказал написать "Нет данных" в красной, нет - в серой рамочке.';
    }
    return table;
};


function app() {
    const elApp = createEl('div', document.body);

    const elH1 = createEl('h1', elApp);
    elH1.innerHTML = 'Жопа';


    const elInput = createInput({label: 'Поиск', onInput: filterOnInput });
    elApp.append(elInput);
    // ----------------
    function filterOnInput (inpValue) {
        let filterArr;
        if (inpValue === '') {
            filterArr = data;
        } else {
            filterArr = data.filter(function(item) {
                //return item.name === inpValue   - Работающий вариант 1, предыдущий
                const r = new RegExp(inpValue, 'gi');
                return r.test(item.name) || (item.age === Number(inpValue));
            })
        }
        //console.log(filterArr);
        // if (filterArr.length !== 0) {     // - Работающий вариант 1, предыдущий
            tableWrapper.innerHTML = null;
            elTable(filterArr, tableWrapper);
        // } else {
            // tableWrapper.innerHTML = null;    // - Работающий вариант 1, предыдущий
            // const tableEmpty = createEl('table', tableWrapper);   // - Работающий вариант 1, предыдущий
            // const headTableEmpty = createHeaderTable({arrData_0: data[0]});
            // tableEmpty.append(headTableEmpty);

        // }
    
    }

    

    const tableWrapper = createEl('div', elApp); 
    

    function elTable(tableData, tableWrapper) {
        const elTable = createTable({arrData: tableData});
        tableWrapper.append(elTable);
    };
    elTable(data, tableWrapper);
};


app();











// import { App } from './app/app';
// import { Message } from './app/message/message';
// import './style.css';

// const showClickedInMessage = e => {
//     const message = Message({text: e.value});
//     document.body.appendChild(message)
// }
// const app = App(showClickedInMessage)

// document.body.appendChild(app);

