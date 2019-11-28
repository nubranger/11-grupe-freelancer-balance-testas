let count = 0
function renderTable( ) {
    let tableHead = '';
    let tableContent = '';
    let tableFooter = '';


    for ( let i=0; i<account.length; i++ ) {
        const item = account[i];
        const m = months[i];
        console.log(m)
        

        tableHead =  `
        <div class="cell">#</div>
        <div class="cell">Mėnuo</div>
        <div class="cell">Įplaukos</div>
        <div class="cell">Išlaidos</div>
        <div class="cell">Balansas</div>
                `;
        document.querySelector('.table-head').innerHTML = tableHead; 

        
        count++;
        tableContent =  tableContent +`
        <div class="table-row">
                        <div class="cell">${count}</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">${item.income}</div>
                        <div class="cell">${item.expense}</div>
                        <div class="cell">150.00 Eur</div>
                    </div>
        
                `;
        document.querySelector('.table-content').innerHTML = tableContent; 
        
        
        tableFooter =  `
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">0.00 Eur</div>
        <div class="cell">0.00 Eur</div>
        <div class="cell">0.00 Eur</div>
                `;

        document.querySelector('.table-footer').innerHTML = tableFooter; 
    }


   
}
