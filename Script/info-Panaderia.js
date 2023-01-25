const url3 = "https://docs.google.com/spreadsheets/d/17XeCcPZjbJEzas9fSQsbgtKNVo2bSZYaunpDaYgHWjo/gviz/tq?";
const output_Panaderia = document.querySelector('.output-Panaderia');

fetch(url3)
.then(res => res.text())
.then(rep =>{
    const data=JSON.parse(rep.substr(47).slice(0,-2));
    const row = document.createElement('tr');
    output_Panaderia.append(row);
    data.table.cols.forEach((heading)=>{
        console.log(heading);
        const cell = document.createElement('td');
        cell.style.padding = '0.5em';
        cell.style.fontSize = '25px';
        cell.style.color = 'black';
        cell.style.fontWeight = 'bold';
        cell.textContent = heading.label;

        output_Panaderia.append(cell);
    })

    data.table.rows.forEach((main)=>{
        const container = document.createElement('tr');
        console.log(container);
        output_Panaderia.append(container);
        main.c.forEach((ele)=>{
            const cell = document.createElement('td');
            console.log(ele.v)

/*                 cell.style.background = 'green'; */
                cell.style.padding = '0.5em';
                if(ele.v == '$'){
                    console.log('ACA ESTA PELOTUDO: ' + ele.v);
/*                     cell.style.background = 'orange'; */
                    cell.style.textAlign = 'right';
                    cell.style.width = '1px';
                    cell.style.width = '0.1%';
                }
                if(ele.v == 'c/u' || ele.v == 'kg'){
                    console.log('ACA ESTA PELOTUDO: ' + ele.v);
/*                     cell.style.background = 'orange'; */
                    cell.style.textAlign = 'left';
                    cell.style.width = '1px';
                    cell.style.width = '0.1%';
                }
            cell.textContent = ele.v;
            container.append(cell);
            console.log(ele);
        })

    })
    
})