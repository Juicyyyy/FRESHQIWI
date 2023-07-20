function CBR_XML_Daily_Ru(rates) { 
    const wrapper = document.querySelector('.wrapper');
    const select = wrapper.querySelector('.select');
    const description = document.querySelector('.description');
    const descriptionName = description.querySelector('.description__name');
    const descriptionDate = description.querySelector('.description__date');
    const descriptionPrevDate = description.querySelector('.description__prevDate');
    
    for (let i = 0; i < Object.keys(rates.Valute).length; i++) {
        let text = rates.Valute[Object.keys(rates.Valute)[i]]['ID'] + ' - ' + rates.Valute[Object.keys(rates.Valute)[i]]['Name'];
        let option = document.createElement('option');
        select.insertAdjacentElement('beforeend', option);
        option.innerHTML = text;
    }

    select.addEventListener('change', function() {
        if(select.options[select.selectedIndex].text !== 'Выберите валюту') {
            let text = select.options[select.selectedIndex].text;
            let ID = text.split(' - ');
            let code;
            let value;
            
            for (let i = 0; i < Object.keys(rates.Valute).length; i++) {
                if(rates.Valute[Object.keys(rates.Valute)[i]]['ID'] === ID[0]) {
                    code = Object.keys(rates.Valute)[i];
                    value = rates.Valute[Object.keys(rates.Valute)[i]]['Value'];
                    prevValue = rates.Valute[Object.keys(rates.Valute)[i]]['Previous'];
                }
            }
            const [year, month, day] = (rates.Date).substr(0, 10).split('-');
            const [prevYear, prevMonth, prevDay] = (rates.PreviousDate).substr(0, 10).split('-');
            let date = day + '/' + month + '/' + year + ', ' + (rates.Date).slice(11, 19);
            let prevDate = prevDay + '/' + prevMonth + '/' + prevYear + ', ' + (rates.PreviousDate).slice(11, 19);

            descriptionName.innerHTML = select.options[select.selectedIndex].text + ' (' + code + ')';
            descriptionDate.innerHTML = date + ' - ' + value;
            descriptionPrevDate.innerHTML = prevDate + ' - ' + prevValue;
        }
    }) 
}


